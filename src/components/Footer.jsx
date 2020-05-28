import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import { FaEnvelope, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            contact
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer className="pt-16 border-t border-gray-300 bg-white">
      <h3 className="container text-xl flex lg:text-2xl font-bold text-ruby-400 tracking-tight leading-normal">
        <Link className="border-b-2 border-transparent hover:border-ruby-400">
          Let us know what else you are searching for.
        </Link>
      </h3>
      <div className="container pt-6 pb-12 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between lg:items-center">
        <ul className="w-full lg:w-auto">
          <FooterIconLink
            href={links.twitter}
            icon={FaTwitter}
            label="Twitter"
          />
          <FooterIconLink
            href={links.contact}
            icon={FaEnvelope}
            label="E-mail"
          />
        </ul>
        <div className="w-full lg:w-auto pt-6 text-sm text-ruby-800 lg:pt-0">
          <span className="pr-2">Copywright &copy; 2020 Brainstorm Inc.</span>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}

const FooterIconLink = ({ href, label, icon: Icon }) => {
  const linkParams = { href }

  if (href.startsWith("http")) {
    linkParams.target = "_blank"
    linkParams.rel = "noreferrer noopener"
  }

  return (
    <li className="inline-block px-2">
      <a
        {...linkParams}
        className="inline-flex h-8 w-8 border border-ruby-800 text-ruby-800 rounded-full items-center justify-center transition-colors duration-200 hover:text-white hover:bg-ruby-400 hover:border-ruby-400"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  )
}
