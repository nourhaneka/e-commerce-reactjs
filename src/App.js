import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Store from './components/Store';
import About from './components/About';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Footer from './components/Footer';
import Store from "./components/Store";
import ProductsPage from "./features/products/pages/ProductsPage";
const App = () => {
  return (

    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        <Route
  path="/store"
  element={<ProductsPage />}
/>
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>

  );
}

export default App;
