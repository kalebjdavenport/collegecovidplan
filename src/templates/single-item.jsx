import { graphql } from "gatsby"
// import Img from "gatsby-image"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

const GenerateFSStatusDesc = fstatus => {
  if (fstatus === "o") {
    return "Planning to hold all classes in online."
  } else if (fstatus === "ip") {
    return "Planning to hold all classes in person at this time."
  } else if (fstatus === "hybrid") {
    return "Courses are offered in a combination of online and in-person. Please check out our note and school website."
  } else if (fstatus === "range") {
    return "Considering a range of options at this time."
  } else if (fstatus === "y") {
    return "Your school says courses will happen in fall, but hasn’t revealed specs. "
  } else if (fstatus === "s") {
    return "No announcement at this point. We are closely monitoring it!"
  } else if (fstatus === "c") {
    return "This semester/quarter is canceled and will not meet in the fall. "
  } else if (fstatus === "p") {
    return "This semester/quarter is postponed. Please check out our note and school website."
  } else {
    return "Data not currently available, please see your school's website."
  }
}

export default props => {
  const {
    State,
    County,
    Type,
    College_University: college,
    // image: {
    //   localFiles: [cover],
    // },
    Website,
    SStatus,
    FSstatus,
    FSNote,
    FSource,
    FTuition,
    Housing,
    HNote,
    HSsource,
    Office,
    ONote,
    OSource,
    Campus,
    CNote,
    CSource,
    Sport,
    SNote,
    SSource,
  } = props.data.item.data

  return (
    <Layout>
      <SiteMetadata title={college} description={Website} />
      <article>
        <div className="container h-90 py-8">
          <h1 className="text-2xl lg:text-3xl pb-6 text-coffee-800 font-bold leading-tight">
            {college}
          </h1>
          <div className="flex flex-wrap">
            {/* <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img fluid={cover.childImageSharp.fluid} alt={name} />
            </div> */}

            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="County" value={County} />
              {State && <Feature label="State" value={State} />}
              {Type !== "#N/A" && (
                <Feature
                  label="School Type"
                  value={Type === "PrivNp" ? "Private" : Type}
                />
              )}
              <Feature label="Official WebsiteP" value={Website} />
            </div>
            <div className="w-full lg:w-3/5 lg:pl-4">
              {SStatus === "o" ? (
                <Feature label="Summer Status" value="Online" />
              ) : (
                <Feature label="Summer Status" value="Cancelled" />
              )}
              <Feature
                label="Fall Plans"
                value={GenerateFSStatusDesc(FSstatus)}
              />
              {FSource && <Feature label="Source" value={FSource} />}
            </div>
            {FSNote && (
              <div className="w-full lg:pl-4 mb-2">
                <hr className="bg-gray-300 h-px mt-4 mb-8" />
                <div className="flex flex-row items-baseline">
                  <h3 className="mr-6 text-xl align-text-bottom">Note</h3>
                  <p className="text-sm text-black align-text-bottom">
                    {FSNote}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        State
        County
        Type
        College_University
        Website
        SStatus
        FSstatus
        FSNote
        FSource
        FTuition
        Housing
        HNote
        HSource
        Office
        ONote
        OSource
        Campus
        CNote
        CSource
        Sport
        SNote
        SSource
      }
    }
  }
`
