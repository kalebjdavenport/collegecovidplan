import PropTypes from "prop-types"
import React from "react"

export const Feature = ({ label, value }) => {
  if (typeof value === "string") {
    if (value.startsWith("http") || value.startsWith("mailto")) {
      value = (
        <div>
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            {value}
          </a>
        </div>
      )
    } else {
      value = <div>{value}</div>
    }
  } else if (Array.isArray(value)) {
    value = value.map((item, i) => (
      <span key={`${label}_${i}`} className="inline-block mr-4 break-normal">
        {item}
      </span>
    ))
  }

  return (
    <>
      <h4 className="text-coffee-800 uppercase text-xxs font-bold tracking-wide font-medium py-1">
        {label}
      </h4>

      <div
        className={`font-medium text-coffee-400 text-sm leading-relaxed mb-4`}
      >
        {value}
      </div>
    </>
  )
}

Feature.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}
