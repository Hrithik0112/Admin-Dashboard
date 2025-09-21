import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { Search, Bell, History, Star, PanelLeft, PanelRight, Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { NotificationsModal } from "@/components/notifications-modal"

interface HeaderProps {
  onLeftSidebarToggle?: () => void
  onRightSidebarToggle?: () => void
}

export function Header({ onLeftSidebarToggle, onRightSidebarToggle }: HeaderProps) {
  const isMobile = useMobile()
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false)

  const handleNotificationClick = () => {
    if (isMobile) {
      setIsNotificationsModalOpen(true)
    }
    // On desktop, the right sidebar toggle is handled separately
  }

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Left Sidebar Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onLeftSidebarToggle}
            className="h-8 w-8"
          >
            {isMobile ? <Menu className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
          </Button>
          
          {/* Star Icon - Hidden on mobile */}
          {!isMobile && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Star className="h-4 w-4" />
            </Button>
          )}
          
          {/* Breadcrumb - Hidden on mobile */}
          {!isMobile && (
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-muted-foreground">Dashboards</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Default</span>
            </div>
          )}
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Bar - Responsive width */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className={cn(
                "h-9 rounded-md border border-input bg-background pl-9 pr-12 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                isMobile ? "w-32 sm:w-48" : "w-64"
              )}
            />
            {!isMobile && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                ⌘/
              </div>
            )}
          </div>
          
          {/* Theme Toggle */}
          <ModeToggle />
          
          {/* History Icon - Hidden on mobile */}
          {!isMobile && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <History className="h-4 w-4" />
            </Button>
          )}
          
          {/* Notification Bell */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={handleNotificationClick}
          >
            <Bell className="h-4 w-4" />
          </Button>
          
          {/* Right Sidebar Toggle - Hidden on mobile */}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onRightSidebarToggle}
              className="h-8 w-8"
            >
              <PanelRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </header>

      {/* Notifications Modal for Mobile */}
      <NotificationsModal
        isOpen={isNotificationsModalOpen}
        onClose={() => setIsNotificationsModalOpen(false)}
      />
    </>
  )
}
