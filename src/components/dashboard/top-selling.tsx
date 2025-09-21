import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


export const TopSelling = () => {
  return (
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
  )
}