import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import PageHeader from './components/PageHeaders';
import PageFooter from './components/PageFooter';
import Home from "./pages/Home/index";
import Resgate from "./pages/Resgate/resgate";
<<<<<<< HEAD
import MKT from "./pages/MKT/mkt";


function App() {
  
  return (
    <div className="App">
      <Router>
        <PageHeader/>
        
        
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />

          <Route path="/marktPlace" element={<MKT />} />


        </Routes>

      </Router>

      <PageFooter />
       
=======
import SobreNos from './pages/SobreNos/IndexSobreNos';
import { MenuMobile } from "./components/MenuMobile";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <PageHeader setMenuIsVisible={setMenuIsVisible} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/SobreNos" element={<SobreNos />} />

        </Routes>
      </Router>
      <PageFooter />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />



>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4
    </div>
  );
}

export default App;
