import { graphql } from "gatsby"
// import Img from "gatsby-image"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default props => {
  console.log("Is this working?", props)
  const {
    State,
    County,
    Type,
    College_University: college,
    // image: {
    //   localFiles: [cover],
    // },
    Website,
  } = props.data.item.data

  return (
    <Layout>
      <SiteMetadata title={college} description={Website} />
      <article>
        <div className="container py-8">
          <h1 className="text-2xl lg:text-3xl text-blue-500 font-bold leading-tight">
            {college}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 font-medium mb-4">
            {State}
          </p>
          <div className="flex flex-wrap">
            {/* <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img fluid={cover.childImageSharp.fluid} alt={name} />
            </div> */}
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="County" value={County} />
              <Feature label="School Type" value={Type} />
              <a className="mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900">
                <Feature label="Official WebsiteP" value={Website} />
              </a>
            </div>
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
        # image {
        #   localFiles {
        #     url: publicURL
        #     childImageSharp {
        #       fluid(maxWidth: 733, maxHeight: 480, cropFocus: NORTH) {
        #         ...GatsbyImageSharpFluid_withWebp
        #       }
        #     }
        #   }
        # }
        slug
        # summary
        # tags
        # url
      }
    }
  }
`
