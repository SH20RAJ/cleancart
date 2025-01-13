import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  Package,
  Truck,
  Settings,
  CreditCard,
  LineChart,
  MessageSquare,
  Bell,
  Store,
  UserCog,
  Percent
} from 'lucide-react'

const adminLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Orders', href: '/admin/orders', icon: Package },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Delivery Staff', href: '/admin/delivery-staff', icon: Truck },
  { name: 'Services', href: '/admin/services', icon: Store },
  { name: 'Analytics', href: '/admin/analytics', icon: LineChart },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Promotions', href: '/admin/promotions', icon: Percent },
  { name: 'Support', href: '/admin/support', icon: MessageSquare },
  { name: 'Notifications', href: '/admin/notifications', icon: Bell },
  { name: 'Staff Management', href: '/admin/staff', icon: UserCog },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  return (
    <div className="h-screen w-64 border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <span className="text-xl font-bold">CleanCart Admin</span>
        </Link>
      </div>
      <nav className="space-y-1 px-3 py-4">
        {adminLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50"
            >
              <Icon className="mr-3 h-5 w-5 text-gray-400" />
              {link.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
