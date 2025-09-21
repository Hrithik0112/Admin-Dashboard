import { 
  PieChart,
  ShoppingBag,
  Folder,
  BookOpen,
  User,
  Users,
  FileText,
  MessageCircle,
  type LucideIcon,
} from "lucide-react"

// Define types for navigation items
type BaseNavItem = {
  title: string
  icon?: LucideIcon
  isActive?: boolean
  hasSubmenu?: boolean
  isExpanded?: boolean
  children?: BaseNavItem[]
}

type NavSection = {
  title: string
  items: BaseNavItem[]
}

export const leftNavigation: NavSection[] = [
  {
    title: "Favorites",
    items: [
      { title: "Overview", isActive: false },
      { title: "Projects", isActive: false },
    ]
  },
  {
    title: "Dashboards",
    items: [
      { 
        title: "Default", 
        icon: PieChart, 
        isActive: true 
      },
      { 
        title: "eCommerce", 
        icon: ShoppingBag, 
        hasSubmenu: true,
        isExpanded: false
      },
      { 
        title: "Projects", 
        icon: Folder, 
        hasSubmenu: true,
        isExpanded: false
      },
      { 
        title: "Online Courses", 
        icon: BookOpen, 
        hasSubmenu: true,
        isExpanded: false
      },
    ]
  },
  {
    title: "Pages",
    items: [
      { 
        title: "User Profile", 
        icon: User, 
        hasSubmenu: true,
        isExpanded: true,
        children: [
          { title: "Overview" },
          { title: "Projects" },
          { title: "Campaigns" },
          { title: "Documents" },
          { title: "Followers" },
        ]
      },
      { 
        title: "Account", 
        icon: Users, 
        hasSubmenu: true,
        isExpanded: false
      },
      { 
        title: "Corporate", 
        icon: Users, 
        hasSubmenu: true,
        isExpanded: false
      },
      { 
        title: "Blog", 
        icon: FileText, 
        hasSubmenu: true,
        isExpanded: false
      },
      { 
        title: "Social", 
        icon: MessageCircle, 
        hasSubmenu: true,
        isExpanded: false
      },
    ]
  },
]