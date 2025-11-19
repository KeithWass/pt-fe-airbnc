import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <li className="property-card">
      <h3>{property.property_name}</h3>
      <p>£{property.price_per_night} Per Night </p>
      <p>{property.location}</p>
      <p>Host: {property.host}</p>
      <Link to={`/property/${property.property_id}`}>See more</Link>
    </li>
  );
}
