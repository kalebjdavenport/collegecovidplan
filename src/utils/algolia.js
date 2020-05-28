require("dotenv").config()

const { AIRTABLE_TABLE_NAME: tableName } = process.env

const collegeQuery = `{
  items: allAirtable(filter: { table: { eq: "${tableName}" } }) {
    nodes {
      data {
        id: slug
        State
        County
        Type
        College_University
        Website
        SStatus
        FSstatus
        FSNote
        FSsource
        Campus
      }
    }
  }
}`
const queries = [
  {
    query: collegeQuery,
    transformer: ({ data }) =>
      data.items.nodes.map(({ data }) => {
        return data
      }),
  },
]
module.exports = queries
