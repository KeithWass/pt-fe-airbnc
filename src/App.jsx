import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Homepage from "./pages/Homepage";
import PropertyPage from "./pages/PropertyPage";
import AboutPage from "./pages/About";
import { getProperties } from "./api";

function App() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    <p>Loading...</p>;
  }
  const [filters, setFilters] = useState({
    priceRange: "any",
  });

  function priceRangeToMinMax(range) {
    if (range === "0-100") return { minprice: 0, maxprice: 100 };
    if (range === "100-200") return { minprice: 100, maxprice: 200 };
    if (range === "200+") return { minprice: 200, maxprice: undefined };
    return {};
  }

  useEffect(() => {
    const { minprice, maxprice } = priceRangeToMinMax(filters.priceRange);

    setIsLoading(true);
    if (isLoading) {
      <p>Loading...</p>;
    }
    getProperties({ minprice, maxprice })
      .then((properties) => {
        setProperties(properties);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setIsLoading(false);
      });
  }, [filters]);

  return (
    <div>
      <Router>
        <Header />
        <FilterBar
          initialFilters={filters}
          onChange={(updatedFilters) => setFilters(updatedFilters)}
        />

        <Routes>
          <Route
            path="/"
            element={<Homepage properties={properties} isLoading={isLoading} />}
          />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
