import { cn } from "@/lib/utils"
import { leftNavigation } from "./data/navigation"
import { ChevronDown } from "lucide-react"
import { useState, type ReactNode } from "react"
import { generateAvatarUrl } from "@/lib/utils"

interface LeftSidebarProps {
  isCollapsed: boolean
  onToggle?: () => void
  children: ReactNode
}

interface SectionProps {
  title: string
  children: ReactNode
  isCollapsed: boolean
  showTab?: boolean
  tabText?: string
}

interface NavItemProps {
  title: string
  icon?: React.ComponentType<{ className?: string }>
  isActive?: boolean
  hasSubmenu?: boolean
  isExpanded?: boolean
  children?: Array<{ title: string }>
  isCollapsed: boolean
  onClick?: () => void
}

// Main LeftSidebar component
export function LeftSidebar({ isCollapsed, children }: LeftSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed ? (
          <div className="flex items-center space-x-3">
            <img 
              src={generateAvatarUrl("byewind")} 
              alt="ByeWind" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <h1 className="text-lg font-semibold text-foreground">
              ByeWind
            </h1>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <img 
              src={generateAvatarUrl("byewind")} 
              alt="ByeWind" 
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  )
}

export function Section({ title, children, isCollapsed, showTab, tabText }: SectionProps) {
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </h3>
          {showTab && tabText && (
            <span className="text-xs text-muted-foreground/60">{tabText}</span>
          )}
        </div>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export function NavItem({ 
  title, 
  icon: Icon, 
  isActive, 
  hasSubmenu, 
  isExpanded, 
  children, 
  isCollapsed, 
  onClick 
}: NavItemProps) {
  const [expanded, setExpanded] = useState(isExpanded || false)

  const handleClick = () => {
    if (hasSubmenu) {
      setExpanded(!expanded)
    }
    onClick?.()
  }

  if (isCollapsed) {
    return (
      <div className="flex justify-center p-2">
        {Icon ? (
          <Icon className="h-4 w-4 text-muted-foreground" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
        )}
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
          isActive 
            ? "bg-accent text-accent-foreground border-l-4 border-primary" 
            : "text-foreground hover:bg-accent/50"
        )}
      >
        <div className="flex items-center space-x-3">
          {Icon ? (
            <Icon className="h-4 w-4" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
          )}
          <span>{title}</span>
        </div>
        {hasSubmenu && (
          expanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )
        )}
      </button>
      
      {hasSubmenu && expanded && children && (
        <div className="ml-6 mt-1 space-y-1">
          {children.map((child, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors"
            >
              {child.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Favorites({ isCollapsed }: { isCollapsed: boolean }) {
  const favorites = [
    { title: "Overview", isActive: false },
    { title: "Projects", isActive: false },
  ]

  return (
    <Section title="Favorites" isCollapsed={isCollapsed} showTab tabText="Recently">
      {favorites.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          isActive={item.isActive}
          isCollapsed={isCollapsed}
        />
      ))}
    </Section>
  )
}

export function Dashboards({ 
  isCollapsed, 
  onNavigation,
  activeView 
}: { 
  isCollapsed: boolean
  onNavigation?: (view: 'dashboard' | 'orderlist') => void
  activeView?: 'dashboard' | 'orderlist'
}) {
  const dashboards = [
    { 
      title: "Default", 
      icon: leftNavigation[1].items[0].icon, 
      isActive: activeView === 'dashboard',
      onClick: () => onNavigation?.('dashboard')
    },
    { 
      title: "OrderList", 
      icon: leftNavigation[1].items[1].icon, 
      isActive: activeView === 'orderlist',
      onClick: () => onNavigation?.('orderlist')
    },
    { 
      title: "eCommerce", 
      icon: leftNavigation[1].items[2].icon, 
      hasSubmenu: true 
    },
    { 
      title: "Projects", 
      icon: leftNavigation[1].items[3].icon, 
      hasSubmenu: true 
    },
    { 
      title: "Online Courses", 
      icon: leftNavigation[1].items[4].icon, 
      hasSubmenu: true 
    },
  ]

  return (
    <Section title="Dashboards" isCollapsed={isCollapsed}>
      {dashboards.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          icon={item.icon}
          isActive={item.isActive}
          hasSubmenu={item.hasSubmenu}
          isCollapsed={isCollapsed}
          onClick={item.onClick}
        />
      ))}
    </Section>
  )
}

export function Pages({ isCollapsed }: { isCollapsed: boolean }) {
  const pages = leftNavigation[2].items

  return (
    <Section title="Pages" isCollapsed={isCollapsed}>
      {pages.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          icon={item.icon}
          hasSubmenu={item.hasSubmenu}
          isExpanded={item.isExpanded}
          children={item.children}
          isCollapsed={isCollapsed}
        />
      ))}
    </Section>
  )
}

