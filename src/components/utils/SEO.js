import React from "react"
import { Helmet } from "react-helmet"
import SchemaOrg from "./schema-org"
import profileImage from "../../assets/profile.jpg"
import favicon from "../../assets/favicon.png"
import isBrowser from "../../utils/isBrowser"

const SEO = ({ blog, html, isBlog }) => {
  if (!isBlog) {
    return (
      <Helmet>
        <html lang="pt-br" />
        <title>Gledyson Ferreira - Desenvolvedor Web</title>
        <link rel="canonical" href={isBrowser() && window?.location.origin} />
        <link rel="icon" href={favicon} />

        <meta name="title" content="Gledyson Ferreira - Desenvolvedor web" />
        <meta
          name="description"
          content="Olá! Eu sou um desenvolvedor full-stack JavaScript. Amo programar aplicativos web e mobile. Quer saber mais? Manda ai uma mensagem."
        />

        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={isBrowser() && window?.location.origin}
        />
        <meta
          property="og:title"
          content="Gledyson Ferreira - Desenvolvedor web"
        />
        <meta
          property="og:description"
          content="Olá! Eu sou um desenvolvedor full-stack JavaScript. Amo programar aplicativos web e mobile. Quer saber mais? Manda ai uma mensagem."
        />
        <meta property="og:image" content={profileImage} />

        {/* Twitter Card tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={isBrowser() && window?.location.origin}
        />
        <meta
          property="twitter:title"
          content="Gledyson Ferreira - Desenvolvedor web"
        />
        <meta
          property="twitter:description"
          content="Olá! Eu sou um desenvolvedor full-stack JavaScript. Amo programar aplicativos web e mobile. Quer saber mais? Manda ai uma mensagem."
        />
        <meta property="twitter:image" content={profileImage} />
      </Helmet>
    )
  }
  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>{blog.title}</title>
        <link rel="canonical" href={isBrowser() && window?.location.origin} />
        <link rel="icon" href={favicon} />

        <meta name="title" content={blog.title} />
        <meta name="description" content={blog.description} />
        <meta
          name="image"
          content={`${isBrowser() && window?.location.origin}${blog.thumbnail}`}
        />

        {/* OpenGraph tags */}
        <meta
          property="og:url"
          content={`${isBrowser() && window?.location.origin}${blog.path}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:image"
          content={`${isBrowser() && window?.location.origin}${blog.thumbnail}`}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta
          name="twitter:image"
          content={`${isBrowser() && window?.location.origin}${blog.thumbnail}`}
        />
      </Helmet>
      <SchemaOrg blog={blog} html={html} isBlog={true} />
    </>
  )
}

export default SEO
