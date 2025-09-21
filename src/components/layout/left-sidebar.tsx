import { cn } from "@/lib/utils"
import { leftNavigation } from "./data/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { useState, type ReactNode } from "react"
import { generateAvatarUrl } from "@/lib/utils"

interface LeftSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
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
export function LeftSidebar({ isCollapsed, onToggle, children }: LeftSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <img 
              src={generateAvatarUrl("byewind")} 
              alt="ByeWind" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <h1 className="text-lg font-semibold text-gray-900">
              ByeWind
            </h1>
          </div>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
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
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h3>
          {showTab && tabText && (
            <span className="text-xs text-gray-400">{tabText}</span>
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
          <Icon className="h-4 w-4 text-gray-600" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
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
            ? "bg-gray-100 text-gray-900 border-l-4 border-gray-900" 
            : "text-gray-700 hover:bg-gray-50"
        )}
      >
        <div className="flex items-center space-x-3">
          {Icon ? (
            <Icon className="h-4 w-4" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          )}
          <span>{title}</span>
        </div>
        {hasSubmenu && (
          expanded ? (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )
        )}
      </button>
      
      {hasSubmenu && expanded && children && (
        <div className="ml-6 mt-1 space-y-1">
          {children.map((child, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
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


export function Dashboards({ isCollapsed }: { isCollapsed: boolean }) {
  const dashboards = [
    { title: "Default", icon: leftNavigation[1].items[0].icon, isActive: true },
    { title: "eCommerce", icon: leftNavigation[1].items[1].icon, hasSubmenu: true },
    { title: "Projects", icon: leftNavigation[1].items[2].icon, hasSubmenu: true },
    { title: "Online Courses", icon: leftNavigation[1].items[3].icon, hasSubmenu: true },
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

