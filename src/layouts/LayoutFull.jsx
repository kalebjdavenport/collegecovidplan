import React, { useState } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Helmet } from "react-helmet"

export const LayoutFull = ({ children }) => {
  const [navSearch, setNavSearch] = useState(false)
  return (
    <>
      <Helmet>
        <script src="https://d3js.org/d3.v3.min.js" suspend></script>
      </Helmet>
      <div className={`overlay ${navSearch && `dark`}`} />
      <Navbar navSearch={navSearch} setNavSearch={setNavSearch} />
      {children}
      <Footer />
    </>
  )
}
