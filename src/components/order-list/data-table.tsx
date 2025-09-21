import * as React from "react"
import { 
  Table,
} from "@/components/ui/table"
import { DataTableContext, type DataTableContextType } from "@/hooks/use-data-table"
import { DataTableToolbar } from "./data-table-toolbar"
import { DataTableBody } from "./data-table-body"
import { DataTableHeader } from "./data-table-header"
import { DataTablePagination } from "./pagination"

// Types
interface Column<T> {
  key: keyof T
  header: string
  cell?: (item: T) => React.ReactNode
  sortable?: boolean
}

interface FilterOption {
  key: string
  label: string
  options: { value: string; label: string }[]
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  searchKey?: keyof T
  onRowClick?: (item: T) => void
  selectedRows?: T[]
  onSelectionChange?: (selected: T[]) => void
  getRowId?: (item: T) => string
  actions?: (item: T) => React.ReactNode
  onAddNew?: () => void
  filterOptions?: FilterOption[]
  onFilterChange?: (filters: Record<string, string[]>) => void
}



// Main DataTable Component
function DataTable<T>({
  data,
  columns,
  searchKey,
  onRowClick,
  selectedRows = [],
  onSelectionChange,
  getRowId = (item: T) => String((item as unknown as { id: string })?.id || Math.random()),
  actions,
  onAddNew,
  filterOptions = [],
  onFilterChange,
}: DataTableProps<T>) {
  const [search, setSearch] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage] = React.useState(10)
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof T | null
    direction: 'asc' | 'desc'
  }>({ key: null, direction: 'asc' })
  const [filters, setFilters] = React.useState<Record<string, string[]>>({})

  // Filter data based on search
  const filteredData = React.useMemo(() => {
    let result = data

    // Apply search filter
    if (search && searchKey) {
      result = result.filter((item) => {
        const value = item[searchKey]
        
        // Handle nested object search (like user.name)
        if (typeof value === 'object' && value !== null) {
          // If it's a user object, search in the name property
          if ('name' in value) {
            return String((value as { name: string }).name).toLowerCase().includes(search.toLowerCase())
          }
          // For other objects, stringify and search
          return JSON.stringify(value).toLowerCase().includes(search.toLowerCase())
        }
        
        return String(value).toLowerCase().includes(search.toLowerCase())
      })
    }

    // Apply column filters
    Object.entries(filters).forEach(([filterKey, filterValues]) => {
      if (filterValues.length > 0) {
        result = result.filter((item) => {
          const value = (item as { [key: string]: unknown })[filterKey]
          const stringValue = typeof value === 'object' && value !== null && 'name' in value 
            ? (value as { name: string }).name 
            : String(value)
          return filterValues.includes(stringValue)
        })
      }
    })

    return result
  }, [data, search, searchKey, filters])

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return filteredData

    return [...filteredData].sort((a, b) => {
      let aValue: unknown = a[sortConfig.key!]
      let bValue: unknown = b[sortConfig.key!]
      
      // Handle nested object sorting (like user.name)
      if (typeof aValue === 'object' && aValue !== null && 'name' in aValue) {
        aValue = (aValue as { name: string }).name
      }
      if (typeof bValue === 'object' && bValue !== null && 'name' in bValue) {
        bValue = (bValue as { name: string }).name
      }
      
      if (String(aValue) < String(bValue)) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (String(aValue) > String(bValue)) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredData, sortConfig])

  // Paginate data
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return sortedData.slice(startIndex, endIndex)
  }, [sortedData, currentPage, itemsPerPage])

  const totalPages = Math.ceil(sortedData.length / itemsPerPage)

  const handleSort = (key: keyof T) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectionChange?.(paginatedData)
    } else {
      onSelectionChange?.([])
    }
  }

  const handleFilterChange = (filterKey: string, value: string, checked: boolean) => {
    setFilters(prev => {
      const currentValues = prev[filterKey] || []
      const newValues = checked 
        ? [...currentValues, value]
        : currentValues.filter(v => v !== value)
      
      const newFilters = { ...prev, [filterKey]: newValues }
      onFilterChange?.(newFilters)
      return newFilters
    })
  }

  const clearFilters = () => {
    setFilters({})
    onFilterChange?.({})
  }

  const isAllSelected = paginatedData.length > 0 && paginatedData.every(item => 
    selectedRows.some(selected => getRowId(selected) === getRowId(item))
  )

  const contextValue: DataTableContextType<T> = {
    data: paginatedData,
    columns,
    searchKey,
    onRowClick,
    selectedRows,
    onSelectionChange: onSelectionChange || (() => {}),
    getRowId,
    actions,
    onAddNew,
    filterOptions,
    onFilterChange,
  }

  return (
    <DataTableContext.Provider value={contextValue as DataTableContextType<unknown>}>
      <div className="space-y-4">
        <DataTableToolbar 
          search={search} 
          onSearchChange={setSearch}
          sortConfig={sortConfig}
          onSort={handleSort}
          columns={columns}
          filters={filters}
          onFilterChange={handleFilterChange}
          clearFilters={clearFilters}
        />
        <div className="rounded-md border">
          <Table>
            <DataTableHeader 
              columns={columns} 
              onSort={handleSort}
              sortConfig={sortConfig}
              onSelectAll={handleSelectAll}
              isAllSelected={isAllSelected}
            />
            <DataTableBody />
          </Table>
        </div>
        <DataTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={sortedData.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </DataTableContext.Provider>
  )
}





export { DataTable, type Column, type DataTableProps, type FilterOption }
