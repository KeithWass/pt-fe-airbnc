import { useState } from "react";

export default function FilterBar({ initialFilters = {}, onChange }) {
  const [location, setLocation] = useState(initialFilters.location || "");
  const [priceRange, setPriceRange] = useState(
    initialFilters.priceRange || "any"
  );

  const handleLocationChange = (e) => {
    const val = e.target.value;
    setLocation(val);

    onChange({ location: val, priceRange });
  };

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPriceRange(val);
    onChange({ location, priceRange: val });
  };

  const handleReset = () => {
    setLocation("");
    setPriceRange("any");
    onChange({ location: "", priceRange: "any" });
  };

  return (
    <div className="filter-bar">
      <label>
        location:
        <select value={location} onChange={handleLocationChange}>
          <option value="">All</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Bristol">Bristol</option>
        </select>
      </label>

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
