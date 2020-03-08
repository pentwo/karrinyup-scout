import { Link } from "gatsby"
import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap"

import Adultvolunteers from "../images/sections/adultvolunteers-1.png"
import Cubscouts from "../images/sections/cubscouts-1.png"
import Joeyscouts from "../images/sections/joeyscouts-1.png"
import Roverscouts from "../images/sections/roverscouts-1.png"
import Scouts from "../images/sections/scouts-1.png"
import Ventuerscouts from "../images/sections/ventuerscouts-1.png"

export default function sections() {
  return (
    <section className="container-fluid sections">
      <div className="sections__text">
        <h2 className="text-center">Explore Our Sections</h2>
        <p>
          Scouts Australia provides fun youth development activities, building
          resilient and confident boys and girls aged 5 to 25 in the Joey Scout,
          Cub Scout, Scout, Venturer Scout and Rover Scout Sections. We also
          welcome adult volunteer Scout Leaders. Scouts has opportunities for
          the whole family to be involved. Everyone is welcome, and we value the
          diversity of our members. Find out more about the Section of Scouting
          that is best for you here.
        </p>
      </div>
      <div className="sections__cards">
        <CustomCard
          image={Joeyscouts}
          title="Joey Scouts"
          subtitle="Ages 5-7"
        />
        <CustomCard
          image={Cubscouts}
          title="Cub Scouts"
          subtitle="Ages  8-11"
        />
        <CustomCard image={Scouts} title="Scouts" subtitle="Ages 11-14" />
        <CustomCard
          image={Ventuerscouts}
          title="Venturer Scouts"
          subtitle="Ages 15-17"
        />
        <CustomCard
          image={Roverscouts}
          title="Rover Scouts"
          subtitle="Ages 18-25"
        />
        <CustomCard
          image={Adultvolunteers}
          title="Adult Volunteers"
          subtitle="Ages 18+"
        />
      </div>
    </section>
  )
}

const CustomCard = props => {
  return (
    <Card>
      <Link to="/sections">
        <CardImg src={props.image} />
      </Link>
      <CardBody>
        <Link to="/sections">
          <CardTitle className="text-center">{props.title}</CardTitle>
        </Link>
        <CardSubtitle className="text-center">{props.subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  )
}
