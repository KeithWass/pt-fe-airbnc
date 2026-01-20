import PropertyCard from "./PropertyCard";
import "./PropertyList.css";
import { useState } from "react";

export default function PropertyList({ properties = [], isLoading }) {
  return (
    <ul className="property-list">
      {properties.map((p) => (
        <PropertyCard key={p.property_id} property={p} />
      ))}
    </ul>
  );
}
