import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import { DrawerContainer } from "./styles"

const Drawer = ({ toggleDrawer, active }) => {
  const { theme } = useContext(themeContext)

  const handleClick = id => {
    if (!id) return
    document.querySelector(`#${id}`).scrollIntoView()
    toggleDrawer()
  }

  return (
    <DrawerContainer active={active} theme={theme}>
      <a
        href="javascript:void(0)"
        onClick={toggleDrawer}
        role="button"
        aria-label="close drawer menu"
        className="closebtn"
      >
        &times;
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("about")}>
        Sobre Mim
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("projects")}>
        Projetos
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("contact")}>
        Contato
      </a>
    </DrawerContainer>
  )
}

Drawer.defaultProps = {
  active: false,
}

export default Drawer
