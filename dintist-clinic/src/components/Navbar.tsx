import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
    <div className="container">
      <Link className="navbar-brand text-primary fw-bold" to="/">
        <span role="img" aria-label="tooth">🦷</span> Dintist Clinic
      </Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
        <li className="nav-item"><Link className="nav-link btn btn-primary text-white px-3 ms-2" to="/book">Book Appointment</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
