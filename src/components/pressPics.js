import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Press = () => {
  const data = useStaticQuery(graphql`
    query {
      hwp1: file(relativePath: { eq: "IMG_3573.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hwp2: file(relativePath: { eq: "IMG_3575.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hwp3: file(relativePath: { eq: "IMG_3570.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hwp4: file(relativePath: { eq: "IMG_3571.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hwp5: file(relativePath: { eq: "IMG_3576.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mc1: file(relativePath: { eq: "IMG_3577.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mc2: file(relativePath: { eq: "IMG_1459.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      gem1: file(relativePath: { eq: "gem1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gem4: file(relativePath: { eq: "gem4.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gem5: file(relativePath: { eq: "gem5.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gem6: file(relativePath: { eq: "gem6.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jxw: file(relativePath: { eq: "jxw.jpg" }) {
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
            <div className="img">
              <Img fluid={data.hwp1.childImageSharp.fluid} style={{
                width: "185px", height: "400px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.hwp2.childImageSharp.fluid} style={{
                width: "185px", height: "400px"
              }} />
            </div>
            <div className="caption">
              <h3></h3>
              <p>HANWEN</p>
              <p1>SS2020</p1>
              <p2>&lt;Milan Fashion Week&gt;</p2>
            </div>
          </div>
          <div className="img-container">
            <div className="img">
              <Img fluid={data.hwp3.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.hwp4.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3></h3>
              <p>Soo Joo</p>
              <p1>in HANWEN</p1>
              <p2>&lt;The Wow Magazine&gt;</p2>
            </div>
          </div>
          <div className="img-container">
            <div className="img">
              <Img fluid={data.hwp5.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.hwp5.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3></h3>
              <p>HANWEN</p>
              <p1>SS2019</p1>
              <p2>&lt;Bazaar March Issue&gt;</p2>
            </div>
          </div>
          <div className="img-container">
            <div className="img">
              <Img fluid={data.mc2.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.mc1.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3></h3>
              <p>Misty Copeland</p>
              <p1>in HANWEN</p1>
              <p2>&lt;American Music Awards&gt;</p2>
            </div>
          </div>
          
          <div className="img-container">
            <div className="img">
              <Img fluid={data.gem3.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.gem2.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3>G.E.M</h3>
                <p>in Orseund Iris</p>
                <p1>Le Club + Maxi Wrap Skirt</p1>
                <p2>&lt;OUR SONG&gt;</p2>
            </div>
          </div>

          <div className="img-container">
            <div className="img">
              <Img fluid={data.gem4.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.gem1.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3>G.E.M</h3>
              <p>in Orseund Iris</p>
              <p1>Workwear Jumpsuit</p1>
              <p2>&lt;Cartier Event&gt;</p2>
            </div>
          </div>
          <div className="img-container">
            <div className="img">
              <Img fluid={data.gem5.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="img">
              <Img fluid={data.gem6.childImageSharp.fluid} style={{
                width: "185px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3>G.E.M</h3>
              <p>in Orseund Iris</p>
              <p1>Sports Tank</p1>
              <p2>&lt;Awards Night&gt;</p2>
            </div>
          </div>

          <div className="img-container">
            <div className="img">
              <Img fluid={data.jxw.childImageSharp.fluid} style={{
                width: "390px", height: "275px"
              }} />
            </div>
            <div className="caption">
              <h3>Ju XiaoWen</h3>
              <p>in Orseund Iris</p>
              <p1>Gamine Skirt</p1>
              <p2>&lt;CR Fashion Book China&gt;</p2>
            </div>
          </div>

        </div>
      </div>
      <div className="fixed-misc">Producer + PR</div>
    </div >
  )
}


export default Press