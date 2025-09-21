import { 
  Home, 
  Users, 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Settings, 
  User,
  Plus,
  FileText,
  Calendar,
  CreditCard,
  TrendingUp,
  Activity,
  type LucideIcon,
} from "lucide-react"

// Define types for different item structures
type BaseItem = {
  title: string
  icon: LucideIcon
}

type ActionItem = BaseItem & {
  action: string
}

type ActivityItem = BaseItem & {
  subtitle: string
}

type StatsItem = BaseItem & {
  value: string
  subtitle: string
  trend: string
}

type NavigationItem = ActionItem | ActivityItem | StatsItem

type NavigationSection = {
  title: string
  items: NavigationItem[]
}

export const leftNavigation = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
        isActive: true,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: FileText,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
      },
      {
        title: "Products",
        url: "/products",
        icon: Package,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
]

export const rightNavigation: NavigationSection[] = [
  {
    title: "Quick Actions",
    items: [
      {
        title: "New Order",
        icon: Plus,
        action: "create-order",
      },
      {
        title: "Add Product",
        icon: Package,
        action: "create-product",
      },
      {
        title: "New User",
        icon: User,
        action: "create-user",
      },
    ],
  },
  {
    title: "Recent Activity",
    items: [
      {
        title: "Order #1234",
        subtitle: "2 minutes ago",
        icon: ShoppingCart,
      },
      {
        title: "New User Signup",
        subtitle: "5 minutes ago",
        icon: User,
      },
      {
        title: "Payment Received",
        subtitle: "10 minutes ago",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Stats",
    items: [
      {
        title: "Revenue",
        value: "$12,345",
        subtitle: "Last 30 days",
        icon: TrendingUp,
        trend: "+12%",
      },
      {
        title: "Orders",
        value: "1,234",
        subtitle: "Last 30 days",
        icon: Activity,
        trend: "+8%",
      },
    ],
  },
]