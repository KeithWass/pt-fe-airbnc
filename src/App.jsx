import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Homepage from "./pages/Homepage";
import PropertyPage from "./pages/PropertyPage";
import AboutPage from "./pages/About";

import "./App.css";

function App() {
  function priceRangeToMinMax(range) {
    if (range === "0-100") return { minprice: "0", maxprice: "100" };
    if (range === "100-200") return { minprice: "100", maxprice: "200" };
    if (range === "200+") return { minprice: "200", maxprice: "" };
    return {};
  }

  const [filters, setFilters] = useState({
    location: "",
    priceRange: "any",
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const { minprice, maxprice } = priceRangeToMinMax(filters.priceRange);

    axios
      .get("https://pt-be-airbnc-txl6.onrender.com/api/properties", {
        params: {
          location: filters.location || undefined,
          minprice,
          maxprice,
        },
      })
      .then((res) => setProperties(res.data.properties))
      .catch(console.error);
  }, [filters]);

  return (
    <div className="App">
      <Router>
        <header className="Header">
          <Header />
        </header>

        <section className="FilterBar">
          <FilterBar
            initialFilters={filters}
            onChange={(updatedFilters) => setFilters(updatedFilters)}
          />
        </section>
        <main className="Main">
          <Routes>
            <Route path="/" element={<Homepage properties={properties} />} />
            <Route path="/property/:id" element={<PropertyPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
