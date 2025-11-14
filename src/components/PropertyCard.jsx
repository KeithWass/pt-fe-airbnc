export default function PropertyCard({ property }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px",
        padding: "10px",
        width: "250px",
        textAlign: "left",
      }}
    >
      <h3>{property.property_name}</h3>
      <p>{property.location}</p>
      <p>£{property.price_per_night} per night</p>
      <p>Type: {property.property_type}</p>
    </div>
  );
}
