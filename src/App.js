import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Bookings from "./pages/Bookings";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
