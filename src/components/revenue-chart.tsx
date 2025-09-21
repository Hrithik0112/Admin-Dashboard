"use client"

import { CartesianGrid, Line, XAxis, YAxis, Area, ComposedChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useTheme } from "@/hooks/use-Theme"


const chartData = [
    { month: "Jan", currentWeekSolid: 15, currentWeekDashed: null, previousWeek: 10 },
    { month: "Feb", currentWeekSolid: 10, currentWeekDashed: null, previousWeek: 19 },
    { month: "Mar", currentWeekSolid: 11, currentWeekDashed: null, previousWeek: 15 },
    { month: "Apr", currentWeekSolid: 15, currentWeekDashed: 15, previousWeek: 12 },
    { month: "May", currentWeekSolid: null, currentWeekDashed: 20, previousWeek: 15 },
    { month: "Jun", currentWeekSolid: null, currentWeekDashed: 22, previousWeek: 25 },
]


const chartConfig = {
    currentWeek: {
        label: "Current Week",
        color: "hsl(0, 0%, 0%)", // Black color
    },
    previousWeek: {
        label: "Previous Week",
        color: "hsl(200, 100%, 70%)", // Light blue color
    },
} satisfies ChartConfig

export function RevenueChart() {
    const isDarkMode = useTheme()
    return (
        <Card>
            <CardHeader className="flex flex-row items-center pb-2 gap-4">
                <CardTitle className="text-sm font-semibold">Revenue</CardTitle>
                <div className="h-4 w-[2px] bg-gray-200"></div>
                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                        <span>Current Week $58,211</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span>Previous Week $68,768</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <ComposedChart
                        data={chartData}

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
                        <ChartTooltip content={<ChartTooltipContent />} />

                        {/* Previous Week Area (light blue with area fill) */}
                        <Area
                            dataKey="previousWeek"
                            type="monotone"
                            fill="#A8C5DA30"
                            stroke="#A8C5DA"
                            strokeWidth={2}
                        />

                        {/* Current Week Line (black, solid then dashed) */}
                        <Line dataKey="currentWeekSolid" 
                        type="monotone" 
                        stroke={isDarkMode ? "white" : "black"} 
                        strokeWidth={2} 
                        dot={false} />

                        <Line 
                        dataKey="currentWeekDashed" 
                        type="monotone" 
                        stroke={isDarkMode ? "white" : "black"} 
                        strokeWidth={2} 
                        dot={false} 
                        strokeDasharray="5 5" />

                    </ComposedChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
