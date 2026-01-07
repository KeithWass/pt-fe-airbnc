import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "../api";

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPropertyById(id)
      .then((p) => {
        setProperty(p);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  console.log(property);

  return (
    <div>
      <h1>
        <div className="property-name">{property.property_name}</div>
      </h1>

      <div className="image-gallery">
        {property.images.map((img, i) => (
          <img key={i} src={img} alt={`Image ${i}`} />
        ))}
      </div>

      <h3>
        <p>{property.location}</p>
        <p>£{property.price_per_night}/night</p>
        <p>Host: {property.host}</p>
      </h3>
    </div>
  );
}
