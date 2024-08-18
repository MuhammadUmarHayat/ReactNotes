import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import DoctorList from "./pages/DoctorList";
import ReviewsPage from "./pages/ReviewsPage";
import PatientDetails from "./pages/PatientDetails";
// import Patient from '../components/Patient';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        //go to element
        <Route path="/services" element={<Services />} />
        // go to page
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/patient" element={<PatientDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
