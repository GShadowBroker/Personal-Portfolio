import React, { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import urls from "../../constants/urls"
import dimensions from "../../constants/dimensions"
import { themeContext } from "../../utils/ThemeContext"
import colors from "../../constants/colors"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "gatsby"

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

    @media only screen and (max-width: 815px) {
      display: none;
    }
  }
  li:not(first-of-type):not(last-of-type) {
    margin-left: 0;
  }
  li {
    display: inline;
    margin: 1rem;
  }
`

const Logo = styled.div``

const Menu = styled.ul`
  &:hover > * {
    transition: opacity 0.2s linear;
    opacity: 0.4;
  }
  &:hover > *:hover {
    opacity: 1;
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

  @media only screen and (max-width: 515px) {
    display: none;
  }
`

const Icon = styled.div`
  & > a {
    display: flex;
  }

  font-size: 1.5em;
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

const Hamburguer = styled.div`
  font-size: 2em;
  display: none;

  @media only screen and (max-width: 815px) {
    display: flex;
  }
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
      <Logo>{"<Gledyson />"}</Logo>
      <Menu>
        <li>
          <Link to="/#about">sobre mim</Link>
        </li>
        <li>
          <Link to="/#projects">projetos</Link>
        </li>
        <li>
          <Link to="/#contact">contato</Link>
        </li>
      </Menu>
      <Social>
        <ThemeSwitch aria-label="theme" onClick={handleThemeButton}>
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
      <Hamburguer>
        <GiHamburgerMenu />
      </Hamburguer>
    </Navbar>
  )
}

export default Nav
