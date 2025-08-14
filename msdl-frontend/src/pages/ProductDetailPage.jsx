import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Listbox } from '@headlessui/react';
import NewsFeed from '../components/NewsFeed';
import InstallationGuide from '../components/InstallationGuide';

// A simple chevron icon for the dropdown button
const ChevronUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
  </svg>
);

const ProductDetailPage = () => {
  const { productId } = useParams();
  const newsTopic = "windows"; 
  const rssFeedUrl = `https://tech-latest.com/tag/${newsTopic}/feed/`;

  // State for the download workflow
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingLinks, setIsFetchingLinks] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.gravesoft.dev/msdl/skuinfo?product_id=${productId}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        if (data.Skus && data.Skus.length > 0) {
          setLanguages(data.Skus);
          setSelectedLanguage(data.Skus[0]);
        } else {
          throw new Error("No languages found for this product.");
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLanguages();
  }, [productId]);

  const handleFetchDownloads = async () => {
    if (!selectedLanguage) return;
    setIsFetchingLinks(true);
    setError(null);
    setDownloadLinks([]);
    try {
      const response = await fetch(`https://api.gravesoft.dev/msdl/proxy?product_id=${productId}&sku_id=${selectedLanguage.Id}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      if (data.ProductDownloadOptions && data.ProductDownloadOptions.length > 0) {
        setDownloadLinks(data.ProductDownloadOptions);
      } else {
        throw new Error("No download links available for this selection.");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setIsFetchingLinks(false);
    }
  };
  
  return (
    <div>
      <Link to="/" className="text-accent hover:text-accent-hover mb-6 inline-block">&larr; Back to All Products</Link>
      
      <div className="text-left mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Product Details</h1>
        <p className="mt-2 text-slate-400">Downloads, guides, and news for Product ID: {productId}</p>
      </div>

      {/* Main two-column grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        
        {/* === MAIN CONTENT (Left Column) === */}
        <div className="lg:col-span-2">
          {/* --- Download Tool Section --- */}
          <div className="bg-primary-light p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Download Tool</h2>
            {isLoading ? (
              <p className="text-slate-400">Loading languages...</p>
            ) : error && languages.length === 0 ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <>
                <div className="max-w-sm">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Select Language</label>
                  <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-800 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <span className="block truncate">{selectedLanguage?.LocalizedLanguage}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronUpDownIcon /></span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                        {languages.map((lang) => (
                          <Listbox.Option key={lang.Id} value={lang} className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-accent text-white' : 'text-gray-300'}`}>
                            {lang.LocalizedLanguage}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
      
                <div className="mt-6">
                  <button onClick={handleFetchDownloads} disabled={!selectedLanguage || isFetchingLinks} className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent-hover disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors">
                    {isFetchingLinks ? 'Fetching...' : 'Get Download Links'}
                  </button>
                </div>
              </>
            )}

            {error && downloadLinks.length === 0 && <div className="mt-6 text-red-500">Error: {error}</div>}
      
            {downloadLinks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-xl font-semibold">Your Downloads</h3>
                <div className="mt-4 space-y-3">
                  {downloadLinks.map(link => (
                    <a key={link.Uri} href={link.Uri} target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                      {link.Uri.split('/').pop().split('?')[0]} ({link.Architecture})
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --- Installation Guide Section --- */}
          <InstallationGuide />
        </div>

        {/* === SIDEBAR (Right Column) === */}
        <div className="lg:col-span-1 mt-10 lg:mt-0">
          <NewsFeed feedUrl={rssFeedUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;