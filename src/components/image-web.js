import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const WebImage = () => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => 
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <Img fluid={data.image2.childImageSharp.fluid} />
      </div>
    }
  />
)

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "websites/2009HarvestField-600.jpg" }) {
      ...fluidImage
    }

    image2: file(relativePath: { eq: "websites/2012HiattZhaoWebsite-600.jpg" }) {
      ...fluidImage
    }

    image3: file(relativePath: { eq: "websites/2012nlhs-600.jpg" }) {
      ...fluidImage
    }
  }
`

export default WebImage