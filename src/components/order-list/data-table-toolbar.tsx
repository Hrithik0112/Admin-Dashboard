import { useMobile } from "@/hooks/use-mobile";
import type { Column } from "./data-table";
import { useDataTable } from "@/hooks/use-data-table";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { ArrowUpDown, ArrowUp, ArrowDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  
  export function DataTableToolbar<T>({ 
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
    const isMobile = useMobile()
    
    const activeFiltersCount = Object.values(filters).flat().length
  
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2">
          <Button size="sm" className="h-8" onClick={onAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
          
          <div className="flex items-center gap-2">
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
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`pl-8 ${isMobile ? 'w-full' : 'w-[200px]'}`}
            />
          </div>
        </div>
      </div>
    )
  }