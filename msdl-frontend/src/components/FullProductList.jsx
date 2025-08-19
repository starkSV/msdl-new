import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const quickSearches = [
  { label: 'Windows 8.1', query: 'Windows 8.1' },
  { label: 'Latest Windows 10', query: '22H2' },
  { label: 'Latest Windows 11', query: '24H2' },
];

const FullProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // useEffect hook remains the same...
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/products.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const productArray = Object.entries(data).map(([id, name]) => ({ id, name }));
        setProducts(productArray);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto bg-primary-light border border-slate-700 rounded-xl p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Select product</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search product"
        className="w-full mb-4 p-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
        {quickSearches.map((search) => (
          <button
            key={search.label}
            onClick={() => setSearchQuery(search.query)}
            className="px-3 py-1 bg-slate-700 text-xs font-medium rounded-md hover:bg-accent transition-colors"
          >
            {search.label}
          </button>
        ))}
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="p-2 font-semibold text-slate-400 text-sm">Product</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr
              key={product.id}
              onClick={() => handleRowClick(product.id)}
              className="border-b border-slate-800 hover:bg-slate-700/50 cursor-pointer"
            >
              <td className="p-1.5 text-white hover:text-blue-400">{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullProductList;