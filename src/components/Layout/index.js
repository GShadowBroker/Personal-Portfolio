import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import "../../stylesheets/global.css"
import { themeContext } from "../../utils/ThemeContext"
import { Helmet } from "react-helmet"
import profileImage from "../../assets/profile.jpg"
import favicon from "../../assets/favicon.png"
import LoadingScreen from "../utils/LoadingScreen"

const Global = styled.div`
  background-color: ${props => colors[props.theme].background};
  color: ${props => colors[props.theme].color};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  const { theme, loadingTheme } = useContext(themeContext)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.parentElement.style.opacity = 1
        }
      })
    }

    const createObserver = (options, callback) => {
      const observer = new IntersectionObserver(callback, options)
      const targets = document.querySelectorAll(".section__title")
      if (targets) {
        targets.forEach(observer.observe.bind(observer))
      }
    }

    createObserver(options, handleIntersect)
  }, [loadingTheme])

  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>Gledyson Ferreira - Desenvolvedor Web</title>
        <link rel="canonical" href="https://gledyson.netlify.app/" />
        <link rel="icon" href={favicon} />

        <meta name="title" content="Gledyson Ferreira - Desenvolvedor web" />
        <meta
          name="description"
          content="Olá! Eu sou um desenvolvedor full-stack JavaScript. Amo programar aplicativos web e mobile. Quer saber mais? Manda ai uma mensagem."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gledyson.netlify.app/" />
        <meta
          property="og:title"
          content="Gledyson Ferreira - Desenvolvedor web"
        />
        <meta
          property="og:description"
          content="Olá! Eu sou um desenvolvedor full-stack JavaScript. Amo programar aplicativos web e mobile. Quer saber mais? Manda ai uma mensagem."
        />
        <meta property="og:image" content={profileImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gledyson.netlify.app/" />
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
      {loadingTheme ? (
        <LoadingScreen />
      ) : (
        <Global theme={theme}>{children}</Global>
      )}
    </>
  )
}

export default Layout
