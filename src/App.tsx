import { useState } from "react"
import { DualSidebarLayout } from "@/components/layout/dual-sidebar-layout"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueChart } from "@/components/revenue-chart"
import { TotalSalesChart } from "@/components/total-sales-chart"
import { ProjectionsVsActualsChart } from "@/components/projections-vs-actuals-chart"
import { OrderList } from "@/components/order-list"

// Dashboard component
function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight">eCommerce</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-2">
        {/* Stats Cards */}
        <div className="grid gap-4 sm:gap-7 grid-cols-1 sm:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
              <div className="text-xl sm:text-2xl font-bold">3781</div>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm font-medium">+11.01%</span>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
              <div className="text-xl sm:text-2xl font-bold">1219</div>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm font-medium">-0.03%</span>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
              <div className="text-xl sm:text-2xl font-bold">$695</div>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm font-medium">+15.03%</span>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
              <div className="text-xl sm:text-2xl font-bold">30.1%</div>
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm font-medium">+6.08%</span>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Project vs Actuals Chart */}
        <div className="w-full">
          <ProjectionsVsActualsChart />
        </div>
      </div>

      {/* Revenue and Revenue by Location charts */}
      <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-7">
        {/* Revenue Chart */}
        <div className="col-span-1 lg:col-span-5">
          <RevenueChart />
        </div>
        
        {/* Revenue by Location */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Revenue by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src="/World-Map.png" 
              alt="World Map" 
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-4" 
            />
            
            {/* Location List */}
            <div className="space-y-4 sm:space-y-6">
              {/* New York */}
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium">New York</span>
                  <span className="text-sm font-medium">72K</span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-1">
                    <div className="bg-[#A8C5DA] h-1 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Singapore */}
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium">Singapore</span>
                  <span className="text-sm font-medium">61K</span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-1">
                    <div className="bg-[#A8C5DA] h-1 rounded-full" style={{ width: '61%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* San Francisco */}
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium">San Francisco</span>
                  <span className="text-sm font-medium">39K</span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-1">
                    <div className="bg-[#A8C5DA] h-1 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Sydney */}
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium">Sydney</span>
                  <span className="text-sm font-medium">25K</span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-1">
                    <div className="bg-[#A8C5DA] h-1 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling Products and Total Sales */}
      <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-7">
        {/* Top Selling Products */}
        <Card className="col-span-1 lg:col-span-5">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="space-y-4">
              {/* Table Headers - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-sm text-muted-foreground font-normal border-b pb-2">
                <div>Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Amount</div>
              </div>
              
              {/* Table Data */}
              <div className="space-y-3 sm:space-y-4">
                {/* Product 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-2 sm:gap-4 text-sm border-b pb-3 sm:border-b-0 sm:pb-0">
                  <div className="font-medium">ASOS Ridley High Waist</div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Price: </span>
                    <span>$79.49</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Quantity: </span>
                    <span>82</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Amount: </span>
                    <span>$6,518.18</span>
                  </div>
                </div>  
                
                {/* Product 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-2 sm:gap-4 text-sm border-b pb-3 sm:border-b-0 sm:pb-0">
                  <div className="font-medium">Marco Lightweight Shirt</div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Price: </span>
                    <span>$128.50</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Quantity: </span>
                    <span>37</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Amount: </span>
                    <span>$4,754.50</span>
                  </div>
                </div>
                
                {/* Product 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-2 sm:gap-4 text-sm border-b pb-3 sm:border-b-0 sm:pb-0">
                  <div className="font-medium">Half Sleeve Shirt</div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Price: </span>
                    <span>$39.99</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Quantity: </span>
                    <span>64</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Amount: </span>
                    <span>$2,559.36</span>
                  </div>
                </div>
                
                {/* Product 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-2 sm:gap-4 text-sm border-b pb-3 sm:border-b-0 sm:pb-0">
                  <div className="font-medium">Lightweight Jacket</div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Price: </span>
                    <span>$20.00</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Quantity: </span>
                    <span>184</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Amount: </span>
                    <span>$3,680.00</span>
                  </div>
                </div>
                
                {/* Product 5 */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-2 sm:gap-4 text-sm">
                  <div className="font-medium">Marco Shoes</div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Price: </span>
                    <span>$79.49</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Quantity: </span>
                    <span>64</span>
                  </div>
                  <div className="flex justify-between sm:justify-start">
                    <span className="text-muted-foreground sm:hidden">Amount: </span>
                    <span>$1,965.81</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Total Sales Chart */}
        <div className="col-span-1 lg:col-span-2">
          <TotalSalesChart />
        </div>
      </div>
    </div>
  )
}

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