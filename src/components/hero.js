import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import { Button } from "reactstrap"
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
      <div className="hero__Jumbotron">
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
      </div>
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
