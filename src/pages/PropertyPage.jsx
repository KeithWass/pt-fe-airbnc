import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "../api";
import { getUserById } from "../api";
import { getReviewsByPropertyId } from "../api";
import "./PropertyPage.css";

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [host, setHost] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function renderStars(rating) {
    const full = Math.round(rating);
    const empty = 5 - full;

    return "★".repeat(full) + "☆".repeat(empty);
  }

  useEffect(() => {
    setIsLoading(true);

    getPropertyById(id)
      .then((p) => {
        setProperty(p);
        return Promise.all([
          getUserById(p.host_id),
          getReviewsByPropertyId(id).catch(() => []),
        ]);
      })
      .then(([user, reviews]) => {
        setHost(user);
        setReviews(reviews);
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
          <img
            src={host.avatar}
            alt={`${host.first_name} ${host.surname}`}
            className="host_avatar"
          />

          <p>Stay with {host.first_name}</p>
        </div>
      )}

      <p className="price">£{property.price_per_night}/night</p>

      <section className="reviews-section">
        <hr className="section-divider" />
        <h2>Reviews</h2>

        {reviews.length === 0 && <p> No reviews</p>}

        {reviews.map((review) => (
          <div key={review.review_id} className="review-card">
            <div className="review-header">
              <img
                src={review.guest_avatar}
                alt={review.guest}
                className="guest_avatar"
              />
              <span className="review-author">{review.guest}</span>
            </div>
            <p className="review-rating"> {renderStars(review.rating)}</p>
            <p className="review-text">{review.comment}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
