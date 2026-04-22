const tones = ["light", "dark", "vibrant", "neutral"];

const FilterSidebar = ({ selected, setSelected }) => {
  const toggle = (tone) => {
    if (selected.includes(tone)) {
      setSelected(selected.filter((t) => t !== tone));
    } else {
      setSelected([...selected, tone]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Filter</h2>

      <div className="space-y-2 text-sm">
        {tones.map((tone) => (
          <label key={tone} className="flex gap-2">
            <input
              type="checkbox"
              checked={selected.includes(tone)}
              onChange={() => toggle(tone)}
            />
            {tone}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;