import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Homepage from "./pages/Homepage";
import PropertyPage from "./pages/PropertyPage";
import AboutPage from "./pages/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="Header">
          <Header />
        </header>

        <section className="FilterBar">
          <FilterBar />
        </section>
        <main className="Main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
