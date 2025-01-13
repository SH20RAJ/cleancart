import Link from 'next/link'
import { 
  Home, 
  Calendar, 
  Package, 
  CreditCard, 
  Settings, 
  History,
  Bell
} from 'lucide-react'

const sidebarLinks = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Schedule Pickup', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Active Orders', href: '/dashboard/orders', icon: Package },
  { name: 'Order History', href: '/dashboard/history', icon: History },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  return (
    <div className="h-screen w-64 border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="text-xl font-bold">
          CleanCart
        </Link>
      </div>
      <nav className="space-y-1 px-3 py-4">
        {sidebarLinks.map((link) => {
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
