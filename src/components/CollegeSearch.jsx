import React from "react"
import styles from "./CollegeSearch.module.css"
import { IoIosSearch } from "react-icons/io"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom"
import CollegeResult from "./CollegeResult"

const searchClient = algoliasearch(
  "V2O00E2RRO",
  "291818cef9eff277206b0cf908a542bd"
)

const HomeSearchBox = ({ currentRefinement, refine }) => (
  <form className="relative" noValidate action="" role="search">
    <input
      type="search"
      className={
        "w-full bg-white text-lg focus:outline-none border border-gray-400 rounded-md block appearance-none leading-normal placeholder-gray-900 " +
        styles.input
      }
      placeholder="Ohio State University"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    <button className={styles.searchBtn}>
      <IoIosSearch />
    </button>
  </form>
)

const CustomSearchBox = connectSearchBox(HomeSearchBox)

const Hits = ({ hits }) => (
  <ul class="pt-4">
    {hits.slice(0, 6).map(hit => (
      <li key={hit.id}>
        <CollegeResult hit={hit} />
      </li>
    ))}
  </ul>
)

const CustomHits = connectHits(Hits)

export const CollegeSearch = props => {
  return (
    <div className="container flex flex-col items-center text-center bg-blush h-full">
      <h3 className="text-3xl p-10 lg:max-w-xs lg:pt-24 font-bold text-primar">
        Find your school's fall plans...
      </h3>
      <div className="container flex justify-center">
        <InstantSearch searchClient={searchClient} indexName="dev_collegeCovid">
          <div className="relative w-full h-full lg:max-w-sm">
            <CustomSearchBox />
            <CustomHits />
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}
