import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product/');
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col">
      <Header />
      <main className={`container mx-auto p-4 md:p-6 ${isProductPage ? 'flex-grow' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;