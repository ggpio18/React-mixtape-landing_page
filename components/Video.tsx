import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'

const Video = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="/video-thumbnail.jpg"
        alt="Video Thumbnail"
        layout="fill"
        objectFit="cover"
      />
      <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
        <FaPlay className="h-8 w-8" />
      </button>
    </section>
  )
}

export default Video

