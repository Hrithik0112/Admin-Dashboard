"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[252px]">
          <BarChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fontSize: 12 }}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
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
              maxBarSize={40}
            />
            <Bar 
              dataKey="projections" 
              stackId="a" 
              fill="#A8C5DA50"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
