import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your Laundry, <span className="text-blue-600">Simplified</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience hassle-free laundry service with scheduled pickups, real-time tracking, and professional cleaning.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CleanCart?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Smart Scheduling</h3>
              <p className="text-gray-600">Choose your preferred pickup and delivery times that fit your schedule.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Real-time Tracking</h3>
              <p className="text-gray-600">Track your laundry status and delivery in real-time through our app.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Care</h3>
              <p className="text-gray-600">Expert handling of your clothes with eco-friendly cleaning options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to simplify your laundry routine?</h2>
          <p className="mb-8 text-lg">Join thousands of satisfied customers who have made laundry day stress-free.</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">Start Your Free Trial</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
