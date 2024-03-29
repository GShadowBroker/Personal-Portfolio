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
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const Hero = ( { heroDescription } ) => {
  const { theme } = useContext( themeContext )

  return (
    <HeroContainer>
      <HeroLeftPane>
        <Header>
          <Headline>Olá!</Headline>
          <Headline style={{ marginBottom: "1rem" }}>
            Sou <strong>Gledyson,</strong>
          </Headline>
          <SubHeadline style={{ marginBottom: "2rem" }}>
            desenvolvedor javascript.
          </SubHeadline>
          <Text marginBottom={3}>{heroDescription}</Text>
          <Button
            text="CONTATO"
            handleClick={() => {
              document.querySelector( "#contact" ).scrollIntoView()
              trackCustomEvent( {
                category: "Custom Button",
                action: "Click",
                label: "Botão contato",
              } )
            }}
          />
        </Header>
      </HeroLeftPane>
      <HeroImageContainer theme={theme}>
        <Image />
      </HeroImageContainer>
    </HeroContainer>
  )
}

export default Hero
