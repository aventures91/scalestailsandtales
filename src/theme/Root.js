import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // Add Google Tag Manager Script to <head>
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-M9SWGE4XZ9';
    document.head.appendChild(gtmScript);

    // Add the GTAG initialization script
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M9SWGE4XZ9');
    `;
    document.head.appendChild(gtagScript);

    // Add AdSense Script to <head>
    const adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2080266861947774';
    adsenseScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsenseScript);

    // Add the AdSense meta tag to <head>
    const metaTag = document.createElement('meta');
    metaTag.name = 'google-adsense-account';
    metaTag.content = 'ca-pub-2080266861947774';
    document.head.appendChild(metaTag);

    // Add fallback <noscript> tag to <body>
    const noScript = document.createElement('noscript');
    noScript.innerHTML = `
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=G-M9SWGE4XZ9"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    `;
    document.body.appendChild(noScript);
  }, []);

  // Render children
  return <>{children}</>;
}
