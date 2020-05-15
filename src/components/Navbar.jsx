import React from "react"
import Icon from "../assets/college-covid-plan-logo.svg"
import styles from "./Navbar.module.css"
import { Link } from "gatsby"
import { IoIosSearch } from "react-icons/io"

export const Navbar = () => {
  return (
    <nav className={"bg-white " + styles.mainNav}>
      <div className="flex h-full text-center lg:flex-row lg:justify-between lg:items-center">
        <div className="my-4 mx-10 w-full lg:w-auto">
          <Link to="/">
            <Icon />
          </Link>
        </div>
        <ul className="flex justify-center items-center h-full">
          <li className="m-0 h-full">
            <Link className={styles.btn} to="/updates">
              Latest updates
            </Link>
          </li>
          <li className="m-0 h-full">
            <Link className={styles.btn} to="/sports/">
              Sports
            </Link>
          </li>
          <li className="m-0 h-full">
            <Link className={styles.btn} to="/schools/">
              Schools
            </Link>
          </li>
          <li className={"m-0 h-full"}>
            <div className={styles.searchBtn}>
              <IoIosSearch />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
