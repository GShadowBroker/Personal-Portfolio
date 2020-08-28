import React, { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import urls from "../../constants/urls"
import dimensions from "../../constants/dimensions"
import { themeContext } from "../../utils/ThemeContext"
import colors from "../../constants/colors"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${dimensions && dimensions.navbarHeight}px;

  font-weight: 500;

  ul {
    height: fit-content;
    margin: 0;
    padding: 0;
  }
  li:first-of-type {
    margin-left: 0;
  }
  li:last-of-type {
    margin-right: 0;
  }
  li {
    display: inline;
    margin: 1rem;
  }
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

const ThemeSwitch = styled.button`
  transition: all 0.3s linear;

  background: none;
  border: none;
  margin-right: 1rem;
  padding: 0;

  min-height: 100%;
  width: 50px;

  &:focus {
    outline: none;
  }
`
const SwitchButton = styled.div`
  transition: all 0.3s linear;

  border: 2px solid ${props => colors[props.theme].color};
  cursor: pointer;
  margin: 0;
  height: 100%;
  width: 100%;
  border-radius: 60px;

  position: relative;
`
const Switch = styled.div`
  transition: all 0.2s linear;

  position: absolute;
  top: 0;

  background: ${props => colors[props.theme].color};
  margin: 0;
  padding: 0;
  height: 100%;
  width: 50%;
  border-radius: 50%;
`

const Nav = () => {
  const themeButton = useRef(null)
  const { theme, toggleTheme } = useContext(themeContext)

  useEffect(() => {
    if (theme === "dark") {
      themeButton.current.style.left = "-2%"
    } else {
      themeButton.current.style.left = "52%"
    }
  }, [theme])

  const handleThemeButton = () => {
    if (theme === "dark") {
      themeButton.current.style.left = "52%"
      toggleTheme()
    } else {
      themeButton.current.style.left = "-2%"
      toggleTheme()
    }
  }

  return (
    <Navbar>
      <div>{"<Gledyson />"}</div>
      <ul>
        <li>
          <a href="#about">sobre mim</a>
        </li>
        <li>
          <a href="#projects">projetos</a>
        </li>
        <li>
          <a href="#contact">contato</a>
        </li>
      </ul>
      <Social>
        <ThemeSwitch onClick={handleThemeButton}>
          <SwitchButton theme={theme}>
            <Switch ref={themeButton} theme={theme} />
          </SwitchButton>
        </ThemeSwitch>

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
        <Icon hover={"#d44638"} title="E-mail">
          <a href={urls.email} rel="noreferrer">
            <AiFillMail />
          </a>
        </Icon>
      </Social>
    </Navbar>
  )
}

export default Nav
