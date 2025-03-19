// pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ProjectsSection from '../components/ProjectSection';
import EnquirySection from '../components/Enquiry';

const Home = () => {
  return (
    <>

      <Header />
      <Cards />
      <ProjectsSection />
      <EnquirySection />
    </>
  );
};

export default Home;