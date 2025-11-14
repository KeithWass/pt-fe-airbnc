import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

export default function Homepage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://pt-be-airbnc-txl6.onrender.com/api/properties")
      .then((res) => {
        setProperties(res.data.properties);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <main>
      <h2>Places to stay</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {properties.map((property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}
      </div>
    </main>
  );
}
