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

function generateFTuition(name, ftuition) {
  if (Number.isInteger(ftuition)) {
    return `${name} has announced to change fall tuition to ${ftuition} due to COVID 19 pandemic.`
  } else if (ftuition === "s") {
    return "No announcement at this point. We are closely monitoring it!"
  } else if (ftuition === "Same") {
    return `${name} has announced no change in tuition for COVID 19 pandemic. `
  } else if (ftuition === "b") {
    return "Tuition is different depending on whether you choose online or in-person. Please check out our note and school website."
  }
}

function generateHousing(housing) {
  console.log(housing)
  if (housing === "Open") {
    return `Planning to open the dorm as usual! Remember to check out social distancing guidelines.`
  } else if (
    housing === "po" ||
    housing === "partially open" ||
    housing === "Partially Open" ||
    housing === "Partially open"
  ) {
    return "Your dorm is partially open. Restrictions are outlined on your school's website."
  } else if (housing === "c") {
    return `Your dorm is closed for the fall semester.`
  }
}

function generateOffice(office) {
  if (office === "Open" || office === "open") {
    return `Planning to open offices as usual! Remember to check out social distancing guidelines.`
  } else if (
    office === "po" ||
    office === "partially open" ||
    office === "Partially Open" ||
    office === "Partially open"
  ) {
    return "Offices are partially open while some staff work remotely. Please refer to the source and school website for more details."
  } else if (office === "c") {
    return `All offices are closed for the fall semester.`
  }
}

function generateCampus(campus) {
  if (campus === "Open" || campus === "open") {
    return `Planning to open campus as usual! Remember to check out social distancing guidelines.`
  } else if (
    campus === "po" ||
    campus === "partially open" ||
    campus === "Partially Open" ||
    campus === "Partially open"
  ) {
    return "Planning to partially open the campus. Please refer to the source and school website for more details."
  } else if (campus === "c") {
    return `Planning to limit access to the campus.`
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
    HSource,
    Office,
    ONote,
    OSource,
    Campus,
    CNote,
    CSource,
  } = props.data.item.data

  return (
    <Layout>
      <SiteMetadata title={college} description={Website} />
      <article>
        <div className="container min-h-90 py-8">
          <h1 className="text-2xl lg:text-3xl pb-6 text-coffee-800 font-bold leading-tight">
            {college}
          </h1>
          <div className="flex flex-wrap">
            {/* <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img fluid={cover.childImageSharp.fluid} alt={name} />
            </div> */}

            <div className="w-full lg:w-1/4 lg:pl-4">
              <Feature label="County" value={County} />
              {State && <Feature label="State" value={State} />}
              {Type !== "#N/A" && (
                <Feature
                  label="School Type"
                  value={Type === "PrivNp" ? "Private" : Type}
                />
              )}
              <Feature label="Official Website" value={Website} />
            </div>
            <div className="w-full lg:w-3/4 lg:pl-4">
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
              {FTuition && (
                <Feature
                  label="Fall Tuition Plan"
                  value={generateFTuition(college, FTuition)}
                />
              )}
              {Housing && (
                <Feature
                  label="Housing Plan"
                  value={generateHousing(Housing)}
                />
              )}
              {HNote && <Feature label="Housing Note" value={HNote} />}
              {HSource && <Feature label="Source" value={FSource} />}
              {Office && (
                <Feature label="Office Plan" value={generateOffice(Office)} />
              )}
              {ONote && <Feature label="Office Note" value={ONote} />}
              {OSource && <Feature label="Source" value={OSource} />}
              {Campus && (
                <Feature label="Campus Plan" value={generateCampus(Campus)} />
              )}
              {CNote && <Feature label="Campus Note" value={CNote} />}
              {CSource && <Feature label="Source" value={CSource} />}
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
      }
    }
  }
`
