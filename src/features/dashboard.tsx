import { ProjectionsVsActualsChart } from "@/components/dashboard/projections-vs-actuals-chart"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { TotalSalesChart } from "@/components/dashboard/total-sales-chart"
import { StatsGrid } from "@/components/dashboard/stats-grid"
import { RevenueLocation } from "@/components/dashboard/revenue-location"
import { TopSelling } from "@/components/dashboard/top-selling"

export function Dashboard() {
    return (
      <div className="space-y-4 sm:space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">eCommerce</h1>
        </div>
  
        {/* Stats and Project vs Actuals Chart */}
        <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-2">
          {/* Stats Cards */}
          <StatsGrid />
          
          {/* Project vs Actuals Chart */}
          <div className="w-full">
            <ProjectionsVsActualsChart />
          </div>
        </div>
  
        {/* Revenue and Revenue by Location charts */}
        <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-7">
          {/* Revenue Chart */}
          <div className="col-span-1 lg:col-span-5 ">
            <RevenueChart />
          </div>
          
          {/* Revenue by Location */}
          <RevenueLocation />
        </div>
  
        {/* Top Selling Products and Total Sales */}
        <div className="grid gap-4 sm:gap-7 grid-cols-1 lg:grid-cols-7">
          {/* Top Selling Products */}
          <TopSelling />
          
          {/* Total Sales Chart */}
          <div className="col-span-1 lg:col-span-2 ">
            <TotalSalesChart />
          </div>
        </div>
      </div>
    )
  }