import type { Column, FilterOption } from "@/components/order-list/data-table"
import React from "react"

export interface DataTableContextType<T> {
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
  
  export const DataTableContext = React.createContext<DataTableContextType<unknown> | null>(null)
  
  export const useDataTable = <T>() => {
    const context = React.useContext(DataTableContext)
    if (!context) {
      throw new Error("useDataTable must be used within a DataTable")
    }
    return context as DataTableContextType<T>
  }