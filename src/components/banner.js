import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      night: file(relativePath: { eq: "IMG_3508.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laying: file(relativePath: { eq: "IMG_3495.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twoGirls: file(relativePath: { eq: "IMG_3483.JPG" }) {
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
                        <Img fluid={data.laying.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Jayne Her</div>
                    <div className="main-image">
                        <Img fluid={data.night.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.twoGirls.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
          <div className="fixed-misc">Producer + PR</div>
      </div>
  )
}




export default Banner