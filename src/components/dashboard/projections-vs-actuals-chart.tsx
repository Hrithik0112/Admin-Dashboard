import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useMobile } from "@/hooks/use-mobile"

const chartData = [
  { month: "Jan", actuals: 16.5, projections: 3.5 },
  { month: "Feb", actuals: 20, projections: 4.5 },
  { month: "Mar", actuals: 17.5, projections: 3.5 },
  { month: "Apr", actuals: 21.5, projections: 4.5 },
  { month: "May", actuals: 14, projections: 3.5 },
  { month: "Jun", actuals: 19.5, projections: 4.5 },
]

const chartConfig = {
  actuals: {
    label: "Actuals",
    color: "#6B7280", // Darker grey/blue
  },
  projections: {
    label: "Projections",
    color: "#9CA3AF", // Lighter grey/blue
  },
} satisfies ChartConfig

export function ProjectionsVsActualsChart() {
  const isMobile = useMobile()

  return (
    <Card className="bg-brand-primary-gray dark:bg-background">
      <CardHeader className="pb-3 sm:pb-6">
        <CardTitle className="text-sm sm:text-base">Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer 
          config={chartConfig} 
          className={`${isMobile ? 'h-[200px]' : 'h-[252px]'}`}
        >
          <BarChart 
            data={chartData} 
            margin={{ 
              top: 20, 
              right: isMobile ? 50 : 30, 
              left: isMobile ? 0: 0, 
              bottom: 0 
            }}
            barCategoryGap={isMobile ? "10%" : "20%"}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tickLine={false}
              axisLine={false}
              tickMargin={isMobile ? 4 : 8}
              tick={{ fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickMargin={isMobile ? 5 : 10}
              tick={{ fontSize: isMobile ? 10 : 12 }}
              domain={[0, 30]}
              ticks={isMobile ? [0, 15, 30] : [0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value, name) => [`${value}M `, name]}
            />
            <Bar 
              dataKey="actuals" 
              stackId="a" 
              fill="#A8C5DA"
              radius={[0, 0, 0, 0]}
              maxBarSize={isMobile ? 30 : 40}
            />
            <Bar 
              dataKey="projections" 
              stackId="a" 
              fill="#A8C5DA50"
              radius={[4, 4, 0, 0]}
              maxBarSize={isMobile ? 30 : 40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
