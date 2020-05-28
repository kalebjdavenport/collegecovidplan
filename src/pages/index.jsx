import React from "react"
import { graphql, withPrefix } from "gatsby"
import styles from "./index.module.css"
import { Cards, Hero, SiteMetadata, CollegeSearch } from "../components"
import { Layout } from "../layouts/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <Layout>
      <SiteMetadata
        title="Travel destinations"
        description="Check the most popular travel destinations in Europe."
      />

      <div className="flex h-90">
        <div className={styles.leftCol}>
          <CollegeSearch />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl font-bold pt-24 pb-4">
            College plans for fall semester so far.
          </h1>
          <div id="pie-container" className="w-full h-full">
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
