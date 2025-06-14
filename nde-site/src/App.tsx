import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Who from './pages/Who';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Who/>
      <Services/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
