import React from 'react';
import Navbars from './Components/Navbars';
import Header from './Components/Header';
import Services from './Components/Services';
import ProductRunning from './Components/ProductRunning';
import MainFeature from './Components/MainFeature';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import './Components/stylesheets/main.css';
import './Components/stylesheets/mediaQueries.css';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Header />
      <Services />
      <ProductRunning />
      <MainFeature />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
