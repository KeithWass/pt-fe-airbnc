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

  return (
    <div>
      <h2>{property.property_name}</h2>
      <p>{property.location}</p>
      <p>£{property.price_per_night}/night</p>
      <p>Hosted by: {property.host}</p>
    </div>
  );
}
