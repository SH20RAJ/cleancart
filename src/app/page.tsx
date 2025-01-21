import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Revolutionizing Laundry Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Experience hassle-free laundry with CleanCart. Smart scheduling, real-time tracking, and premium quality service at your fingertips.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose CleanCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-gray-600">Choose the plan that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-2 ${plan.popular ? 'border-purple-600' : 'border-gray-200'}`}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="w-fit mb-2" variant="secondary">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-600">/{plan.interval}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your laundry experience?
          </h2>
          <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made laundry day stress-free with CleanCart.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Revolutionizing Laundry Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Revolutionizing Laundry Services for Ranchi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Current Issues</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Lack of Convenience</p>
                    <p className="text-gray-600">Inconsistent timings and communication gaps with delivery services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Manipulation & Intimidation</p>
                    <p className="text-gray-600">Students often overpay due to lack of pricing transparency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Cash Transactions</p>
                    <p className="text-gray-600">Inconvenience for students preferring UPI or cashless options</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">User-Friendly App</p>
                    <p className="text-gray-600">Book laundry services seamlessly without direct interactions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Flexible Options</p>
                    <p className="text-gray-600">Choose between subscription plans or pay-per-use services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Transparent Billing</p>
                    <p className="text-gray-600">Automatic price calculation based on clothes type and quantity</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Cashless Payments</p>
                    <p className="text-gray-600">Exclusive UPI payments for a smoother experience</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
}

const features = [
  {
    title: "Smart Scheduling",
    description: "Choose your preferred pickup and delivery slots with our intelligent scheduling system.",
    icon: Calendar
  },
  {
    title: "Real-time Tracking",
    description: "Track your laundry's status in real-time, from pickup to delivery.",
    icon: CheckCircle2
  },
  {
    title: "Premium Quality",
    description: "Experience professional cleaning with premium detergents and expert care.",
    icon: CheckCircle2
  }
];

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for individuals",
    price: "499",
    interval: "month",
    popular: false,
    features: [
      "Up to 5 kg clothes per week",
      "Standard delivery",
      "Basic wash & fold",
      "Mobile app access"
    ]
  },
  {
    name: "Pro",
    description: "Best for regular users",
    price: "899",
    interval: "month",
    popular: true,
    features: [
      "Up to 10 kg clothes per week",
      "Priority delivery",
      "Premium wash & iron",
      "Special garment care",
      "24/7 customer support"
    ]
  },
  {
    name: "Family",
    description: "Ideal for families",
    price: "1499",
    interval: "month",
    popular: false,
    features: [
      "Up to 20 kg clothes per week",
      "Same-day delivery",
      "Premium wash & iron",
      "Special garment care",
      "Dedicated support",
      "Family discount"
    ]
  }
];
