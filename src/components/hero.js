import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

import { Jumbotron, Container, Button } from "reactstrap"
import heroVideo from "../Videos/hero-video-1.mp4"
import heroVideoPoster from "../images/slider-bg-new.jpg"
const Hero = () => {
  return (
    <section className="hero">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="hero__Video"
        poster={heroVideoPoster}
      >
        <source src={heroVideo} type="video/mp4"></source>
      </video>
      <Jumbotron className="hero__Jumbotron">
        <h1 className="display-4 ">
          Be Prepared for...
          <br />
          <span className="hero__Jumbotron__title">New Adventure</span>
        </h1>
        <p className="lead">
          <Button color="primary" tag={Link} to="/group">
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </section>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "slider-bg-new-crop.png" }) {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="New adventure"
        className="hero__image"
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  />
)
