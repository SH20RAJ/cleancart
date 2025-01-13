import { Button } from '@/components/ui/button'
import {
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  IndianRupee,
  Repeat,
} from 'lucide-react'

const metrics = [
  {
    name: 'Revenue',
    value: '₹2.4L',
    change: '+23.1%',
    changeType: 'positive',
    chart: 'revenue',
  },
  {
    name: 'Orders',
    value: '1,234',
    change: '+12.3%',
    changeType: 'positive',
    chart: 'orders',
  },
  {
    name: 'Customers',
    value: '856',
    change: '+8.2%',
    changeType: 'positive',
    chart: 'customers',
  },
  {
    name: 'Average Order Value',
    value: '₹450',
    change: '-2.4%',
    changeType: 'negative',
    chart: 'aov',
  },
]

const topServices = [
  {
    name: 'Wash & Fold',
    orders: 523,
    revenue: '₹52,300',
    growth: '+15%',
  },
  {
    name: 'Dry Cleaning',
    orders: 342,
    revenue: '₹68,400',
    growth: '+8%',
  },
  {
    name: 'Iron Only',
    orders: 234,
    revenue: '₹11,700',
    growth: '+12%',
  },
]

const customerMetrics = [
  {
    name: 'New Customers',
    value: '124',
    change: '+12%',
  },
  {
    name: 'Repeat Customers',
    value: '68%',
    change: '+5%',
  },
  {
    name: 'Churn Rate',
    value: '4.2%',
    change: '-0.8%',
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Track your business performance and growth
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-md border p-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <select className="border-0 bg-transparent">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="rounded-lg border bg-card p-6 text-card-foreground"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {metric.name}
              </p>
              {metric.changeType === 'positive' ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-2xl font-bold">{metric.value}</p>
              <span
                className={`text-sm ${
                  metric.changeType === 'positive'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <div className="mt-4 h-10 w-full bg-secondary rounded">
              {/* Placeholder for charts */}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Services */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-semibold">Top Services</h3>
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {topServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.orders} orders
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{service.revenue}</p>
                    <p className="text-sm text-green-600">{service.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Metrics */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-semibold">Customer Metrics</h3>
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {customerMetrics.map((metric) => (
                <div
                  key={metric.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-full p-2 ${
                        metric.name === 'Churn Rate'
                          ? 'bg-red-50 text-red-600'
                          : 'bg-green-50 text-green-600'
                      }`}
                    >
                      {metric.name === 'Repeat Customers' ? (
                        <Repeat className="h-4 w-4" />
                      ) : metric.name === 'New Customers' ? (
                        <Users className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>
                    <p className="font-medium">{metric.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{metric.value}</p>
                    <p
                      className={`text-sm ${
                        metric.name === 'Churn Rate'
                          ? 'text-red-600'
                          : 'text-green-600'
                      }`}
                    >
                      {metric.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
