"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2, ArrowRight, Sparkles, Star, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-50">
        <ul className="flex space-x-8">
          <li><Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link></li>
          <li><Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link></li>
          <li><Link href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Testimonials</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative mx-auto max-w-7xl"
        >
          <motion.div 
            variants={fadeIn}
            className="text-center"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200" variant="secondary">
              ✨ Experience The Future Of Laundry
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient pb-2">
              Revolutionizing
              <br /> 
              Laundry Services
            </h1>
            <motion.p 
              variants={fadeIn}
              className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto"
            >
              Experience hassle-free laundry with CleanCart. Smart scheduling, real-time tracking, and premium quality service at your fingertips.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-200/50 transition-all duration-300 group">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="hover:bg-purple-50">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Features</Badge>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Why Choose CleanCart?
            </h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card className="group hover:scale-105 transition-all duration-300 border-none shadow-lg hover:shadow-xl bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Pricing</Badge>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600 text-lg">Choose the plan that works best for you</p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-2 border-purple-600 shadow-purple-200' : 'border border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                        Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₹{plan.price}</span>
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
                    <Button 
                      className={`w-full mt-6 group ${
                        plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Testimonials</Badge>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              What Our Customers Say
            </h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {testimonial.author[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Ready to Transform Your Laundry Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers who have made laundry day their favorite day.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-200/50 transition-all duration-300 group">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Choose your preferred pickup and delivery slots with our intelligent scheduling system."
  },
  {
    icon: Shield,
    title: "Premium Care",
    description: "Your garments receive the highest quality care with our expert cleaning processes."
  },
  {
    icon: Sparkles,
    title: "Real-time Tracking",
    description: "Track your laundry's status in real-time from pickup to delivery."
  }
];

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for occasional needs",
    price: "499",
    interval: "month",
    features: [
      "Up to 5 kg laundry per week",
      "48-hour turnaround",
      "Basic wash & fold",
      "Free pickup & delivery"
    ]
  },
  {
    name: "Premium",
    description: "Most popular for families",
    price: "999",
    interval: "month",
    popular: true,
    features: [
      "Up to 10 kg laundry per week",
      "24-hour turnaround",
      "Premium wash & fold",
      "Free pickup & delivery",
      "Stain treatment included",
      "Priority scheduling"
    ]
  },
  {
    name: "Business",
    description: "For businesses & bulk orders",
    price: "1999",
    interval: "month",
    features: [
      "Unlimited laundry",
      "Same-day service available",
      "Premium wash & fold",
      "Free pickup & delivery",
      "Dedicated account manager",
      "Custom scheduling"
    ]
  }
];

const testimonials = [
  {
    content: "CleanCart has completely transformed how I handle my laundry. The service is impeccable!",
    author: "Sarah Johnson",
    title: "Busy Professional"
  },
  {
    content: "The convenience and quality of service is unmatched. I've never had cleaner clothes!",
    author: "Michael Chen",
    title: "Family of Four"
  },
  {
    content: "As a business owner, their business plan has been a game-changer for our uniform management.",
    author: "David Wilson",
    title: "Restaurant Owner"
  }
];
