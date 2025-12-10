export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mamaholding.net/#organization",
    "name": "MAMAHOLDING S.A",
    "legalName": "MAMAHOLDING S.A",
    "url": "https://mamaholding.net",
    "logo": "https://mamaholding.net/logo.png",
    "description": "Leader du commerce en gros au Cameroun depuis 2004. MAMAHOLDING S.A accompagne les entreprises avec des solutions complètes et innovantes à travers nos entités CAC, TRINCO et ECOFOOD.",
    "foundingDate": "2004",
    "founders": [
      {
        "@type": "Person",
        "name": "Henri MAMA"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yaoundé",
      "addressLocality": "Yaoundé",
      "addressRegion": "Centre",
      "addressCountry": "CM"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+237-690-20-19-78",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"],
        "areaServed": "CM"
      },
      {
        "@type": "ContactPoint",
        "email": "drh@mamaholding.net",
        "contactType": "sales",
        "availableLanguage": ["French", "English"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mamaholding",
      "https://www.linkedin.com/company/mamaholding",
      "https://twitter.com/mamaholding",
      "https://www.instagram.com/mamaholding"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Cameroon"
    },
    "knowsAbout": [
      "Commerce en gros",
      "Distribution",
      "Produits alimentaires",
      "Équipements industriels",
      "Grande consommation"
    ],
    "slogan": "Excellence depuis 2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "100+"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "MAMAHOLDING S.A"
    },
    "subOrganization": [
      {
        "@type": "Organization",
        "@id": "https://mamaholding.net/entites/cac#organization",
        "name": "CAC",
        "description": "Commerce et distribution de produits de grande consommation"
      },
      {
        "@type": "Organization",
        "@id": "https://mamaholding.net/entites/trinco#organization",
        "name": "TRINCO",
        "description": "Équipements industriels et solutions techniques"
      },
      {
        "@type": "Organization",
        "@id": "https://mamaholding.net/entites/ecofood#organization",
        "name": "ECOFOOD",
        "description": "Produits alimentaires de qualité"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mamaholding.net/#website",
    "url": "https://mamaholding.net",
    "name": "MAMAHOLDING S.A",
    "description": "Site officiel de MAMAHOLDING S.A",
    "publisher": {
      "@id": "https://mamaholding.net/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mamaholding.net/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "fr-FR"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://mamaholding.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nos Entités",
        "item": "https://mamaholding.net/entites"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://mamaholding.net/contact"
      }
    ]
  }

  return (
    <>
      {/* Organization Schema */}
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* Website Schema */}
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
