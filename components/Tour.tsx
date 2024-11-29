const tourDates = [
    {
      date: "Jun 10",
      location: "Chelmsford, UK",
      venue: "V-Festival",
      status: "sold out",
    },
    {
      date: "Jun 13",
      location: "Sheffield, UK",
      venue: "Tramlines",
      status: "buy tickets",
    },
    {
      date: "Jun 15",
      location: "Kostrzyn, Poland",
      venue: "Woodstock",
      status: "buy tickets",
    },
  ]
  
  const Tour = () => {
    return (
      <section className="p-8">
        <h3 className="mb-8 text-center text-2xl font-bold">Upcoming Tours</h3>
        <div className="space-y-4">
          {tourDates.map((tour) => (
            <div
              key={tour.date}
              className="flex flex-col items-start justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <span className="font-bold">{tour.date}</span>
                <span>{tour.location}</span>
                <span className="text-gray-600">{tour.venue}</span>
              </div>
              <button
                className={`mt-4 rounded px-4 py-2 text-sm font-semibold sm:mt-0 ${
                  tour.status === "sold out"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-black text-white"
                }`}
                disabled={tour.status === "sold out"}
              >
                {tour.status}
              </button>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Tour
  
  