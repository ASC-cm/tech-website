// import React from 'react';
// import '@testing-library/jest-dom'
// import { render, fireEvent } from '@testing-library/react';
// import SchoolWebsite from './SchoolWebsite.js';

// test('handleClassSelection updates classes correctly', () => {
//   const { getByText } = render(<SchoolWebsite />);

//   const mathButton = getByText('Math');
//   const scienceButton = getByText('Science');
//   const historyButton = getByText('History');

//   fireEvent.click(mathButton);
//   fireEvent.click(scienceButton);
//   fireEvent.click(historyButton);

//   const selectedClasses = getByText('Selected Classes:');
//   expect(selectedClasses).toBeInTheDocument();

//   const mathClass = getByText('Math');
//   const scienceClass = getByText('Science');
//   const historyClass = getByText('History');

//   expect(mathClass).toBeInTheDocument();
//   expect(scienceClass).toBeInTheDocument();
//   expect(historyClass).toBeInTheDocument();
// });


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DeveloperIncubator from "./pages/Developer Incubator";
import Service from "./pages/Service";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Developer Incubator" element={<DeveloperIncubator />} />
          <Route path="Service" element={<Service />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);