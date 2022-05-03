import './App.css';
import React from 'react';
import ProductsPage from './pages/Products/ProductsPage';
import Navbar from './components/Navbar/Navbar';
import {FilterProvider} from './contexts/filterContext';
import { ProductProvider } from './contexts/productContext';
import { CartProvider } from './contexts/cartContext';
import DetailsPage from './pages/Details/DetailsPage';
import { WishListProvider } from './contexts/wishListContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Modal from 'react-modal';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';

function App() {

  Modal.setAppElement('#root')

  const [mobNav, setMobNav] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth <= 800)
      setMobNav(true)
    else
      setMobNav(false)
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 800) {
          setMobNav(true)
      } else {
        setMobNav(false)
      }
     }); 
  }, [])

  return (
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <WishListProvider>
            <div className="App">
              <Router>
              {
                mobNav ? (<MobileNavbar />) : (<Navbar />) 
              }
                <Routes>
                  <Route path="/" element={<ProductsPage />} />
                  <Route path="/details" element={<DetailsPage />} />
              </Routes> 
              </Router>
            </div>
        </WishListProvider>
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  );
}

export default App;
