import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

export const Cards = props => {
  const { nodes } = props

  return (
    <div className="container pt-8">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="pr-0 py-2 text-center">State</th>
            <th className="px-4 py-2 text-center">College/University</th>
            <th className="px-4 py-2">County</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((item, i) => {
            const { State, County, Type, College_University, slug } = item.data
            return (
              <tr
                className="table-auto hover:bg-blush cursor-pointer"
                onClick={() => navigate(`/${slug}/`)}
                key={i}
              >
                <td className="border px-2 py-2 text-center">{State}</td>

                <td className="border px-4 py-2 text-center">
                  {College_University}
                </td>

                <td className="border px-4 py-2">{County}</td>

                <td className="border px-4 py-2">
                  {Type !== "#N/A" ? Type : " "}
                </td>
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
