import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Who from './pages/Who';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Who/>
      <Services/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
