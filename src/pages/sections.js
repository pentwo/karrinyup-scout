import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SectionPage = () => (
  <Layout>
    <SEO title="Section" />

    <section>
      <h1>Explore Our Sections</h1>
      <p>
        Scouts Australia provides fun youth development activities, building
        resilient and confident boys and girls aged 5 to 25 in the Joey Scout,
        Cub Scout, Scout, Venturer Scout and Rover Scout Sections. We also
        welcome adult volunteer Scout Leaders. Scouts has opportunities for the
        whole family to be involved. Everyone is welcome, and we value the
        diversity of our members. Find out more about the Section of Scouting
        that is best for you here.
      </p>

      <div>Joey Scouts Ages 5-7</div>
      <div>Cub Scouts Ages 8-11</div>
      <div>Scouts Ages 11-14</div>
      <div>Venturer Scouts Ages 15-17</div>
      <div>Rover Scouts Ages 18-25</div>
      <div>Adult Volunteers Ages 18+</div>
    </section>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default SectionPage
