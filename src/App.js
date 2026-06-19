import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Footer from './components/Footer';
import ProductsPage from "./features/products/pages/ProductsPage";
import ProductDetailsPage from "./features/products/pages/ProductDetailsPage";
import CartPage from "./features/cart/pages/CartPage";
import NotFound from "./components/NotFound";
import ShoppingCart from "./components/ShoppingCart";
const App = () => {
  return (

    <ShoppingCartProvider>
  <Navbar />

  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<ProductsPage />} />
      <Route path="/store/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Container>

  <Footer />
  <ShoppingCart />
</ShoppingCartProvider>

  );
}

export default App;
