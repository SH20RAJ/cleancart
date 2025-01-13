import Link from 'next/link'
import { Button } from '../ui/button'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">CleanCart</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/pricing">
            <Button variant="ghost">Pricing</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
