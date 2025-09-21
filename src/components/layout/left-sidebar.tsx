import { cn } from "@/lib/utils"
import { leftNavigation } from "./data/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface LeftSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function LeftSidebar({ isCollapsed, onToggle }: LeftSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <h1 className="text-lg font-semibold text-sidebar-foreground">
            Admin Panel
          </h1>
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

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {leftNavigation.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            {!isCollapsed && (
              <h3 className="px-2 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <Button
                  key={itemIndex}
                  variant={item.isActive ? "secondary" : "outline"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed ? "px-2" : "px-3",
                    item.isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && item.title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

