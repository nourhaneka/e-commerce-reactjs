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
const App = () => {
  return (

    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route
  path="/store"
  element={<ProductsPage />}
/>
<Route
  path="/store/:id"
  element={<ProductDetailsPage />}/>
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>

  );
}

export default App;
