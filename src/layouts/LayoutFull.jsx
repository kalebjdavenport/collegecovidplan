import React, { useState } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const LayoutFull = ({ children }) => {
  const [navSearch, setNavSearch] = useState(false)
  return (
    <>
      <div className={`overlay ${navSearch && `dark`}`} />
      <Navbar navSearch={navSearch} setNavSearch={setNavSearch} />
      {children}
      <Footer />
    </>
  )
}
