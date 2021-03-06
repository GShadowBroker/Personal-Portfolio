import React, { useEffect, createContext, useState } from "react"

export const themeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      localStorage.setItem("theme", "dark")
    }
    setLoading(false)
  }, [])

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  const themeValues = {
    theme,
    toggleTheme,
    loadingTheme: loading,
  }
  return (
    <themeContext.Provider value={themeValues}>
      {children}
    </themeContext.Provider>
  )
}
