import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Contact from './Contact';
import Resume from './Resume';

function Content() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "MyWork") {
      return <MyWork />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};


export default Content;