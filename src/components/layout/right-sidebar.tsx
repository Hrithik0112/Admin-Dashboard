import { cn } from "@/lib/utils"
import { rightNavigation } from "./data/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RightSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function RightSidebar({ isCollapsed, onToggle }: RightSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-l bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-80"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        {!isCollapsed && (
          <h1 className="text-lg font-semibold text-sidebar-foreground">
            Quick Panel
          </h1>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6 p-4">
        {rightNavigation.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-3">
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-sidebar-foreground">
                {section.title}
              </h3>
            )}
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg p-3 transition-colors hover:bg-sidebar-accent",
                    isCollapsed && "justify-center p-2"
                  )}
                >
                  <item.icon className="h-4 w-4 text-sidebar-foreground/60" />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-sidebar-foreground">
                        {item.title}
                      </p>
                      {('subtitle' in item) && (
                        <p className="text-xs text-sidebar-foreground/60">
                          {item.subtitle as string}
                        </p>
                      )}
                      {('value' in item) && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm font-semibold text-sidebar-foreground">
                            {item.value as string}
                          </span>
                          {('trend' in item) && (
                            <span className="text-xs text-green-600">
                              {item.trend as string}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


