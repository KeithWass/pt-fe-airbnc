import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties = [] }) {
  if (!properties.length) return <p>No properties found.</p>;
  return (
    <ul>
      {properties.map((p) => (
        <PropertyCard key={p.property_id} property={p} />
      ))}
    </ul>
  );
}
