import { useState } from "react";

export default function FilterBar({ initialFilters = {}, onChange }) {
  const [priceRange, setPriceRange] = useState(
    initialFilters.priceRange || "any"
  );

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPriceRange(val);
    onChange({ location, priceRange: val });
  };

  const handleReset = () => {
    setPriceRange("any");
    onChange({ priceRange: "any" });
  };

  return (
    <div className="filter-bar">
      <label>
        Price range:
        <select value={priceRange} onChange={handlePriceChange}>
          <option value="any">Any</option>
          <option value="0-100">£0 - £100</option>
          <option value="100-200">£100 - £200</option>
          <option value="200+">£200+</option>
        </select>
      </label>

      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
}
