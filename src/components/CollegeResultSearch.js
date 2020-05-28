import React from "react"
import styles from "./CollegeResultSearch.module.css"
import { Link } from "gatsby"

const CollegeResultsSearch = ({ hit: { College_University, id } }) => (
  <div className="flex items-start w-full">
    <div className="flex flex-row relative overflow-hidden">
      <Link
        to={`${id}`}
        className={
          "text-lg z-10 font-bold px-4 py-1 text-coffee-400 border border-transparent " +
          styles.link
        }
      >
        {College_University}
      </Link>
      <div className={styles.visit} />
    </div>
  </div>
)

export default CollegeResultsSearch
