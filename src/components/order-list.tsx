import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash2, Package, Truck, CheckCircle } from "lucide-react"

// Sample order data
const orders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    status: "Processing",
    total: "$299.99",
    date: "2024-01-15",
    items: 3
  },
  {
    id: "#ORD-002", 
    customer: "Jane Smith",
    email: "jane@example.com",
    status: "Shipped",
    total: "$149.50",
    date: "2024-01-14",
    items: 2
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com", 
    status: "Delivered",
    total: "$89.99",
    date: "2024-01-13",
    items: 1
  },
  {
    id: "#ORD-004",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    status: "Pending",
    total: "$199.99",
    date: "2024-01-12",
    items: 4
  },
  {
    id: "#ORD-005",
    customer: "David Brown",
    email: "david@example.com",
    status: "Cancelled",
    total: "$79.99",
    date: "2024-01-11",
    items: 2
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Processing":
      return <Package className="h-4 w-4 text-blue-500" />
    case "Shipped":
      return <Truck className="h-4 w-4 text-orange-500" />
    case "Delivered":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Pending":
      return <Package className="h-4 w-4 text-yellow-500" />
    case "Cancelled":
      return <Package className="h-4 w-4 text-red-500" />
    default:
      return <Package className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Processing":
      return "bg-blue-100 text-blue-800"
    case "Shipped":
      return "bg-orange-100 text-orange-800"
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Pending":
      return "bg-yellow-100 text-yellow-800"
    case "Cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function OrderList() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight">Order Management</h1>
        <p className="text-muted-foreground">
          Manage and track all customer orders
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              -5% from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +8% from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,068</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table Headers */}
            <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_1fr] gap-4 text-sm text-muted-foreground font-medium border-b pb-2">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Email</div>
              <div>Status</div>
              <div>Items</div>
              <div>Total</div>
              <div>Actions</div>
            </div>
            
            {/* Table Data */}
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_1fr] gap-4 text-sm items-center py-2 border-b border-border/50">
                  <div className="font-medium text-primary">{order.id}</div>
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-muted-foreground">{order.email}</div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div>{order.items}</div>
                  <div className="font-medium">{order.total}</div>
                  <div>
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
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
