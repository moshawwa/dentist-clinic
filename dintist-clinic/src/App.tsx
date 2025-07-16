
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';


const App = () => (
  <BrowserRouter>
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" element={<><Hero /><Features /></>} />
          <Route path="/features" element={<Features />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
      <DarkModeToggle />
    </div>
  </BrowserRouter>
);

export default App;
