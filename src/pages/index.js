import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import About from "../components/about"
import Sections from "../components/sections"
import Calendar from "../components/calendar"
import Map from "../components/map"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Sections />
    <Calendar />
    <Map />
    <Contact />
  </Layout>
)

export default IndexPage
