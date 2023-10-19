import './App.css';
import CardCarousel from './Components/CardCarousel/CardCarousel';
import Banner from './Components/Banner/Banner';
import TrendColumnChart from './Components/TrendColumnChart/TrendColumnChart';
import Home from './Pages/Home/Home';
import TrendDetail from './Pages/TrendDetail/TrendDetail';
import { BrowserRouter as Router, Switch, Route, Redirect, Routes,} from "react-router-dom";
import NoPage from './Pages/NoPage/NoPage';

function App() {
  return (
    <div>
      <h1 className='title'>Vogue Verse</h1>
      <Router> 
        <Routes> 
          <Route index element={<Home/>} /> 
          <Route path="/trend-detail" element={<TrendDetail></TrendDetail>} /> 
          <Route path="*" element= {<NoPage></NoPage>}/> 
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
