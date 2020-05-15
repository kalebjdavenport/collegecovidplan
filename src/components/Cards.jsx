import PropTypes from "prop-types"
import React from "react"

export const Cards = props => {
  const { nodes } = props

  return (
    <div className="container pt-6">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="pr-0 py-2 text-center">State</th>
            <th class="px-4 py-2">County</th>
            <th class="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((item, i) => {
            const { State, County, Type, slug } = item.data
            return (
              <tr key={i}>
                <td class="border py-2 text-center">{State}</td>
                <td class="border px-4 py-2">{County}</td>
                <td class="border px-4 py-2">{Type}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Cards.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
