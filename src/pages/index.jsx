import React from "react"
import { graphql, withPrefix } from "gatsby"
import styles from "./index.module.css"
import { SiteMetadata, CollegeSearch } from "../components"
import { Layout } from "../layouts/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <Layout>
      <SiteMetadata
        title="Find your school."
        description="Get information about the fall plans for your university."
      />

      <div className="flex flex-col lg:flex-row lg:min-h-90">
        <div className={styles.leftCol}>
          <CollegeSearch />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl text-center m-4 font-bold lg:pt-24 pb-4">
            College plans for fall semester so far.
          </h1>
          <div
            id="pie-container"
            className="m-auto min-w-3/4 w-full h-32 lg:h-full"
          >
            <Helmet>
              <script src={withPrefix("script.js")} suspend></script>
            </Helmet>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          State
          County
          Type
          slug
        }
      }
    }
  }
`
