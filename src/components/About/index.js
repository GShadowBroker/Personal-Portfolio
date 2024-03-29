import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGit,
  FaYarn,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa"
import {
  SiApollographql,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import {
  AboutContainer,
  Title,
  Image,
  Name,
  Description,
  Stack,
  StackTitle,
  StackIcons,
  IconContainer,
  Icon,
  IconTitle,
} from "./styles"

const About = ( { aboutMe } ) => {
  const { theme } = useContext( themeContext )
  return (
    <AboutContainer id="about">
      <Title theme={theme} className="section__title">
        SOBRE MIM
      </Title>
      <Image theme={theme} />
      <Name theme={theme}>
        <div>Gledyson Ferreira dos Santos</div>
        <div>DESENVOLVEDOR JAVASCRIPT</div>
      </Name>
      <Description>{aboutMe}</Description>
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
              <SiTypescript />
            </Icon>
            <IconTitle>TypeScript</IconTitle>
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
              <SiMysql />
            </Icon>
            <IconTitle>MySQL</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <SiMongodb />
            </Icon>
            <IconTitle>MongoDB</IconTitle>
          </IconContainer>

          <IconContainer>
            <Icon>
              <FaDocker />
            </Icon>
            <IconTitle>Docker</IconTitle>
          </IconContainer>
        </StackIcons>
      </Stack>
    </AboutContainer>
  )
}

export default About
