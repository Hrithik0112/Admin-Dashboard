import { useState } from "react"
import { LeftSidebar, Favorites, Dashboards, Pages } from "./left-sidebar"
import { RightSidebar, Notifications, Activities, Contacts } from "./right-sidebar"
import { Header } from "./header"

interface DualSidebarLayoutProps {
  children: React.ReactNode
  onNavigation?: (view: 'dashboard' | 'orderlist') => void
  activeView?: 'dashboard' | 'orderlist'
}

export function DualSidebarLayout({ children, onNavigation, activeView }: DualSidebarLayoutProps) {
  const [leftCollapsed, setLeftCollapsed] = useState(false)
  const [rightCollapsed, setRightCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <LeftSidebar
        isCollapsed={leftCollapsed}
        onToggle={() => setLeftCollapsed(!leftCollapsed)}
      >
        <Favorites isCollapsed={leftCollapsed} />
        <Dashboards 
          isCollapsed={leftCollapsed} 
          onNavigation={onNavigation}
          activeView={activeView}
        />
        <Pages isCollapsed={leftCollapsed} />
      </LeftSidebar>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <Header 
          onLeftSidebarToggle={() => setLeftCollapsed(!leftCollapsed)}
          onRightSidebarToggle={() => setRightCollapsed(!rightCollapsed)}
        />
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      {
        !rightCollapsed && (
      
      <RightSidebar
        isCollapsed={rightCollapsed}
      >
        <Notifications isCollapsed={rightCollapsed} />
        <Activities isCollapsed={rightCollapsed} />
        <Contacts isCollapsed={rightCollapsed} />
      </RightSidebar>
      )
      }
    </div>
  )
}


