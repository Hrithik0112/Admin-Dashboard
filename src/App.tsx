import { DualSidebarLayout } from "@/components/layout/dual-sidebar-layout"
import { BarChart3, Users, ShoppingCart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <DualSidebarLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart placeholder - Add your chart component here
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      jackson.lee@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$299.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DualSidebarLayout>
  )
}

export default App