import { useEffect, useState } from "react";
import "./PropertyCard.css";
import HeartIcon from "../icons/HeartIcon";

export default function Favourite({ propertyId }) {
  const [isFavourited, setIsFavourited] = useState(false);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavourited(stored.includes(propertyId));
  }, [propertyId]);

  const handleToggle = () => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    let updated;

    if (stored.includes(propertyId)) {
      updated = stored.filter((id) => id !== propertyId);
    } else {
      updated = [...stored, propertyId];
    }
    localStorage.setItem("favourites", JSON.stringify(updated));
    setIsFavourited(!isFavourited);
  };
  return (
    <div>
      <button
        className="favourite-button"
        onClick={handleToggle}
        aria-label="Toggle favourite"
      >
        <HeartIcon filled={isFavourited} />
      </button>
    </div>
  );
}
