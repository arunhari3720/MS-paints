import { useState } from "react";
import colorsData from "../data/colors";
import ColorCard from "../components/ColorCard";
import ColorTabs from "../components/ColorTab";
import FilterSidebar from "../components/FilterSidebar";

const Color = () => {
  const [activeCategory, setActiveCategory] = useState("reds");
  const [selectedTones, setSelectedTones] = useState([]);
  const [search, setSearch] = useState("");

  // 🎯 FILTER LOGIC
  const filteredColors = colorsData.filter((color) => {
    const matchCategory = color.category === activeCategory;

    const matchTone =
      selectedTones.length === 0 ||
      selectedTones.includes(color.tone);

    const matchSearch =
      color.name.toLowerCase().includes(search.toLowerCase()) ||
      color.code.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchTone && matchSearch;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* SEARCH */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search shade..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md border w-64"
        />
      </div>

      {/* TABS */}
      <ColorTabs
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* FILTER */}
        <FilterSidebar
          selected={selectedTones}
          setSelected={setSelectedTones}
        />

        {/* COLORS */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-5 gap-6">
          {filteredColors.map((color) => (
            <ColorCard key={color.code} color={color} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Color;