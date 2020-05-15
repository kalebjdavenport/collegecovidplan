import React from "react"
import styles from "./CollegeSearch.module.css"
import { IoIosSearch } from "react-icons/io"

export const CollegeSearch = props => {
  return (
    <div className="container flex flex-col items-center text-center bg-blush h-full">
      <h3 className="text-3xl p-10 lg:max-w-xs lg:pt-32 font-bold text-primar">
        Find your school's fall plans...
      </h3>
      <div className="container flex justify-center">
        <div className="relative w-full h-full lg:max-w-sm">
          <input
            type="text"
            class={
              "w-full bg-white text-lg focus:outline-none border border-gray-400 rounded-md block appearance-none leading-normal placeholder-gray-900 " +
              styles.input
            }
            placeholder="Ohio State University"
          />
          <div className={styles.searchBtn}>
            <IoIosSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
