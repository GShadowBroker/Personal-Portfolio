import React, { useRef, useContext, useEffect } from "react"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import urls from "../../constants/urls"
import { themeContext } from "../../utils/ThemeContext"
import colors from "../../constants/colors"
import { GiHamburgerMenu } from "react-icons/gi"
import { WiNightClear, WiDaySunny } from "react-icons/wi"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import {
  Navbar,
  NavContainer,
  Menu,
  Social,
  Icon,
  ThemeSwitch,
  SwitchButton,
  Switch,
  Hamburguer,
  Logo,
  LogoImage,
  LogoText,
} from "./styles"

const Nav = ({ toggleDrawer }) => {
  const themeButton = useRef(null)
  const { theme, toggleTheme } = useContext(themeContext)

  useEffect(() => {
    if (theme === "dark") {
      themeButton.current.style.left = "-3%"
    } else {
      themeButton.current.style.left = "53%"
    }
  }, [theme])

  useEffect(() => {
    const event = () => {
      if (window.pageYOffset === 0) {
        document.querySelector(".navbar").style.boxShadow = ``
        return
      }
      document.querySelector(
        ".navbar"
      ).style.boxShadow = `2px 2px 6px ${colors[theme].navShadow}`
    }

    event() // If theme changes, the component rerenders and has to change box-shadow color

    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => event())
    }
    return window.removeEventListener("scroll", () => event())
  }, [theme])

  const handleThemeButton = () => {
    if (theme === "dark") {
      themeButton.current.style.left = "53%"
      toggleTheme()
    } else {
      themeButton.current.style.left = "-3%"
      toggleTheme()
    }
  }

  return (
    <Navbar theme={theme} className="navbar">
      <NavContainer>
        <Logo>
          <LogoImage
            src={require("../../assets/logo.png")}
            alt="Gledyson Ferreira, Desenvolvedor Web"
          />
          <LogoText theme={theme}>
            <span>Gledyson</span>
            <span>Ferreira</span>
          </LogoText>
        </Logo>
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
              <Switch ref={themeButton} theme={theme}>
                {theme === "dark" ? <WiNightClear /> : <WiDaySunny />}
              </Switch>
            </SwitchButton>
          </ThemeSwitch>

          <Icon hover={"#2867B2"}>
            <OutboundLink
              href={urls.github}
              target="_blank"
              title="GitHub"
              rel="noreferrer"
            >
              <AiFillGithub />
            </OutboundLink>
          </Icon>
          <Icon hover={"#2867B2"}>
            <OutboundLink
              href={urls.linkedin}
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </OutboundLink>
          </Icon>
          <Icon hover={"#d44638"} title="E-mail">
            <OutboundLink href={urls.email} rel="noreferrer">
              <AiFillMail />
            </OutboundLink>
          </Icon>
        </Social>
        <Hamburguer onClick={toggleDrawer}>
          <GiHamburgerMenu />
        </Hamburguer>
      </NavContainer>
    </Navbar>
  )
}

export default Nav
