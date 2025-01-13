import { Button } from '@/components/ui/button'

const orders = [
  {
    id: 'ORD001',
    date: '2025-01-12',
    status: 'In Wash',
    items: [
      { name: 'T-Shirts', quantity: 3 },
      { name: 'Pants', quantity: 2 },
      { name: 'Shirts', quantity: 2 },
    ],
    total: '₹450',
    timeline: [
      { status: 'Order Placed', time: '09:30 AM', completed: true },
      { status: 'Picked Up', time: '10:45 AM', completed: true },
      { status: 'In Wash', time: '11:30 AM', completed: true },
      { status: 'Drying', time: '- -', completed: false },
      { status: 'Ready for Delivery', time: '- -', completed: false },
      { status: 'Delivered', time: '- -', completed: false },
    ],
  },
  {
    id: 'ORD002',
    date: '2025-01-13',
    status: 'Pickup Scheduled',
    items: [
      { name: 'Bedsheets', quantity: 2 },
      { name: 'Towels', quantity: 4 },
    ],
    total: '₹350',
    timeline: [
      { status: 'Order Placed', time: '02:30 PM', completed: true },
      { status: 'Picked Up', time: '- -', completed: false },
      { status: 'In Wash', time: '- -', completed: false },
      { status: 'Drying', time: '- -', completed: false },
      { status: 'Ready for Delivery', time: '- -', completed: false },
      { status: 'Delivered', time: '- -', completed: false },
    ],
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Active Orders</h2>
        <p className="text-muted-foreground">
          Track and manage your current laundry orders
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            {/* Order Header */}
            <div className="border-b p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Order ID
                  </p>
                  <p className="text-lg font-semibold">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p>{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">
                    Status
                  </p>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    {order.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">
                    Total
                  </p>
                  <p className="font-semibold">{order.total}</p>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="p-6">
              <h4 className="font-semibold mb-4">Order Progress</h4>
              <div className="relative">
                <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-200"></div>
                <div className="space-y-6">
                  {order.timeline.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${
                          step.completed
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200'
                        }`}
                      >
                        {step.completed && (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{step.status}</p>
                        <p className="text-sm text-muted-foreground">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t p-6">
              <h4 className="font-semibold mb-4">Order Items</h4>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="border-t p-6 flex justify-end space-x-4">
              <Button variant="outline">Contact Support</Button>
              <Button>Track Delivery</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
