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
                    <h3>PR</h3>
                    <p>Jayne is a PR specialist who came from a multi-disciplinary background in social media, influencer marketing, and creative management. As one of the founding members of <b>outcast</b> Studio, she broke into the industry while running the in-house press department for the emerging NYC designer Han Wen's eponymous womenswear brand. She then graduated to working as a communication consultant for the NYC cult favorite, Orseund Iris, specializing in Asian Markets.</p>
                    <h3>Producer</h3>
                        <p>As a NYC based producer, Jayne takes care of all aspects of <b>outcast</b> productions. She also focuses on overseeing artist management and production for Asia based clients. She continues to work on expanding the presence of <b>outcast</b> Studio by seeking new business, brand, and talent collaboration opportunities within the U.S. and Asia.</p>
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