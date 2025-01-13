import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Wash & Fold',
    description: 'Professional washing and folding service for your everyday clothes',
    price: 'From ₹80/kg',
    features: [
      'Sorting by color and fabric',
      'Premium detergents',
      'Proper folding and packaging',
      '48-hour turnaround',
    ],
  },
  {
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for your delicate and special garments',
    price: 'From ₹200/piece',
    features: [
      'Stain removal',
      'Gentle cleaning process',
      'Premium packaging',
      'Fabric protection',
    ],
  },
  {
    title: 'Express Service',
    description: 'Quick turnaround for urgent laundry needs',
    price: 'Additional ₹100',
    features: [
      'Same-day service',
      'Priority processing',
      'Express delivery',
      'Available for all services',
    ],
  },
  {
    title: 'Subscription Plans',
    description: 'Regular laundry service at discounted rates',
    price: 'From ₹999/month',
    features: [
      'Weekly pickups',
      'Flexible scheduling',
      'Priority service',
      'Dedicated support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Professional laundry services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-bold text-blue-600 mb-6">{service.price}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
