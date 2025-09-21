import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  MoreHorizontal,
  Plus,
  Filter,
  ArrowUpDown,
  Search,
  ArrowUp,
  ArrowDown,
  X
} from "lucide-react"

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

interface DataTableContextType<T> {
  data: T[]
  columns: Column<T>[]
  searchKey?: keyof T
  onRowClick?: (item: T) => void
  selectedRows: T[]
  onSelectionChange: (selected: T[]) => void
  getRowId: (item: T) => string
  actions?: (item: T) => React.ReactNode
  onAddNew?: () => void
  filterOptions?: FilterOption[]
  onFilterChange?: (filters: Record<string, string[]>) => void
}

const DataTableContext = React.createContext<DataTableContextType<unknown> | null>(null)

function useDataTable<T>() {
  const context = React.useContext(DataTableContext)
  if (!context) {
    throw new Error("useDataTable must be used within a DataTable")
  }
  return context as DataTableContextType<T>
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

// Toolbar Component
interface DataTableToolbarProps<T> {
  search: string
  onSearchChange: (value: string) => void
  sortConfig: { key: keyof T | null; direction: 'asc' | 'desc' }
  onSort: (key: keyof T) => void
  columns: Column<T>[]
  filters: Record<string, string[]>
  onFilterChange: (filterKey: string, value: string, checked: boolean) => void
  clearFilters: () => void
}

function DataTableToolbar<T>({ 
  search, 
  onSearchChange, 
  sortConfig, 
  onSort, 
  columns,
  filters,
  onFilterChange,
  clearFilters
}: DataTableToolbarProps<T>) {
  const { onAddNew, filterOptions } = useDataTable<T>()
  
  const activeFiltersCount = Object.values(filters).flat().length

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button size="sm" className="h-8" onClick={onAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-4 w-4 mr-2" />
              Filter
              {activeFiltersCount > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {filterOptions?.map((filter) => (
              <div key={filter.key}>
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  {filter.label}
                </DropdownMenuLabel>
                {filter.options.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.value}
                    checked={filters[filter.key]?.includes(option.value) || false}
                    onCheckedChange={(checked) => onFilterChange(filter.key, option.value, checked)}
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
              </div>
            ))}
            {activeFiltersCount > 0 && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={clearFilters}>
                  <X className="h-4 w-4 mr-2" />
                  Clear all filters
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
              {sortConfig.key && (
                <span className="ml-2">
                  {sortConfig.direction === 'asc' ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {columns.filter(col => col.sortable).map((column) => (
              <DropdownMenuItem
                key={String(column.key)}
                onClick={() => onSort(column.key)}
                className="flex items-center justify-between"
              >
                {column.header}
                {sortConfig.key === column.key && (
                  sortConfig.direction === 'asc' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 w-[200px]"
          />
        </div>
      </div>
    </div>
  )
}

// Header Component
interface DataTableHeaderProps<T> {
  columns: Column<T>[]
  onSort: (key: keyof T) => void
  sortConfig: { key: keyof T | null; direction: 'asc' | 'desc' }
  onSelectAll: (checked: boolean) => void
  isAllSelected: boolean
}

function DataTableHeader<T>({ 
  columns, 
  onSort, 
  sortConfig,
  onSelectAll, 
  isAllSelected 
}: DataTableHeaderProps<T>) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-12">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={(e) => onSelectAll(e.target.checked)}
            className="rounded border-gray-300"
          />
        </TableHead>
        {columns.map((column, index) => (
          <TableHead key={index}>
            {column.sortable ? (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 p-0 font-medium"
                onClick={() => onSort(column.key)}
              >
                {column.header}
                {sortConfig.key === column.key ? (
                  sortConfig.direction === 'asc' ? (
                    <ArrowUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowDown className="ml-2 h-4 w-4" />
                  )
                ) : (
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                )}
              </Button>
            ) : (
              column.header
            )}
          </TableHead>
        ))}
        <TableHead className="w-12">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}

// Body Component
function DataTableBody<T>() {
  const { data, columns, onRowClick, selectedRows, onSelectionChange, getRowId, actions } = useDataTable<T>()

  return (
    <TableBody>
      {data.map((item) => {
        const isSelected = selectedRows.some(selected => getRowId(selected) === getRowId(item))
        
        return (
          <TableRow
            key={getRowId(item)}
            className={cn(
              "cursor-pointer",
              isSelected && "bg-muted/50"
            )}
            onClick={() => onRowClick?.(item)}
          >
            <TableCell>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={(e) => {
                  e.stopPropagation()
                  if (e.target.checked) {
                    onSelectionChange([...selectedRows, item])
                  } else {
                    onSelectionChange(selectedRows.filter(selected => getRowId(selected) !== getRowId(item)))
                  }
                }}
                className="rounded border-gray-100"
              />
            </TableCell>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>
                {column.cell ? column.cell(item) : String(item[column.key])}
              </TableCell>
            ))}
            <TableCell>
              {actions ? actions(item) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

// Pagination Component
interface DataTablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
}

function DataTablePagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: DataTablePaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Showing {startItem} to {endItem} of {totalItems} entries
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum
          if (totalPages <= 5) {
            pageNum = i + 1
          } else if (currentPage <= 3) {
            pageNum = i + 1
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i
          } else {
            pageNum = currentPage - 2 + i
          }
          
          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          )
        })}
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export { DataTable, type Column, type DataTableProps, type FilterOption }
