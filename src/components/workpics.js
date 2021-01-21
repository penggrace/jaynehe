import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Work = () => {
    const data = useStaticQuery(graphql`
    query {
      jiaye: file(relativePath: { eq: "IMG_3517.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      christina: file(relativePath: { eq: "IMG_3522.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lolaland: file(relativePath: { eq: "IMG_3485.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chenkks: file(relativePath: { eq: "IMG_3488.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="work">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Img fluid={data.jiaye.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.christina.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.lolaland.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.chenkks.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.jiaye.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.christina.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.lolaland.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.chenkks.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
          <div className="fixed-misc">Producer + PR</div>
      </div>
  )
}




export default Work