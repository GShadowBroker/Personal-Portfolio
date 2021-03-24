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
      <button
        onClick={toggleDrawer}
        tabindex="0"
        role="link"
        aria-label="close drawer menu"
        className="closebtn"
      >
        &times;
      </button>
      <button tabindex="0" role="link" onClick={() => handleClick("about")}>
        Sobre Mim
      </button>
      <button tabindex="0" role="link" onClick={() => handleClick("projects")}>
        Projetos
      </button>
      <button tabindex="0" role="link" onClick={() => handleClick("contact")}>
        Contato
      </button>
    </DrawerContainer>
  )
}

Drawer.defaultProps = {
  active: false,
}

export default Drawer
