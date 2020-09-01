import React, { useEffect, createContext, useState } from "react"

export const langContext = createContext()

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lan")
    if (savedLanguage) {
      setLang(savedLanguage)
    } else {
      localStorage.setItem("lang", "en")
    }
  }, [])

  const toggleLang = () => {
    if (lang === "en") {
      localStorage.setItem("lang", "pt")
      setLang("pt")
    } else {
      localStorage.setItem("theme", "en")
      setLang("en")
    }
  }

  const langValues = {
    lang,
    toggleLang,
  }
  return (
    <langContext.Provider value={langValues}>{children}</langContext.Provider>
  )
}
