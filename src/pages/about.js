import React from "react"
import { graphql } from "gatsby"
import { SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="About College Covid Plan"
        description="More than just a search tool."
      />

      <div>
        <h1>Built by the team at Brainstorm.</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SchoolsQuery($tableName: String!) {
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          College_University
          State
          County
          Type
          slug
        }
      }
    }
  }
`
