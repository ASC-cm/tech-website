// // src/Header.js
// import React from 'react';
// import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header style={headerStyles}>
//       {/* Top section with title */}
//       <div style={topSectionStyles}>
//         <h1 style={titleStyles}>Wedigraf Academy School</h1>
//       </div>

//       {/* Icon navigation section positioned at the top-right */}
//       <nav style={navStyles}>
//         <Link to="/" style={iconStyles}><FaFacebook /></Link>
//         <Link to="/about" style={iconStyles}><FaTwitter /></Link>
//         <Link to="/classes" style={iconStyles}><FaYoutube /></Link>
//         <Link to="/services" style={iconStyles}><FaLinkedin /></Link>
//       </nav>
//     </header>
//   );
// };

// // Styles
// const headerStyles = {
//   backgroundColor: '#333',
//   color: '#fff',
//   paddingBottom: '10px',
//   position: 'relative', // Set relative to position the nav inside
// };

// const topSectionStyles = {
//   padding: '10px 20px',
//   textAlign: 'center'
// };

// const titleStyles = {
//   margin: 0,
//   fontSize: '1.5em'
// };

// const navStyles = {
//   position: 'absolute',
//   top: '-50px',
//   right: '20px',
//   display: 'flex',
//   gap: '15px'
// };

// const iconStyles = {
//   color: '#fff',
//   fontSize: '1.5em',
//   textDecoration: 'none'
// };

// export default Header;
import { Link } from "react-router-dom";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate("/Login");
  };
  return (
  <>
    <header>
      <div className="navbar">
        <h1 className="logo">Asdin.net</h1>
        <nav>
            <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Developer Incubator">Developer Incubator</Link>
                </li>
                <li>
                  <Link to="https://wa.me/+2347034418309">Hire a Developer</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <span></span>
            </ul>
        </nav>
        <button onClick={goToLogin} className="login-button">Login</button>
      </div>
    </header>
  </>
  )}


  export default Header;