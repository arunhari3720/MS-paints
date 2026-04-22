const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        {/* IMAGE */}
        <img
          src={service.image}
          alt={service.title}
          className="h-48 w-full object-cover hover:scale-105 transition duration-300"
        />

      </div>

      {/* TITLE */}
      <h3 className="text-center mt-3 text-sm font-semibold uppercase">
        {service.title}
      </h3>
    </div>
  );
};

export default ServiceCard;