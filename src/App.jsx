import React from 'react';
import  { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Home = lazy(() => import('./pages/Home'));
const CorporateProfile = lazy(() => import('./pages/CorporateProfile'));
const BOD = lazy(() => import('./pages/BOD'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const OurProducts = lazy(() => import('./pages/OurProducts'));
const Carreer = lazy(() => import('./pages/Carreer'));


function App() {
  return (

    <Router>
    <Navbar />
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-profile" element={<CorporateProfile />} />
          <Route path="/bod" element={<BOD />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery-page" element={<GalleryPage />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/carreer" element={<Carreer />} />
        </Routes>
      </Suspense> 
     </Router>
  );
}

export default App;
