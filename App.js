// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./pages/Service";

const Small = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">Home Section</section>
        <section id="about">About Section</section>
        <section id="services">Services Section</section>
        <section id="contact">Contact Section</section>
      </main>
    </div>
  );
};

export default Small;
