import React from "react"

import LNTLogo from "../images/leave-no-trace-logo.svg"
import AusScoutLogo from "../images/scouts-aus-logo-black.png"
import WorldScout from "../images/world-scout-emblem.png"

export default function about() {
  return (
    <section className="container about">
      <h1 className="text-center">
        We are Karrinyup Leave No Trace Scout Group
      </h1>
      <div className="logos">
        <img
          src={WorldScout}
          alt="World Scout Emblem"
          style={{ maxWidth: 100 + "px" }}
        />
        <img
          src={AusScoutLogo}
          alt="Australia Scout Logo"
          style={{
            maxWidth: 250 + "px",
          }}
        />
        <img
          src={LNTLogo}
          alt="Leave no trace logo"
          style={{ maxWidth: 200 + "px" }}
        />
      </div>
      <p className="lead text-center">
        At{" "}
        <span className="highlight">Karrinyup Leave No Trace Scout Group,</span>{" "}
        <br />
        we offer people of all ages a variety of exciting experiences including
        <br />
        <span className="emoji" role="img" aria-label="camping">
          🏕️
        </span>
        camping,{" "}
        <span className="emoji" role="img" aria-label="hiking">
          🥾
        </span>
        hiking,
        <span className="emoji" role="img" aria-label="water activities">
          🏊
        </span>
        water activities,
        <span className="emoji" role="img" aria-label="canoeing">
          🚣
        </span>
        canoeing... and much more.
        <br />
        Providing rewarding service project and leadership opportunities <br />
        and most of all, <span className="highlight">fun</span> and{" "}
        <span className="highlight">friendship.</span>
        <br />
        Scouting is all about{" "}
        <span className="highlight">Learning Through Doing.</span>
        <br /> and we follow the principle of
        <span className="emoji" role="img" aria-label="plan">
          📅
        </span>
        Plan
        <span className="emoji" role="img" aria-label="do">
          💪
        </span>
        Do
        <span className="emoji" role="img" aria-label="review">
          📝
        </span>
        Review
      </p>
    </section>
  )
}
