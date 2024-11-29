import Image from 'next/image'

const Discography = () => {
  return (
    <section className="p-8">
      <h3 className="mb-8 text-center text-2xl font-bold">Our Discography</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={`/album-${i + 1}.jpg`}
              alt={`Album ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Discography

