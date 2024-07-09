import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Cart from './components/Cart';
import Payment from './components/Payment';
import Footer from './components/Footer';
import Home from './components/Home';



const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
      <Footer />
      </Router>
  );
};

export default App; 