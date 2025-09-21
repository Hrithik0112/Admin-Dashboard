import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"



export const RevenueLocation = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Revenue by Location</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/World-Map.png" 
                alt="World Map" 
                className="w-full h-28 object-cover rounded-md " 
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
  )
}