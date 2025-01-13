import { Button } from '@/components/ui/button'
import { Search, Filter, Download } from 'lucide-react'

const orders = [
  {
    id: 'ORD123',
    customer: 'John Doe',
    phone: '+91 98765 43210',
    date: '2025-01-13',
    status: 'Processing',
    amount: '₹450',
    items: '5 items',
    address: 'Sector 12, Block B, House 45',
    assignedTo: 'Raj Kumar',
  },
  {
    id: 'ORD124',
    customer: 'Jane Smith',
    phone: '+91 98765 43211',
    date: '2025-01-13',
    status: 'Pending',
    amount: '₹280',
    items: '3 items',
    address: 'Sector 15, Block A, House 22',
    assignedTo: 'Amit Singh',
  },
  {
    id: 'ORD125',
    customer: 'Mike Johnson',
    phone: '+91 98765 43212',
    date: '2025-01-13',
    status: 'Completed',
    amount: '₹620',
    items: '7 items',
    address: 'Sector 18, Block C, House 12',
    assignedTo: 'Priya Sharma',
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">
            Manage and track all customer orders
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>Add New Order</Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full rounded-md border pl-9 pr-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="rounded-md border px-3 py-2">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-lg border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Assigned To</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.phone}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">
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
                  </td>
                  <td className="py-3 px-4">{order.amount}</td>
                  <td className="py-3 px-4">{order.assignedTo}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 3 of 100 entries
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
