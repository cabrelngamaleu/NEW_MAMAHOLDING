'use client'

import Script from 'next/script'
import { ANALYTICS_CONFIG } from '@/lib/analytics.config'

export default function GoogleAnalytics() {
  const measurementId = ANALYTICS_CONFIG.GA_MEASUREMENT_ID

  // Ne pas charger si l'ID n'est pas configuré
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
