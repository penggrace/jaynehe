import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


const Influencers = () => {
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
      one: file(relativePath: { eq: "IMG_3492.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      moe: file(relativePath: { eq: "IMG_3489.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lolaland1: file(relativePath: { eq: "IMG_3499.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chenkks1: file(relativePath: { eq: "IMG_3487.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maming: file(relativePath: { eq: "IMG_3514.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "IMG_3503.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jing: file(relativePath: { eq: "IMG_3507.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "IMG_3483.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michelle1: file(relativePath: { eq: "IMG_3524.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      silvia: file(relativePath: { eq: "IMG_3494.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "IMG_3513.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jen: file(relativePath: { eq: "IMG_3510.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)
  return (
    <div className="influencers">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="img-container">
              <Img fluid={data.jiaye.childImageSharp.fluid} />
              <div className="img-caption">jiaye x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.christina.childImageSharp.fluid} />
              <div className="img-caption">christina x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.lolaland.childImageSharp.fluid} />
              <div className="img-caption">lolaland x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.chenkks.childImageSharp.fluid} />
              <div className="img-caption">chenkks x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.vanntey.childImageSharp.fluid} />
              <div className="img-caption">vanntey x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.audrey.childImageSharp.fluid} />
              <div className="img-caption">audrey x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.nikki.childImageSharp.fluid} />
              <div className="img-caption">nikki min x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.tracey.childImageSharp.fluid} />
              <div className="img-caption">tracey x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.cici.childImageSharp.fluid} />
              <div className="img-caption">cici x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.onesong.childImageSharp.fluid} />
              <div className="img-caption">onesong x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.michelle.childImageSharp.fluid} />
              <div className="img-caption">michelle choi x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.mia.childImageSharp.fluid} />
              <div className="img-caption">mia kong x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.one.childImageSharp.fluid} />
              <div className="img-caption">陈希子 x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.moe.childImageSharp.fluid} />
              <div className="img-caption">萌moe x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.lolaland1.childImageSharp.fluid} />
              <div className="img-caption">lolaland x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.chenkks1.childImageSharp.fluid} />
              <div className="img-caption">chenkks x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.maming.childImageSharp.fluid} />
              <div className="img-caption">maming x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.two.childImageSharp.fluid} />
              <div className="img-caption">凯伦 x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.jing.childImageSharp.fluid} />
              <div className="img-caption">jing schannel x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.three.childImageSharp.fluid} />
              <div className="img-caption">粘粘 x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.michelle1.childImageSharp.fluid} />
              <div className="img-caption">michelle choi x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.silvia.childImageSharp.fluid} />
              <div className="img-caption">silvia li x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.four.childImageSharp.fluid} />
              <div className="img-caption">安吉林 x orseund iris</div>
            </div>
          </div>
          <div className="column">
            <div className="img-container">
              <Img fluid={data.jen.childImageSharp.fluid} />
              <div className="img-caption">it's jen x orseund iris</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-misc">Producer + PR</div>
    </div>
  )
}




export default Influencers