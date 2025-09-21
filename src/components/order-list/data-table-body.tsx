import { useDataTable } from "@/hooks/use-data-table";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function DataTableBody<T>() {
    const { data, columns, onRowClick, selectedRows, onSelectionChange, getRowId, actions } = useDataTable<T>()
    const isMobile = useMobile()
  
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
                <TableCell key={colIndex} className={isMobile ? "text-sm" : ""}>
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