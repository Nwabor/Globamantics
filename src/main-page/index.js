import { useEffect, useState, useMemo } from 'react';
import './main-page.css';
import Header from './Header';
import FeaturedHouse from './FeaturedHouse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [allHouses, setAllHouses] = useState([]);
  // load data
  useEffect(() => {
    const fetchHouses = async () => {
      const rep = await fetch('/houses.json');
      const houses = await rep.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  let featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      console.log(randomIndex);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className='container'>
        <Header title='Providing houses all over the world' />

        <Routes>
          <Route path='/' element={<FeaturedHouse house={featuredHouse} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
