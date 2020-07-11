import React, { useEffect } from "react"
import styles from "./NavSearch.module.css"
import { IoIosClose } from "react-icons/io"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom"
import CollegeResultSearch from "./CollegeResultSearch"

const searchClient = algoliasearch(
  "V2O00E2RRO",
  "291818cef9eff277206b0cf908a542bd"
)

const HomeSearchBox = ({ currentRefinement, refine, setNavSearch }) => {
  const searchRef = React.createRef()

  useEffect(() => {
    searchRef.current.focus()
  }, [searchRef])

  return (
    <form
      className="relative mb-0 flex flex-row"
      noValidate
      action=""
      role="search"
    >
      <input
        type="search"
        aria-label="School search"
        autofocus="true"
        ref={searchRef}
        className={
          "flex-1 text-lg focus:outline-none block appearance-none leading-normal placeholder-gray-900 " +
          styles.input
        }
        placeholder="Find your school..."
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <button
        onClick={() => setNavSearch(false)}
        className={"focus:outline-none " + styles.searchBtn}
      >
        <IoIosClose />
      </button>
    </form>
  )
}

const CustomSearchBox = connectSearchBox(HomeSearchBox)

const Hits = ({ hits, setNavSearch }) => (
  <ul className="pt-8 lg:mx-16 mx-10 border-t-2 border-gray-200">
    {hits.slice(0, 10).map(hit => (
      <li key={hit.id}>
        <CollegeResultSearch setNavSearch={setNavSearch} hit={hit} />
      </li>
    ))}
  </ul>
)

const CustomHits = connectHits(Hits)

export const NavSearch = (props, ref) => {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <div className="flex w-full justify-center">
        <InstantSearch searchClient={searchClient} indexName="dev_collegeCovid">
          <div className="w-full h-full">
            <CustomSearchBox ref={ref} setNavSearch={props.setNavSearch} />
            <CustomHits />
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}
