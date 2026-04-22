const ColorCard = ({ color }) => {
  return (
    <div>
      <div
        className="h-32 rounded-xl"
        style={{ backgroundColor: color.hex }}
      />

      <div className="mt-2">
        <h3 className="text-sm font-semibold">{color.name}</h3>
        <p className="text-xs text-gray-500">{color.code}</p>
      </div>
    </div>
  );
};

export default ColorCard;