import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Foot from "../components/Foot"

import { ThemeContextProvider } from "../utils/ThemeContext"

import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  padding: 0 0.6rem;
  max-width: 85vw;
`

const Home = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Container>
          <Nav />
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
