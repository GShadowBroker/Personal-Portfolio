import React, { useContext } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import { themeContext } from "../../utils/ThemeContext"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import urls from "../../constants/urls"

const FooterContainer = styled.footer`
  background: ${props => colors[props.theme].footer};
  margin-top: 10rem;
  height: 160px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    margin: 1rem 0.8rem;
  }
`
const Text = styled.div`
  font-size: 0.9em;
`

const Social = styled.div`
  display: flex;
  & > div:last-of-type {
    margin-right: 0;
  }
  & > div {
    margin: 0 0.5rem;
  }
`
const Icon = styled.div`
  & > a {
    display: flex;
  }

  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: ${props => (props.hover ? props.hover : "inherit")};
  }
`

const Foot = () => {
  const { theme } = useContext(themeContext)
  return (
    <FooterContainer theme={theme}>
      <Text>&copy; {new Date().getFullYear()} - Glédyson Ferreira</Text>
      <Text>
        Built and designed with lots of{" "}
        <span role="img" aria-label="coffee emoji">
          &#x2615;
        </span>{" "}
        and{" "}
        <span role="img" aria-label="heart emoji">
          &#x1F49A;
        </span>
        .
      </Text>
      <Social>
        <Icon hover={"#2867B2"}>
          <a href={urls.github} target="_blank" title="GitHub" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Icon>
        <Icon hover={"#2867B2"}>
          <a
            href={urls.linkedin}
            target="_blank"
            title="LinkedIn"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </Icon>
        <Icon hover={"#d44638"}>
          <a href={urls.email} title="E-mail">
            <AiFillMail />
          </a>
        </Icon>
      </Social>
    </FooterContainer>
  )
}

export default Foot
