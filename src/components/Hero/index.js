import React, { useContext } from "react"
import styled from "styled-components"
import dimensions from "../../constants/dimensions"
import colors from "../../constants/colors"
import { themeContext } from "../../utils/ThemeContext"
import Button from "../utils/Button"
import Text from "../utils/Text"

const HeroContainer = styled.div`
  margin-top: 2rem;
  height: 80vh;
  display: flex;
  align-items: center;
`
const HeroLeftPane = styled.div`
  height: 100%;
  width: 50%;
`
const HeroImageContainer = styled.div`
  height: 40vw;
  max-height: 40vw;
  width: 40vw;

  background-color: ${props => colors[props.theme].imageContainer};
  border-radius: 50%;
`

const Image = styled.div`
  min-height: 50vh;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  background-image: url(${require("../../assets/undraw_feeling_proud_qne1.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const Headline = styled.div`
  font-size: 4em;
  line-height: 1.2;
`
const SubHeadline = styled.div`
  color: ${colors.secondary};
  font-size: 2.5em;
  font-weight: 600;
`

const Header = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

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
