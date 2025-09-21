import { useState } from "react"
import { DualSidebarLayout } from "@/components/layout/dual-sidebar-layout"
import { OrderList } from "@/features/order-list"
import { Dashboard } from "@/features/dashboard"


function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'orderlist'>('dashboard')

  const handleNavigation = (view: 'dashboard' | 'orderlist') => {
    setActiveView(view)
  }

  return (
    <DualSidebarLayout 
      onNavigation={handleNavigation}
      activeView={activeView}
    >
      {activeView === 'dashboard' ? <Dashboard /> : <OrderList />}
    </DualSidebarLayout>
  )
}

export default App