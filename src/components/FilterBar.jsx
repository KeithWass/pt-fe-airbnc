import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar({ initialFilters = {}, onChange }) {
  const [priceRange, setPriceRange, propertyType, setPropertyType] = useState(
    initialFilters.priceRange || "any"
  );

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPriceRange(val);
    onChange({ priceRange: val });
  };

  const handlePropertyType = (e) => {
    const val = e.target.value;
    setPropertyType(val);
    onChange({ propertyType: val });
  };

  const handleReset = () => {
    setPriceRange("any");
    onChange({ priceRange: "any" });
  };

  return (
    <div className="filter-bar">
      <label>
        Price :
        <select value={priceRange} onChange={handlePriceChange}>
          <option value="any">Any</option>
          <option value="0-100">£0 - £100</option>
          <option value="100-200">£100 - £200</option>
          <option value="200+">£200+</option>
        </select>
      </label>

      <label>
        Property Type :
        <select value={propertyType} onChange={handlePropertyType}>
          <option value="any">Any</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Studio">Studio</option>
          <option value="Loft">Loft</option>
          <option value="Villa">Villa</option>
          <option value="Cottage">Cottage</option>
          <option value="Chalet">Chalet</option>
          <option value="Cabin">Cabin</option>
          <option value="Mansion">Mansion</option>
        </select>
      </label>

      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
}
