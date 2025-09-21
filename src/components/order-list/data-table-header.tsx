import type { Column } from "./data-table";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

interface DataTableHeaderProps<T> {
    columns: Column<T>[]
    onSort: (key: keyof T) => void
    sortConfig: { key: keyof T | null; direction: 'asc' | 'desc' }
    onSelectAll: (checked: boolean) => void
    isAllSelected: boolean
  }
  
  export function DataTableHeader<T>({ 
    columns, 
    onSort, 
    sortConfig,
    onSelectAll, 
    isAllSelected 
  }: DataTableHeaderProps<T>) {
    const isMobile = useMobile()
  
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
            <TableHead key={index} className={isMobile ? "text-xs" : ""}>
              {column.sortable ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 p-0 font-medium ${isMobile ? 'text-xs' : ''}`}
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