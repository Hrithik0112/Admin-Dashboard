import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { Search, Bell, History, Star, PanelLeft, PanelRight } from "lucide-react"

interface HeaderProps {
  onLeftSidebarToggle?: () => void
  onRightSidebarToggle?: () => void
}

export function Header({ onLeftSidebarToggle, onRightSidebarToggle }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Left Sidebar Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onLeftSidebarToggle}
          className="h-8 w-8"
        >
          <PanelLeft className="h-4 w-4" />
        </Button>
        
        {/* Star Icon */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Star className="h-4 w-4" />
        </Button>
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-1 text-sm">
          <span className="text-muted-foreground">Dashboards</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Default</span>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-12 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            ⌘/
          </div>
        </div>
        
        {/* Theme Toggle */}
        <ModeToggle />
        
        {/* History Icon */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <History className="h-4 w-4" />
        </Button>
        
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        
        {/* Right Sidebar Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onRightSidebarToggle}
          className="h-8 w-8"
        >
          <PanelRight className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
