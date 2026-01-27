import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "../api";
import { getUserById } from "../api";
import "./PropertyPage.css";

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [host, setHost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getPropertyById(id)
      .then((p) => {
        console.log("PROPERTY:", p);
        setProperty(p);
        return getUserById(p.host_id);
      })
      .then((user) => {
        console.log("HOST:", user);
        setHost(user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  console.log(property);

  return (
    <div className="property-page">
      <div className="property-name">{property.property_name}</div>

      <div className="image-gallery">
        {property.images.map((img, i) => (
          <img key={i} src={img} alt={`Image ${i}`} />
        ))}
      </div>
      <p className="property-location-text">{property.location}</p>
      {host && (
        <div className="host-info">
          <p>
            <img
              src={host.avatar}
              alt={`${host.first_name} ${host.surname}`}
              className="host_avatar"
            />
          </p>
          <p>Stay with {host.first_name}</p>
        </div>
      )}

      <p className="price">£{property.price_per_night}/night</p>
    </div>
  );
}
