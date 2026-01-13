import { useEffect, useState } from "react";
import "./Favourite.css";

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
    <button
      onClick={handleToggle}
      className="favourite-button"
      aria-label="Toggle favourite"
    >
      {isFavourited ? "❤️" : "🤍"}
    </button>
  );
}
