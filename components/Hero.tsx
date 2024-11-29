import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-sm">25% Discount This June</p>
          <h2 className="mb-8 text-4xl font-bold">Buy New Album</h2>
          <div className="flex justify-center gap-4">
            <button className="flex items-center rounded bg-white px-4 py-2 text-sm font-semibold text-black">
              <FaApple className="mr-2 h-5 w-5" />
              App Store
            </button>
            <button className="flex items-center rounded bg-white px-4 py-2 text-sm font-semibold text-black">
              <FaGooglePlay className="mr-2 h-5 w-5" />
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

