import React, { useState } from "react"
import Icon from "../assets/college-covid-plan-logo.svg"
import styles from "./Navbar.module.css"
import { Link } from "gatsby"
import { IoIosSearch } from "react-icons/io"
import { NavSearch } from "./NavSearch"

import Helmet from "react-helmet"

export const Navbar = ({ setNavSearch, navSearch }) => {
  return (
    <nav className={"bg-white " + styles.mainNav}>
      <div className="flex w-full h-full text-center flex-row items-center">
        <div className="flex w-full h-full text-center lg:flex-row lg:justify-between lg:items-center">
          <div className="my-4 mx-10 w-full lg:w-auto">
            <Link to="/">
              <Icon />
            </Link>
          </div>
          <ul className="flex justify-center items-center h-full">
            {/* <li className="m-0 h-full">
              <Link className={styles.btn} to="/updates">
                Latest updates
              </Link>
            </li>
            <li className="m-0 h-full">
              <Link className={styles.btn} to="/sports/">
                Sports
              </Link>
            </li> */}
            <li className="m-0 h-full">
              <Link className={styles.btn} to="/schools/">
                Schools
              </Link>
            </li>
            <li className={"m-0 h-full"}>
              <div
                onClick={() => {
                  setNavSearch(true)
                }}
                className={styles.searchBtn}
              >
                <IoIosSearch />
              </div>
            </li>
          </ul>
        </div>
        {navSearch && (
          <div className="w-4/5 h-full z-10 relative">
            <Helmet
              bodyAttributes={{
                class: "overflow-hidden h-screen",
              }}
            />
            <div className={styles.searchPanel}>
              <NavSearch setNavSearch={setNavSearch} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
