import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import styles from "./index.module.css"
import { SiteMetadata, CollegeSearch } from "../components"
import { Layout } from "../layouts/Layout"
import * as d3 from "d3"

export default () => {
  const svgRef = useRef()
  useEffect(() => {
    // set the dimensions and margins of the graph
    var width =
        window.innerWidth > 740 ? window.innerWidth / 2 : window.innerWidth,
      height = window.innerWidth / 3

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2

    // append the svg object to the div called 'my_dataviz'
    var svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    // set the color scale
    var color = d3
      .scaleOrdinal()
      .domain(["In Person", "Online", "Undecided"])
      .range(["#A82433", "#4B9B8D", "#0A2342"])

    const data = {
      "In Person": 118,
      Online: 54,
      Undecided: 224,
    }

    // Compute the position of each group on the pie:
    var pie = d3
      .pie()
      .sort(null) // Do not sort group by size
      .value(function(d) {
        return d.value
      })
    var data_ready = pie(d3.entries(data))

    // The arc generator
    var arc = d3
      .arc()
      .innerRadius(radius * 0.45) // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    // Another arc that won't be drawn. Just for labels positioning
    var outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("allSlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function(d) {
        return color(d.data.key)
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.78)

    function midAngle(startAngle, endAngle) {
      return startAngle + (endAngle - startAngle) / 2
    }

    // Add the polylines between chart and labels:
    svg
      .selectAll("allPolylines")
      .data(data_ready)
      .enter()
      .append("polyline")
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("points", function(d) {
        var posA = arc.centroid(d) // line insertion in the slice
        var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d) // Label position = almost the same as posB
        posC[0] =
          radius *
          0.95 *
          (midAngle(d.startAngle, d.endAngle) < Math.PI ? 1 : -1) // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })

    // Add the polylines between chart and labels:
    svg
      .selectAll("allLabels")
      .data(data_ready)
      .enter()
      .append("text")
      .text(function(d) {
        console.log(d.data.key)
        return d.data.key
      })
      .attr("transform", function(d) {
        var pos = outerArc.centroid(d)
        pos[0] =
          radius *
          0.99 *
          (midAngle(d.startAngle, d.endAngle) < Math.PI ? 1 : -1)
        return "translate(" + pos + ")"
      })
      .style("text-anchor", function(d) {
        return midAngle(d.startAngle, d.endAngle) < Math.PI ? "start" : "end"
      })
  }, [])

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
          <h1 className="text-2xl text-center m-4 font-bold lg:pt-20">
            College plans for fall semester so far.
          </h1>
          <div className="m-auto min-w-3/4 justify-center items-center block lg:h-full">
            <svg ref={svgRef} style={{ margin: "auto" }}></svg>
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
