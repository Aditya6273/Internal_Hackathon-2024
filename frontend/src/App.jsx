
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import Login from './User/pages/Login/Login';
import About from './User/pages/About/About';
import Cart from './User/pages/Cart/Cart';
import Order from './User/pages/Cart/Order';
import OrderStatus from './User/pages/Cart/OrderStatus';
import Help from './User/pages/Help/Help';


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} /> 
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={< Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="order" element={<Order />} />
          <Route path="help" element={<Help />} />
          <Route path="orderStatus" element={<OrderStatus />} />
        </Route>

      </Routes>

    </Router>
  );
};

export default App;