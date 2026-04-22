const tabs = [
  "reds",
  "oranges",
  "yellows",
  "greens",
  "blues",
  "violets",
];

const ColorTabs = ({ active, setActive }) => {
  return (
    <div className="flex gap-3 overflow-x-auto mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-full text-sm capitalize whitespace-nowrap
            ${
              active === tab
                ? "bg-red-500 text-white"
                : "bg-white shadow"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ColorTabs;