
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"


export const StatsGrid = () => {
  return (
    <div className="grid gap-4 sm:gap-7 grid-cols-1 sm:grid-cols-2">
            <Card className="bg-brand-primary-blue  dark:text-black">
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
            
            <Card className="bg-brand-primary-gray dark:bg-background">
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
            
            <Card className="bg-brand-primary-gray dark:bg-background">
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
            
            <Card className="bg-brand-primary-purple dark:bg-brand-primary-purple dark:text-black">
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
  )
}