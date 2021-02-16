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
      ig: file(relativePath: { eq: "iglogo.png" }) {
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
                    <div className="container">
                      <div className="resume">
                        <p3>Resume available upon request</p3>
                      </div>
                    <div className="email-image">
                        <Img fluid={data.logo.childImageSharp.fluid} />
                    </div>
                        <p>jayne@outcaststudio.co</p>
                        <div className="ig-image">
                        <Img fluid={data.ig.childImageSharp.fluid} />
                    </div>
                        <p1>@jjjling</p1>
                  </div>
                  </div>
              </div>
          </div>
        <div className="fixed-misc">Producer + PR</div>
      </div>
    )
}

export default Email