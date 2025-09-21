import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useTheme } from "@/hooks/use-Theme"

// Base data without colors
const baseChartData = [
  { sales: "Direct", value: 300.56 },
  { sales: "Affiliate", value: 135.18 },
  { sales: "Sponsored", value: 154.02 },
  { sales: "E-mail", value: 48.96 },
]

const chartConfig = {
  value: {
    label: "Sales",
  },
  direct: {
    label: "Direct",
    color: "hsl(var(--foreground))",
  },
  affiliate: {
    label: "Affiliate", 
    color: "#22c55e",
  },
  sponsored: {
    label: "Sponsored",
    color: "#a855f7",
  },
  email: {
    label: "E-mail",
    color: "#3b82f6",
  },
} satisfies ChartConfig

export function TotalSalesChart() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  
  // Generate chart data with theme-aware colors
  const chartData = baseChartData.map(item => ({
    ...item,
    fill: item.sales === "Direct" 
      ? (isDarkMode ? "#C6C7F8" : "#000000")
      : item.sales === "Affiliate"
      ? (isDarkMode ? "#BAEDBD" : "#BAEDBD")
      : item.sales === "Sponsored"
      ? (isDarkMode ? "#95A4FC" : "#95A4FC")
      : (isDarkMode ? "#B1E3FF" : "#B1E3FF")
  }))

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
            <div className="absolute w-[140px] h-[140px] bg-muted rounded-full"></div>
            
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
