import React from "react"
import { Helmet } from "react-helmet"
import truncateString from "../../utils/truncateString"
import logo from "../../assets/logo.png"
import isBrowser from "../../utils/isBrowser"

const SchemaOrg = ({ blog, html }) => {
  if (!blog) return null
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    image: `${isBrowser() && window?.location.origin}${blog.thumbnail}`,
    url: `${isBrowser() && window?.location.origin}${blog.path}`,
    headline: blog.title,
    alternativeHeadline: truncateString(blog.description, 50),
    dateCreated: blog.date,
    datePublished: blog.date,
    dateModified: blog.date,
    description: blog.description,
    inLanguage: "pt-BR",
    isFamilyFriendly: "true",
    copyrightYear: new Date(blog.date).getFullYear(),
    copyrightHolder: "",
    contentLocation: {
      "@type": "Place",
      name: "Dourados, MS",
    },
    accountablePerson: {
      "@type": "Person",
      name: "Gledyson Ferreira",
      url: isBrowser() && window?.location.origin,
    },
    author: {
      "@type": "Person",
      name: "Gledyson Ferreira",
      url: isBrowser() && window?.location.origin,
    },
    creator: {
      "@type": "Person",
      name: "Gledyson Ferreira",
      url: isBrowser() && window?.location.origin,
    },
    publisher: {
      "@type": "Organization",
      name: "Gledyson Ferreira",
      url: isBrowser() && window?.location.origin,
      logo: {
        "@type": "ImageObject",
        url: `${isBrowser() && window?.location.origin}${logo}`,
      },
    },
    mainEntityOfPage: "True",
    keywords: blog.tag,
    genre: ["SEO", "JSON-LD"],
    articleSection: "Uncategorized posts",
    articleBody: html,
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default SchemaOrg
