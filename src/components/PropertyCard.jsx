import { Link } from "react-router-dom";

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
      <p>
        {property.property_type} in {property.location.split(",")[0]}
      </p>

      <p>{property.property_name}</p>
      <p>{property.host} (Host)</p>
      <p>£{property.price_per_night} for one night </p>
    </li>
  );
}
