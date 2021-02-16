import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Press = () => {
    const data = useStaticQuery(graphql`
    query {
      gem2: file(relativePath: { eq: "gem2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gem3: file(relativePath: { eq: "gem3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
    return (
        <div className="press">
            <div className="container">
                <div className="row">
                <div className="img-container">
                            <Img fluid={data.gem3.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <div className="img-container">
                            <Img fluid={data.gem2.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Producer + PR</div>
        </div >
    )
}


export default Press