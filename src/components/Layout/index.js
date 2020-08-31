import React, { useContext } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import "../../stylesheets/global.css"
import { themeContext } from "../../utils/ThemeContext"
import { Helmet } from "react-helmet"
import profileImage from "../../assets/profile.jpg"

const Global = styled.div`
  background-color: ${props => colors[props.theme].background};
  color: ${props => colors[props.theme].color};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  const { theme } = useContext(themeContext)

  return (
    <Global theme={theme}>
      <Helmet>
        <html lang="pt-br" />
        <title>Gledyson Ferreira - Desenvolvedor Web</title>
        <link rel="canonical" href="https://gledyson.netlify.app/" />

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
      {children}
    </Global>
  )
}

export default Layout
