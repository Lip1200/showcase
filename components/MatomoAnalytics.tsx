'use client';

import Script from 'next/script';

export default function MatomoAnalytics() {
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
  const containerId = process.env.NEXT_PUBLIC_MATOMO_CONTAINER_ID;

  // Ne rien rendre si les variables ne sont pas configurées
  if (!matomoUrl || !containerId) {
    return null;
  }

  // Normaliser l'URL (retirer le slash final si présent)
  const baseUrl = matomoUrl.replace(/\/+$/, '');

  return (
    <Script
      id="matomo-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          (function() {
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='${baseUrl}/js/${containerId}.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  );
}
