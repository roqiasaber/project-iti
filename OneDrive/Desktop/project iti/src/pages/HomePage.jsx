import React from 'react';
import Navbar from '../componentsHome/Navbar';
import HeroSection from '../componentsHome/HeroSection';
import TrustedOrganizations from '../componentsHome/TrustedOrganizations';
import PopularServices from '../componentsHome/PopularServices';
import CtaBanner from '../componentsHome/CtaBanner';
import Footer from '../componentsHome/Footer';

export default function HomePage({ setCurrentPage }) {
  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage}/>
      <HeroSection setCurrentPage={setCurrentPage} />
      <TrustedOrganizations />
      <PopularServices setCurrentPage={setCurrentPage}/>
      <CtaBanner />
      <Footer />
    </div>
  );
}