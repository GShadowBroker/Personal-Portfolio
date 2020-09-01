import React, { useState } from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Foot from "../components/Foot"
import { ThemeContextProvider } from "../utils/ThemeContext"
import styled from "styled-components"
import Drawer from "../components/Nav/Drawer"

const Container = styled.div`
  flex: 1;
  padding: 0 0.6rem;
  max-width: 85vw;

  opacity: 0;
  @keyframes contentFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation-name: contentFadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

const Home = () => {
  const [drawerActive, setDrawerActive] = useState(false)
  const toggleDrawer = () => {
    if (drawerActive) {
      setDrawerActive(false)
    } else {
      setDrawerActive(true)
    }
  }

  return (
    <ThemeContextProvider>
      <Layout>
        <Drawer toggleDrawer={toggleDrawer} active={drawerActive} />
        <Container>
          <Nav toggleDrawer={toggleDrawer} />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Container>
        <Foot />
      </Layout>
    </ThemeContextProvider>
  )
}

export default Home
