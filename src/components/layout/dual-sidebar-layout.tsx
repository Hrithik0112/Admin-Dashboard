import { useState } from "react"
import { LeftSidebar } from "./left-sidebar"
import { RightSidebar, Notifications, Activities, Contacts } from "./right-sidebar"
import { Header } from "./header"

interface DualSidebarLayoutProps {
  children: React.ReactNode
}

export function DualSidebarLayout({ children }: DualSidebarLayoutProps) {
  const [leftCollapsed, setLeftCollapsed] = useState(false)
  const [rightCollapsed, setRightCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <LeftSidebar
        isCollapsed={leftCollapsed}
        onToggle={() => setLeftCollapsed(!leftCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <RightSidebar
        isCollapsed={rightCollapsed}
        onToggle={() => setRightCollapsed(!rightCollapsed)}
      >
        <Notifications isCollapsed={rightCollapsed} />
        <Activities isCollapsed={rightCollapsed} />
        <Contacts isCollapsed={rightCollapsed} />
      </RightSidebar>
    </div>
  )
}


