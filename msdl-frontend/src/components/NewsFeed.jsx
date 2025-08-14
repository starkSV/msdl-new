import React, { useState, useEffect } from 'react';

const NewsFeed = ({ feedUrl }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!feedUrl) return;

    const fetchFeed = async () => {
      setIsLoading(true);
      // Use the rss2json API to convert the RSS feed to JSON
      const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
      
      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Failed to fetch feed.');
        const data = await response.json();

        if (data.status === 'ok') {
          // We'll display the latest 5 articles
          setItems(data.items.slice(0, 5));
        } else {
          throw new Error('Failed to parse feed.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  if (isLoading) return <p className="text-slate-400">Loading news...</p>;
  if (error) return <p className="text-red-500">Could not load news feed.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest News & Guides</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <a
            key={item.guid}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-primary-light rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-xs text-slate-400 mt-1">
              {new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;