import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'

const merchItems = [
  { name: "Vinyl Record", price: "$25", status: "new" },
  { name: "Album Stream", price: "$15", status: "new" },
  { name: "Silver Jacket", price: "$89", status: "sold out" },
  { name: "Headphones", price: "$59", status: "" },
]

const Merchandise = () => {
  return (
    <section className="p-8">
      <h3 className="mb-8 text-center text-2xl font-bold">
        Exclusive Merch
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {merchItems.map((item) => (
          <div key={item.name} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={`/merch-${item.name.toLowerCase().replace(' ', '-')}.jpg`}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105"
              />
              {item.status && (
                <div className="absolute right-2 top-2 rounded bg-black px-2 py-1 text-xs text-white">
                  {item.status}
                </div>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <button
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                disabled={item.status === "sold out"}
              >
                <FaShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Merchandise

