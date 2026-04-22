import logo from "../assets/home_logo.png";

const LeadForm = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">

      {/* Image */}
      <img
        src={logo}
        alt="MS Paints"
        className="w-[400px] md:w-[500px] lg:w-[600px] opacity-90 object-contain mx-auto mb-6"
      />

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        We Paint Your Dream
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg">
        Trusted Painting Contractors Since 1980s
      </p>

    </div>
  );
};

export default LeadForm;