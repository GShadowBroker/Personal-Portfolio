import React, { createContext, useState } from "react"

export const themeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const themeValues = {
    theme,
    toggleTheme,
  }
  return (
    <themeContext.Provider value={themeValues}>
      {children}
    </themeContext.Provider>
  )
}
