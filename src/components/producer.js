import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Producer = () => {
    const data = useStaticQuery(graphql`
    query {
      wow1: file(relativePath: { eq: "WOW1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wow2: file(relativePath: { eq: "WOW2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wow3: file(relativePath: { eq: "WOW3.jpg" }) {
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
      tp2: file(relativePath: { eq: "tp1-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp3: file(relativePath: { eq: "tp2-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hw1: file(relativePath: { eq: "hw1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hw2: file(relativePath: { eq: "hw2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hw3: file(relativePath: { eq: "hw3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
    return (
        <div className='producer'>
            <div className="row">
                <div className="container">
                    <div className="column">
                        <Img fluid={data.wow1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.wow2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.wow3.childImageSharp.fluid} />
                    </div>
                    <div className="caption">The WOW No.4 The Beauty Issue</div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.tp1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.tp2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.tp3.childImageSharp.fluid} />
                    </div>
                    <div className="caption">Tae Park</div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.hw1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.hw2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.hw3.childImageSharp.fluid} />
                    </div>
                    <div className="caption">Han Wen</div>
                </div>
            </div>
            <div className="fixed-misc">Producer + PR</div>
        </div>
    )
}


export default Producer