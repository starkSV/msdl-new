import React from 'react';

const AboutPage = () => {
  return (
    // This container gives the page a "card" look
    <div className="max-w-4xl mx-auto bg-gray-800 border border-slate-700 rounded-xl p-6 md:p-8 ">
      <div className="prose prose-invert max-w-none text-slate-300">
        <h1 className="text-4xl font-bold mb-4">About This Project</h1>

        <h2>Our Mission</h2>
        <p>
          The goal of the Windows ISO Downloader is to provide a clean, modern, and user-friendly web platform that allows users to easily select and download a wide variety of official Microsoft Windows ISO files. We aim to offer a superior user experience to existing tools, with a fast interface and a clear, straightforward process.
        </p>
        
        <h2>Technology</h2>
        <p>
          This website was built using a modern technology stack to ensure a fast and reliable experience. The frontend is built with <strong>React</strong> and <strong>Vite</strong>, and styled with <strong>Tailwind CSS</strong> for a responsive and clean design.
        </p>

        <h2>Data Source</h2>
        <p>
          This tool acts as a user-friendly interface using the publicly available <strong>Massgrave API</strong> for all download requests. All download links are fetched in real-time and are generated directly by Microsoft's servers. We do not host any files. Full credit for the backend API goes to the Massgrave project.
        </p>

        <h2>A TechLatest Product</h2>
        <p>
          This project is proudly developed and maintained by the team at <a href="https://tech-latest.com" target="_blank" rel="noopener noreferrer">TechLatest</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;