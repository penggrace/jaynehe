import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Email = () => {
    const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "email-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="email-contact">
          <div className="container">
              <div className="inner-blurb">
                  <div className="content">
                    <h3>Contact Me</h3>
                    <div className="email-image">
                        <Img fluid={data.logo.childImageSharp.fluid} />
                    </div>
                        <p>jayne@outcaststudio.co</p>
                  </div>
              </div>
          </div>
        <div className="fixed-misc">Producer + PR</div>
      </div>
    )
}

export default Email