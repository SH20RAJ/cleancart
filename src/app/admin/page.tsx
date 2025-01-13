import { Button } from '@/components/ui/button'
import {
  Package,
  Users,
  IndianRupee,
  TrendingUp,
  Clock,
  AlertTriangle,
} from 'lucide-react'

const stats = [
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+12.3%',
    changeType: 'positive',
    icon: Package,
  },
  {
    name: 'Active Customers',
    value: '856',
    change: '+8.2%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Revenue',
    value: '₹2.4L',
    change: '+23.1%',
    changeType: 'positive',
    icon: IndianRupee,
  },
  {
    name: 'Growth',
    value: '18.2%',
    change: '+4.3%',
    changeType: 'positive',
    icon: TrendingUp,
  },
]

const recentOrders = [
  {
    id: 'ORD123',
    customer: 'John Doe',
    date: '2025-01-13',
    status: 'Processing',
    amount: '₹450',
    items: '5 items',
  },
  {
    id: 'ORD124',
    customer: 'Jane Smith',
    date: '2025-01-13',
    status: 'Pending',
    amount: '₹280',
    items: '3 items',
  },
  {
    id: 'ORD125',
    customer: 'Mike Johnson',
    date: '2025-01-13',
    status: 'Completed',
    amount: '₹620',
    items: '7 items',
  },
]

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: '3 delivery staff members unavailable today',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'alert',
    message: 'High order volume in Sector 12',
    time: '4 hours ago',
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your laundry service today.
        </p>
      </div>

      {/* Stats Grid */}
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
                    <span
                      className={`text-sm ${
                        stat.changeType === 'positive'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.id} - {order.items}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === 'Completed'
                          ? 'bg-green-50 text-green-700'
                          : order.status === 'Processing'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-yellow-50 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Orders
            </Button>
          </div>
        </div>

        {/* Alerts and Notifications */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div
                    className={`rounded-full p-2 ${
                      alert.type === 'warning'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Alerts
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
