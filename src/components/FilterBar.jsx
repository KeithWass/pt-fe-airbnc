import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar({ initialFilters = {}, onChange }) {
  const [priceRange, setPriceRange] = useState(
    initialFilters.priceRange || "any",
  );
  const [propertyType, setPropertyType] = useState(
    initialFilters.propertyType || "any",
  );

  function handlePriceChange(e) {
    const val = e.target.value;
    setPriceRange(val);
    onChange({ ...initialFilters, priceRange: val });
  }

  function handlePropertyType(e) {
    const val = e.target.value;
    setPropertyType(val);
    onChange({ ...initialFilters, propertyType: val });
  }

  function handleReset() {
    setPriceRange("any");
    setPropertyType("any");
    onChange({ priceRange: "any", propertyType: "any" });
  }

  return (
    <div className="filter-bar-wrapper">
      <div className="filter-bar">
        <select
          value={priceRange}
          onChange={handlePriceChange}
          aria-label="Price Range"
        >
          <option value="any">Price</option>
          <option value="0-100">£0 - £100</option>
          <option value="100-200">£100 - £200</option>
          <option value="200+">£200+</option>
        </select>

        <div className="filter-divider" />

        <select value={propertyType} onChange={handlePropertyType}>
          <option value="any">Property type - any</option>
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

        <div className="filter-divider" />

        <select value={propertyType} onChange={handlePropertyType}>
          <option value="any">Location - any</option>
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

        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
