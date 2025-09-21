"use client"

import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { sales: "Direct", value: 300.56, fill: "#000000" },
  { sales: "Affiliate", value: 135.18, fill: "#90EE90" },
  { sales: "Sponsored", value: 154.02, fill: "#DDA0DD" },
  { sales: "E-mail", value: 48.96, fill: "#87CEEB" },
]

const chartConfig = {
  value: {
    label: "Sales",
  },
  direct: {
    label: "Direct",
    color: "#000000", // Black
  },
  affiliate: {
    label: "Affiliate", 
    color: "#90EE90", // Light green
  },
  sponsored: {
    label: "Sponsored",
    color: "#DDA0DD", // Light purple
  },
  email: {
    label: "E-mail",
    color: "#87CEEB", // Light blue
  },
} satisfies ChartConfig

export function TotalSalesChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center pb-2 gap-4">
        <CardTitle className="text-sm font-semibold">Total Sales</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center">
          {/* Donut Chart */}
          <div className="relative flex-1 min-h-[200px] flex items-center justify-center">
            {/* Background circle */}
            <div className="absolute w-[140px] h-[140px] bg-gray-100 rounded-full"></div>
            
            <ChartContainer
              config={chartConfig}
              className="h-[180px] w-[180px] relative z-10"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="sales"
                  innerRadius={40}
                  outerRadius={70}
                  cornerRadius={8}
                  strokeWidth={0}
                />
              </PieChart>
            </ChartContainer>
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-4 mt-6">
            {chartData.map((item) => (
              <div key={item.sales} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-sm font-medium">{item.sales}</span>
                </div>
                <span className="text-sm font-medium">${item.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
