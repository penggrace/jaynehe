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
      vanntey: file(relativePath: { eq: "IMG_3523.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      audrey: file(relativePath: { eq: "IMG_3506.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nikki: file(relativePath: { eq: "IMG_3511.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tracey: file(relativePath: { eq: "IMG_3495.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cici: file(relativePath: { eq: "IMG_3491.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onesong: file(relativePath: { eq: "IMG_3502.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michelle: file(relativePath: { eq: "IMG_3525.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mia: file(relativePath: { eq: "IMG_3519.JPG" }) {
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
                        <Img fluid={data.vanntey.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.audrey.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.nikki.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.tracey.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.cici.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.onesong.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.michelle.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.mia.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
          <div className="fixed-misc">Producer + PR</div>
      </div>
  )
}




export default Work