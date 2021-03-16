import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      jbwow: file(relativePath: { eq: "JBWOW2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp1: file(relativePath: { eq: "tp1-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp3: file(relativePath: { eq: "pp1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <Img fluid={data.tp1.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Jayne Her</div>
                    <div className="main-image">
                        <Img fluid={data.jbwow.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.tp3.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
          <div className="fixed-misc">Producer + PR</div>
      </div>
  )
}




export default Banner