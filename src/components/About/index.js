import React, { useContext } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import { themeContext } from "../../utils/ThemeContext"
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGit,
  FaYarn,
  FaNodeJs,
} from "react-icons/fa"
import {
  SiApollographql,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"

const AboutContainer = styled.section`
  min-height: 100vh;
  max-width: 767px;
  width: 100%;
  margin: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
`
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin: 2rem auto;
  padding-bottom: 0.5rem;

  position: relative;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: ${props => colors[props.theme].color};
    height: 3px;
    width: 50%;
  }
`

const Image = styled.div`
  border-radius: 50%;
  background-color: ${props => colors[props.theme].shadow};

  height: 167px;
  width: 167px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: "";

    z-index: 1;
    height: 167px;
    width: 167px;
    background-image: url(${require("../../assets/profile.jpg")});
    background-size: contain;
    background-position: center;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, -10px);
    transition: all 0.1s linear;
  }

  &:hover::after {
    transform: translate(5px, -5px);
  }
`

const Name = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;

  div:first-of-type {
    color: ${colors.secondary};
  }
  div {
    color: ${props => colors[props.theme].textGray};
  }
`

const Description = styled.div`
  margin-top: 2.5rem;
  text-align: justify;
  line-height: 1.6;
`

const Stack = styled.div`
  margin: 10rem 0 1rem 0;
`

const StackTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;

  & > span {
    color: ${colors.secondary};
  }
`

const StackIcons = styled.div`
  margin: 1rem 0;

  display: flex;
  justify-content: center;

  & > div {
    margin: 0 0.5rem;
  }
  & > div:first-of-type,
  & > div:last-of-type {
    margin: 0;
  }
`

const IconContainer = styled.div`
  min-width: 100px;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`
const IconTitle = styled.div`
  text-align: center;
`

const About = () => {
  const { theme } = useContext(themeContext)
  return (
    <AboutContainer id="about">
      <Title theme={theme}>SOBRE MIM</Title>
      <Image theme={theme} />
      <Name theme={theme}>
        <div>Gledyson Ferreira dos Santos</div>
        <div>DESENVOLVEDOR FULL-STACK JAVASCRIPT</div>
      </Name>
      <Description>
        Moro em Dourados, MS. Adoro aprender e construir coisas novas. Busco
        sempre escrever código limpo, legível e escalável. Além da programação,
        amo cozinhar, jogar video-games e praticar xadrez (1. d4!).
      </Description>
      <Stack>
        <StackTitle>
          Algumas <span>tecnologias</span> com as quais me sinto confortável:
        </StackTitle>
        <StackIcons>
          <IconContainer>
            <Icon>
              <FaHtml5 />
            </Icon>
            <IconTitle>HTML5</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaCss3Alt />
            </Icon>
            <IconTitle>CSS3</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaSass />
            </Icon>
            <IconTitle>SASS</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <IoLogoJavascript />
            </Icon>
            <IconTitle>JavaScript</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaReact />
            </Icon>
            <IconTitle>ReactJS</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaGit />
            </Icon>
            <IconTitle>GIT</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaYarn />
            </Icon>
            <IconTitle>Yarn</IconTitle>
          </IconContainer>
        </StackIcons>

        <StackIcons>
          <IconContainer>
            <Icon>
              <FaNodeJs />
            </Icon>
            <IconTitle>NodeJS</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <SiApollographql />
            </Icon>
            <IconTitle>Apollo</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <SiGraphql />
            </Icon>
            <IconTitle>GraphQL</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <SiPostgresql />
            </Icon>
            <IconTitle>PostgreSQL</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <SiMongodb />
            </Icon>
            <IconTitle>MongoDB</IconTitle>
          </IconContainer>
        </StackIcons>
      </Stack>
    </AboutContainer>
  )
}

export default About
