import { Button } from '@/components/ui/button'

const timeSlots = [
  '09:00 AM - 11:00 AM',
  '11:00 AM - 01:00 PM',
  '02:00 PM - 04:00 PM',
  '04:00 PM - 06:00 PM',
]

const services = [
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    price: '₹80/kg',
    description: 'Regular clothes washing and folding service',
  },
  {
    id: 'dry-clean',
    name: 'Dry Cleaning',
    price: '₹200/piece',
    description: 'Professional dry cleaning for delicate garments',
  },
  {
    id: 'iron',
    name: 'Iron Only',
    price: '₹20/piece',
    description: 'Professional ironing service',
  },
  {
    id: 'express',
    name: 'Express Service',
    price: '+₹100',
    description: 'Same day delivery (orders before 11 AM)',
  },
]

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Schedule Pickup</h2>
        <p className="text-muted-foreground">
          Schedule a new laundry pickup at your convenience
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column - Service Selection */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Services</h3>
            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <input
                    type="checkbox"
                    id={service.id}
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={service.id}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="text-muted-foreground">{service.price}</span>
                    </label>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Special Instructions</h3>
            <textarea
              className="w-full rounded-md border p-3 h-32"
              placeholder="Any specific instructions for handling your clothes..."
            />
          </div>
        </div>

        {/* Right Column - Time Slot Selection */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Pickup Date</h3>
            <input
              type="date"
              className="w-full rounded-md border p-2"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Select Time Slot</h3>
            <div className="grid gap-3">
              {timeSlots.map((slot) => (
                <label
                  key={slot}
                  className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="timeSlot"
                    className="h-4 w-4 border-gray-300"
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pickup Address</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="House/Flat No."
                  className="rounded-md border p-2"
                />
                <input
                  type="text"
                  placeholder="Street Name"
                  className="rounded-md border p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Landmark (Optional)"
                className="w-full rounded-md border p-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="rounded-md border p-2"
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="rounded-md border p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Schedule Pickup</Button>
      </div>
    </div>
  )
}
