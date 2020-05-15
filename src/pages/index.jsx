import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.css"
import { Cards, Hero, SiteMetadata, CollegeSearch } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Travel destinations"
        description="Check the most popular travel destinations in Europe."
        // image={data.hero.url}
      />

      <div className="flex h-90">
        <div className={styles.leftCol}>
          <CollegeSearch />
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="w-full h-full overflow-hidden">
            <Cards nodes={data.items.nodes} />
          </div>
        </div>
      </div>
      {/* <Hero
        tag="#travel"
        title="Travel destinations"
        description="Check the most popular travel locations in Europe."
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    # hero: file(relativePath: { eq: "hero-travel.jpg" }) {
    #   ...HeroImageFragment
    # }
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
