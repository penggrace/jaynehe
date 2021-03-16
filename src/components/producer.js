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
      tp3: file(relativePath: { eq: "tp1-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp21: file(relativePath: { eq: "tp2-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp22: file(relativePath: { eq: "tp2-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tp23: file(relativePath: { eq: "tp2-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pp1: file(relativePath: { eq: "pp1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pp2: file(relativePath: { eq: "pp2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pp3: file(relativePath: { eq: "pp3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss1: file(relativePath: { eq: "ss21-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss2: file(relativePath: { eq: "ss21-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss3: file(relativePath: { eq: "ss21-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fw1: file(relativePath: { eq: "fw20-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fw2: file(relativePath: { eq: "fw20-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fw3: file(relativePath: { eq: "fw20-3.jpg" }) {
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
      dichen: file(relativePath: { eq: "CNY-DICHEN.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jacky: file(relativePath: { eq: "CNY-JACKY.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      james: file(relativePath: { eq: "CNY-JAMES.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leo: file(relativePath: { eq: "CNY-LEO.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jayne: file(relativePath: { eq: "CNY-JAYNE.jpg" }) {
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
                    <div className="capCon">
                        <div className="caption">The WOW No.4 The Beauty Issue</div>
                    </div>
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
                    <div className="capCon">
                        <div className="caption">Tae Park Collection 1</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.tp21.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.tp22.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.tp23.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Tae Park Collection 2</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.pp1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.pp2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.pp3.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Private Policy FW21 LookBook</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.ss1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.ss2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.ss3.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Han Wen SS21 LookBook</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.fw1.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.fw2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.fw3.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Han Wen FW20 LookBook</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.hw2.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.hw3.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.hw1.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Han Wen eCommerce</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.dichen.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.jacky.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.james.childImageSharp.fluid} />
                    </div>
                    <div className="capCon">
                        <div className="caption">Outcast Studio for Chinese New Year</div>
                    </div>
                </div>
                <div className="container">
                    <div className="column">
                        <Img fluid={data.leo.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.jayne.childImageSharp.fluid} />
                    </div>
                    <div className="column">
                        <Img fluid={data.james.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Producer + PR</div>
        </div>
    )
}


export default Producer