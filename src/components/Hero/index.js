import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import Button from "../utils/Button"
import Text from "../utils/Text"
import {
  HeroContainer,
  HeroLeftPane,
  HeroImageContainer,
  Image,
  Headline,
  SubHeadline,
  Header,
} from "./styles"

const Hero = () => {
  const { theme } = useContext(themeContext)

  return (
    <HeroContainer>
      <HeroLeftPane>
        <Header>
          <Headline>Olá!</Headline>
          <Headline style={{ marginBottom: "1rem" }}>
            Sou <strong>Gledyson,</strong>
          </Headline>
          <SubHeadline style={{ marginBottom: "2rem" }}>
            desenvolvedor web.
          </SubHeadline>
          <Text marginBottom={3}>
            Eu amo construir aplicativos web e mobile. Atualmente sou
            desenvolvedor freelance, mas estou aberto a ofertas de emprego.
          </Text>
          <Button text="ME CONTRATE" href="#contact" />
        </Header>
      </HeroLeftPane>
      <HeroImageContainer theme={theme}>
        <Image />
      </HeroImageContainer>
    </HeroContainer>
  )
}

export default Hero
