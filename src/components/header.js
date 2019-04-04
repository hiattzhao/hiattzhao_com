import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: `center`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/web/"
          activeStyle={{ textDecoration: "underline" }}
          style={{
            color: `#028780`,
            textDecoration: `none`,
            paddingLeft: 30,
          }}
        >
          web
        </Link>
        <Link
          to="/photo/"
          activeStyle={{ textDecoration: "underline" }}
          style={{
            color: `#028780`,
            textDecoration: `none`,
            paddingLeft: 30,
          }}
        >
          photo
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
