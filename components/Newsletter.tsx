const Newsletter = () => {
    return (
      <section className="bg-gray-50 p-16">
        <div className="mx-auto max-w-md text-center">
          <h3 className="mb-8 text-2xl font-bold">
            Subscribe To The Newsletter
          </h3>
          <form className="flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 rounded border px-4 py-2 focus:border-black focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  
  