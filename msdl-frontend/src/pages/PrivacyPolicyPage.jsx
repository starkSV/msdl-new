import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    // This container gives the page a "card" look
    <div className="max-w-4xl mx-auto bg-gray-800 border border-slate-700 shadow-lg rounded-xl p-4 md:p-8">
      <div className="prose prose-invert max-w-none text-slate-300">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        
        <p>
          <em>Last updated: August 20, 2025</em>
        </p>
        <p>
          Your privacy is important to us. This Privacy Policy explains how the Windows ISO Downloader website ("we", "us", or "our") handles information.
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          <strong>We do not collect, store, or share any personally identifiable information from our users.</strong> This website is a static tool designed to be used anonymously.
        </p>
        <ul>
          <li>We do not require you to create an account or provide any personal details like your name or email address.</li>
          <li>We do not use analytics or tracking cookies to monitor your behavior.</li>
        </ul>
        
        <h2>How Download Links Work</h2>
        <p>
          The download links provided on this site are generated in real-time by Microsoft's official servers. When a link is generated, Microsoft's servers require your IP address to validate the request and provide a temporary, secure download link that is valid for 24 hours. Our website does not log, store, or process your IP address.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our service provides links to files hosted on Microsoft's servers and retrieves data from a third-party API. We are not responsible for the privacy practices of these other sites. We encourage you to read their privacy policies.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please feel free to contact us through our main site at <a href="https://tech-latest.com" target="_blank" rel="noopener noreferrer">TechLatest.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;