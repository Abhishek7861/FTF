import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import TrendDetail from './Pages/TrendDetail/TrendDetail';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NoPage from './Pages/NoPage/NoPage';



function App() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedTrendCategory, setSelectedTrendCategory] = useState(null);
  const [selectedGeography, setSelectedGeography] = useState(null);

  return (
    <div>
      <h1 className='title'>Vogue Verse</h1>
      <Router>
        <Routes>
          
          <Route index element={<Home selectedPeriod={selectedPeriod} selectedGeography={selectedGeography} selectedTrendCategory={selectedTrendCategory}
            setSelectedPeriod={setSelectedPeriod} setSelectedGeography={setSelectedGeography} setSelectedTrendCategory={setSelectedTrendCategory} />} />
          
          <Route path="/trend-detail" element={<TrendDetail selectedPeriod={selectedPeriod} selectedGeography={selectedGeography} selectedTrendCategory={selectedTrendCategory}
            setSelectedPeriod={setSelectedPeriod} setSelectedGeography={setSelectedGeography} setSelectedTrendCategory={setSelectedTrendCategory}/>} />
          
          <Route path="*" element={<NoPage></NoPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
