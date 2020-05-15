import React from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
