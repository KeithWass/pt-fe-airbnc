import { Link } from "react-router-dom";
import "./PropertyCard.css";

export default function PropertyCard({ property }) {
  const firstImage = property.images?.[0];

  console.log(property);
  return (
    <li className="property-card">
      <Link to={`/property/${property.property_id}`}>
        {firstImage && (
          <img
            src={firstImage}
            alt={property.property_name}
            className="property-card-image"
          />
        )}
      </Link>
      <div className="property-type">
        {property.property_type} in {property.location.split(",")[0]}
      </div>

      <p>{property.property_name}</p>
      <p>Host: {property.host} </p>
      <p>£{property.price_per_night * 2} for 2 nights </p>
    </li>
  );
}
