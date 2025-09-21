import React from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { DataTable, type Column, type FilterOption } from "@/components/ui/data-table"
import { MoreHorizontal, Eye, Edit, Trash2, Calendar, MapPin } from "lucide-react"
import { orders, type Order } from "@/lib/data"
import { getStatusDot, getStatusColor } from "@/lib/utils"

export function OrderList() {
  const [selectedOrders, setSelectedOrders] = React.useState<Order[]>([])

  const columns: Column<Order>[] = [
    {
      key: "id",
      header: "Order ID",
      cell: (order) => (
        <span className="font-medium text-primary">#{order.id}</span>
      ),
      sortable: true
    },
    {
      key: "user",
      header: "User",
      cell: (order) => (
        <div className="flex items-center space-x-3">
          <img 
            src={order.user.avatar} 
            alt={order.user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{order.user.name}</span>
        </div>
      ),
      sortable: true
    },
    {
      key: "project",
      header: "Project",
      cell: (order) => (
        <span>{order.project}</span>
      ),
      sortable: true
    },
    {
      key: "address",
      header: "Address",
      cell: (order) => (
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{order.address}</span>
        </div>
      ),
      sortable: true
    },
    {
      key: "date",
      header: "Date",
      cell: (order) => (
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{order.date}</span>
        </div>
      ),
      sortable: true
    },
    {
      key: "status",
      header: "Status",
      cell: (order) => (
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${getStatusDot(order.status)}`} />
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>
      ),
      sortable: true
    }
  ]

  // Filter options for the table
  const filterOptions: FilterOption[] = [
    {
      key: "status",
      label: "Status",
      options: [
        { value: "In Progress", label: "In Progress" },
        { value: "Complete", label: "Complete" },
        { value: "Pending", label: "Pending" },
        { value: "Approved", label: "Approved" },
        { value: "Rejected", label: "Rejected" }
      ]
    },
    {
      key: "project",
      label: "Project",
      options: [
        { value: "Landing Page", label: "Landing Page" },
        { value: "Admin Dashboard", label: "Admin Dashboard" },
        { value: "Mobile App", label: "Mobile App" },
        { value: "Website Redesign", label: "Website Redesign" },
        { value: "E-commerce Platform", label: "E-commerce Platform" }
      ]
    }
  ]

  const handleRowClick = (order: Order) => {
    console.log("Order clicked:", order)
  }

  const handleSelectionChange = (selected: Order[]) => {
    setSelectedOrders(selected)
  }

  const handleAddNew = () => {
    // Add new order logic here
    console.log("Add new order clicked")
    // You can open a modal, navigate to a form, etc.
  }

  const handleFilterChange = (filters: Record<string, string[]>) => {
    console.log("Filters changed:", filters)
  }

  const actions = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="h-4 w-4 mr-2" />
          Edit Order
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight">Order List</h1>
      </div>

      {/* Data Table */}
      <div className="border-none">
        <CardContent>
          <DataTable
            data={orders}
            columns={columns}
            searchKey="user"
            onRowClick={handleRowClick}
            selectedRows={selectedOrders}
            onSelectionChange={handleSelectionChange}
            getRowId={(order) => order.id}
            actions={actions}
            onAddNew={handleAddNew}
            filterOptions={filterOptions}
            onFilterChange={handleFilterChange}
          />
        </CardContent>
      </div>
    </div>
  )
}
