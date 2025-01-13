import { Button } from '@/components/ui/button'
import Link from 'next/link'

const plans = [
  {
    name: 'Basic',
    price: '₹999/month',
    features: [
      '10 kg laundry per month',
      'Standard delivery (48 hours)',
      'Basic wash & fold',
      'App access',
    ],
  },
  {
    name: 'Pro',
    price: '₹1,999/month',
    features: [
      '25 kg laundry per month',
      'Express delivery (24 hours)',
      'Premium wash & fold',
      'Dry cleaning included',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Family',
    price: '₹3,999/month',
    features: [
      'Unlimited laundry',
      'Same-day delivery',
      'All premium services',
      'Dedicated account manager',
      'Custom scheduling',
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-lg'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
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
              <Link href="/signup" className="block mt-8">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
