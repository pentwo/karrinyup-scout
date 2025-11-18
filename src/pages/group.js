import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const GroupPage = () => (
  <Layout>
    <SEO title="Group" />
    <section>
      <h2 className="text-center">Scouting Philosophy</h2>

      <h3>Mission</h3>
      <p>
        Scouts Australia operates a voluntary, non-political educational
        movement for young people, open to all without distinction of origin,
        race or creed, in accordance with the purpose, principles, and method
        conceived by the Founder, Lord Baden-Powell.
      </p>
      <small>
        The Mission of Scouting is to contribute to the education of young
        people, through a value system based on the Scout Promise and Law, to
        help build a better world where people are self-fulfilled as individuals
        and play a constructive role in society.
      </small>
      <h3>Purpose</h3>
      <p>
        The Purpose of the Scout Movement is to contribute to the education of
        young people in achieving their full physical, intellectual, emotional,
        social and spiritual potentials as individuals, as responsible citizens
        and as members of their local, national and international communities.
      </p>
      <h3>Method</h3>
      <p>
        The Scout Association of Australia achieves its purpose through a system
        of progressive self-education, known as the Scout Method, the principal
        elements of which are:
      </p>
      <ul>
        <li>Community Involvement</li>
        <li>Learning by Doing</li>
        <li>Nature and the Outdoors</li>
        <li>Patrol System</li>
        <li>Personal Progression</li>
        <li>Promise and Law</li>
        <li>Symbolic Framework</li>
        <li>Youth Leading, Adults Supporting</li>
      </ul>

      <h3>Principles</h3>

      <p>
        The Principles of Scouting, as identified by the founder, Lord
        Baden-Powell, are that Scouts serve their God, act in consideration of
        the needs of others and develop and use their abilities to the
        betterment of themselves, their families and the community in which they
        live.
      </p>
      <h3>Motto</h3>
      <p>The motto of Scouts Australia is ‘Be Prepared</p>
      <h3>Values</h3>
      <p>Scouts Australia recognises the following values:</p>

      <ol>
        <li>
          The importance of individuals developing a sense of personal identity
          and self-worth which leads to responsibility for oneself and one’s
          actions as a citizen.
        </li>
        <li>
          The belief that young people are able and willing to take
          responsibility and contribute to society.
        </li>
        <li>
          The rights and responsibility of individuals to regulate their own
          health.
        </li>
        <li>
          The importance of adults in providing suitable role models for young
          people.
        </li>
        <li>
          The importance of not exposing young people to harm or exploitation.
        </li>
        <li>
          The importance of individuals and the community adopting a lifestyle
          that allows ecologically sustainable development through preventing
          environmental overload, environmental degradation and resource
          depletion.
        </li>
        <li>
          The importance of respect for and equity in dealings with all people,
          irrespective of culture, gender, religion or impairment.
        </li>
        <li>
          The importance of mutual support and help between members of a
          community to maximise the quality of life for all.
        </li>
        <li>
          The importance of the development of understanding between individuals
          as a contribution to peace between nations.
        </li>
        <li>
          The importance of gainful employment in contributing to the sense of
          dignity and self-worth of the individual.
        </li>
        <li>
          The importance of harnessing technological innovation to benefit human
          society.
        </li>
      </ol>
    </section>
    <section className="text-center">
      <h2>Promise and Law</h2>
      <figure>
        <PromotePhoto />
        <figcaption className="figure-caption">
          Investing a Joey Scout
        </figcaption>
      </figure>
      <p>
        Scouts Australia recognises that what we offer is as relevant as ever,
        and can help young people navigate their way through modern life. From
        as young as six years old, our members are introduced to our values at
        the first step in the Scouting journey – learning the Australian Scout
        Promise and the Australian Scout Law.
      </p>
      <div className="row">
        <div className="col-sm text-center">
          <h3>The Australian Scout Promise</h3>
          <p>
            There are two versions of the Australian Scout Promise. Individuals
            may select which version they wish to make.
          </p>
          <p>
            On my honour, I promise <br />
            To do my best,
            <br />
            To be true to my spiritual beliefs,
            <br />
            To contribute to my community and our world,
            <br />
            To help other people,
            <br />
            And to live by the Scout Law.
          </p>
          <p>OR</p>
          <p>
            On my Honour
            <br />I promise that I will do my best
            <br />
            To do my duty to my God,
            <br />
            and To the Queen of Australia,
            <br /> To help other people,
            <br />
            And to live by the Scout Law.
          </p>
        </div>
        <div className="col-sm text-center">
          <h3>The Australian Scout Law</h3>
          <h4>Be Respectful</h4>
          Be friendly
          <br />
          Care for others and the environment
          <h4>Do What is Right</h4>
          Be trustworthy, honest and fair
          <br />
          Use resources wisely
          <h4>Believe in Myself</h4>
          Learn from my experiences
          <br />
          Face challenges with courage
        </div>
      </div>
    </section>
    <h2>Can you Help?</h2>
    <h2>Committee</h2>
    <h2>Branch and Group Fees</h2>
  </Layout>
)

export default GroupPage

const PromotePhoto = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "Scouts_0081.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 960, placeholder: DOMINANT_COLOR)
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.file)
      return (
        <GatsbyImage
          image={image}
          alt="Investing a Joey Scout"
          className="img-fluid"
        />
      )
    }}
  />
)
