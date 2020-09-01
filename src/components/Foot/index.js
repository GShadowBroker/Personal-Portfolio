import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import urls from "../../constants/urls"
import { FooterContainer, Text, Social, Icon } from "./styles"

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
