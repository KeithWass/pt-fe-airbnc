import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar({ initialFilters = {}, onChange }) {
  const [priceRange, setPriceRange] = useState(
    initialFilters.priceRange || "any",
  );
  const [propertyType, setPropertyType] = useState(
    initialFilters.propertyType || "any",
  );
  const [propertyLocation, setPropertyLocation] = useState(
    initialFilters.propertyLocation || "any",
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

  function handlePropertyLocation(e) {
    const val = e.target.value;
    setPropertyLocation(val);
    onChange({ ...initialFilters, propertyLocation: val });
  }

  function handleReset() {
    setPriceRange("any");
    setPropertyType("any");
    onChange({
      priceRange: "any",
      propertyType: "any",
      propertyLocation: "any",
    });
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

        <select value={propertyLocation} onChange={handlePropertyLocation}>
          <option value="any">Location - any</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Brighton">Brighton</option>
          <option value="Birmingham">Biringham</option>
          <option value="Bristol">Bristol</option>
          <option value="Cornwall">Cornwall</option>
          <option value="Lake District">Lake District</option>
          <option value="Cambridge">Cambridge</option>
          <option value="Swansea">Swansea</option>
          <option value="Scotland">Scotland</option>
          <option value="Eryri">Eryri</option>
        </select>

        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
