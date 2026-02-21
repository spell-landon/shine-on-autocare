interface QuoteFormProps {
  preselectedService?: string;
  heading?: string;
}

export function QuoteForm({
  preselectedService,
  heading = "Get Your Free Quote",
}: QuoteFormProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{heading}</h3>
      <form className="space-y-4" method="post">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="(830) 555-0123"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="San Antonio, Pleasanton, etc."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="vehicle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vehicle Type
            </label>
            <select
              id="vehicle"
              name="vehicle"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              <option value="">Select type</option>
              <option value="sedan">Car / Sedan</option>
              <option value="suv">SUV / Crossover</option>
              <option value="truck">Truck</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="rv">RV / Motorhome</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              defaultValue={preselectedService || ""}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              <option value="">Select service</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="full">Full Detail (Int + Ext)</option>
              <option value="interior">Interior Detailing</option>
              <option value="exterior">Exterior Detailing</option>
              <option value="paint-correction">Paint Correction</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Anything else? (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Tell us about your vehicle, its condition, or any specific concerns..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-primary-600/25 text-lg cursor-pointer"
        >
          Request My Free Quote
        </button>
        <p className="text-xs text-gray-400 text-center">
          No spam, no obligation. We typically respond within 1 hour.
        </p>
      </form>
    </div>
  );
}
