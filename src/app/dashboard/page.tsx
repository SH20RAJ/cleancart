import { Button } from '@/components/ui/button'
import { Package, Wallet, Calendar, Clock } from 'lucide-react'

const stats = [
  {
    name: 'Active Orders',
    value: '2',
    icon: Package,
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Monthly Savings',
    value: '₹1,200',
    icon: Wallet,
    change: '+54.02%',
    changeType: 'positive',
  },
  {
    name: 'Next Pickup',
    value: 'Tomorrow',
    icon: Calendar,
    description: '10:00 AM',
  },
  {
    name: 'Total Orders',
    value: '24',
    icon: Clock,
    change: '+12.5%',
    changeType: 'positive',
  },
]

const recentOrders = [
  {
    id: 'ORD001',
    date: '2025-01-12',
    status: 'In Progress',
    items: '5 items',
    total: '₹450',
  },
  {
    id: 'ORD002',
    date: '2025-01-10',
    status: 'Delivered',
    items: '3 items',
    total: '₹280',
  },
  {
    id: 'ORD003',
    date: '2025-01-08',
    status: 'Delivered',
    items: '7 items',
    total: '₹620',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your laundry services.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    {stat.change && (
                      <span
                        className={`text-sm ${
                          stat.changeType === 'positive'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </span>
                    )}
                  </div>
                  {stat.description && (
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  )}
                </div>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button>Schedule Pickup</Button>
        <Button variant="outline">View Active Orders</Button>
      </div>

      {/* Recent Orders */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-4 text-left">Order ID</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Items</th>
                  <th className="py-3 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === 'In Progress'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-green-50 text-green-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{order.items}</td>
                    <td className="py-3 px-4">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
