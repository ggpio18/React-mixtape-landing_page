import { FaPlay, FaApple, FaGooglePlay } from 'react-icons/fa'
import Image from 'next/image'

const tracks = [
  "Unwrapping/Easy",
  "Between deep inside",
  "Give Her Shadow",
  "Midnight Tales",
  "Stay Mary",
  "Crazy Ghost",
  "Surprise My Party",
  "Descendo",
  "Ghost Soul",
]

const Album = () => {
  return (
    <section className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-full">
          <Image
            src="/album-cover.jpg"
            alt="BOOT Album Cover"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <button className="flex items-center rounded bg-black px-4 py-2 text-sm font-semibold text-white">
            <FaApple className="mr-2 h-5 w-5" />
            App Store
          </button>
          <button className="flex items-center rounded bg-black px-4 py-2 text-sm font-semibold text-white">
            <FaGooglePlay className="mr-2 h-5 w-5" />
            Google Play
          </button>
        </div>
      </div>
      <div>
        <h3 className="mb-6 text-2xl font-bold">Tracklist</h3>
        <div className="h-[300px] overflow-y-auto">
          {tracks.map((track, index) => (
            <div
              key={track}
              className="mb-4 flex items-center justify-between"
            >
              <span className="text-sm text-gray-600">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="flex-1 px-4">{track}</span>
              <button className="rounded-full p-1 hover:bg-gray-200">
                <FaPlay className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Album

