import {Route, Routes} from 'react-router';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'

function App() {
  const [cart,setCart] = useState([]);
    const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
useEffect(()=>{
  loadCart();
},[]);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />}/>
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />}/>
      <Route path="orders" element={<OrdersPage cart={cart} />}/>
      <Route path="tracking" element={<TrackingPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
