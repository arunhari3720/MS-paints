import services from "../data/service";

const WorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Professional House Painting Services
          </h2>
          <p className="text-gray-500 mt-3">
            Explore our recent works and model designs
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <h3 className="text-white text-lg font-semibold tracking-wide">
                  {service.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WorksSection;