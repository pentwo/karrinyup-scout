import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Sections from "../components/sections"
import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Sections />
    <Map />
  </Layout>
)

export default IndexPage
