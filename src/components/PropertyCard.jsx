import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  const firstImage = property.images?.[0];

  return (
    <li className="property-card">
      {firstImage && <img src={firstImage} alt={property.property_name} />}
      <h3>{property.property_name}</h3>
      <p>£{property.price_per_night} Per Night </p>
      <p>{property.location}</p>
      <p>Host: {property.host}</p>
      <Link to={`/property/${property.property_id}`}>See more</Link>
    </li>
  );
}
