/*
  This file defines the /tos page for our app.
  It contains a basic terms of service statement.
*/

import React from 'react';

const TermsOfService = () => {
  return (
    <div style={{ margin: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Terms of Service</h1>
      <p>
        Welcome to our website. By accessing this site, you agree to be bound by these Terms of Service.
      </p>
      <p>
        If you do not agree with any of these terms, please do not use our website.
      </p>
      <p>
        We reserve the right to modify these terms at any time without prior notice.
      </p>
    </div>
  );
};

export default TermsOfService;
