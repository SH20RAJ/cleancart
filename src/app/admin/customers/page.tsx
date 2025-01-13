import { Button } from '@/components/ui/button'
import { Search, Filter, Download, Mail, Phone } from 'lucide-react'

const customers = [
  {
    id: 'CUS001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    joinDate: '2024-12-01',
    orders: 15,
    totalSpent: '₹8,450',
    status: 'Active',
    address: 'Sector 12, Block B, House 45',
    subscription: 'Premium',
  },
  {
    id: 'CUS002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 98765 43211',
    joinDate: '2024-12-15',
    orders: 8,
    totalSpent: '₹4,280',
    status: 'Active',
    address: 'Sector 15, Block A, House 22',
    subscription: 'Basic',
  },
  {
    id: 'CUS003',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+91 98765 43212',
    joinDate: '2025-01-01',
    orders: 3,
    totalSpent: '₹1,620',
    status: 'Inactive',
    address: 'Sector 18, Block C, House 12',
    subscription: 'None',
  },
]

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">
            Manage your customer base and their information
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>Add Customer</Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full rounded-md border pl-9 pr-4 py-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="rounded-md border px-3 py-2">
            <option value="">All Subscriptions</option>
            <option value="premium">Premium</option>
            <option value="basic">Basic</option>
            <option value="none">None</option>
          </select>
          <select className="rounded-md border px-3 py-2">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="rounded-lg border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Join Date</th>
                <th className="py-3 px-4 text-left">Orders</th>
                <th className="py-3 px-4 text-left">Total Spent</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Subscription</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {customer.id}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{customer.joinDate}</td>
                  <td className="py-3 px-4">{customer.orders}</td>
                  <td className="py-3 px-4">{customer.totalSpent}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        customer.status === 'Active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        customer.subscription === 'Premium'
                          ? 'bg-purple-50 text-purple-700'
                          : customer.subscription === 'Basic'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {customer.subscription}
                    </span>
                  </td>
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
            Showing 1 to 3 of 50 entries
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
