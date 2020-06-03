import React from "react"
import styles from "./CollegeResult.module.css"
import { Link } from "gatsby"

const CollegeResults = ({ hit: { College_University, id } }) => (
  <div className={"flex items-start " + styles.item}>
    <Link
      to={`/${id}`}
      className={
        "text-sm lg:text-md text-eblue border border-transparent " + styles.link
      }
    >
      {College_University.length > 33
        ? `${College_University.substring(0, 30)}...`
        : College_University}
    </Link>
  </div>
)

export default CollegeResults
