import React from "react"
import { navigate } from "gatsby-link"

import EmailIcon from "../images/email.png"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    const form = e.target

    if (form.name === "phone" && form.value !== "") {
      const value =
        form.value.slice(0, 4) +
        "-" +
        form.value.slice(4, 7) +
        "-" +
        form.value.slice(7)
      setState({ ...state, [form.name]: value })
    } else {
      setState({ ...state, [form.name]: form.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    console.log("form-data", state)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <section className="container-fluid contact">
      <h2 className="text-center">Get in Touch </h2>
      <div className="contact__form">
        <div className="contact__form__text">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thankyou"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="contactName">
                Name <small>*Required</small>
              </label>

              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                id="contactName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">
                Email <small>*Required</small>{" "}
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                id="contactEmail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPhone">Contact Number</label>
              <input
                className="form-control"
                type="tel"
                name="phone"
                pattern="0[0-9]{9}"
                placeholder="Enter contact number"
                onChange={handleChange}
                id="contactPhone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactMessage">
                Message <small>*Required</small>
              </label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter your message..."
                onChange={handleChange}
                id="contactMessage"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary ">
              Send
              <span aria-label="send" role="img">
                📝
              </span>
            </button>
          </form>
        </div>
        <div className="contact__form__icon">
          <img className="icon" alt="email" src={EmailIcon} />
        </div>
      </div>
    </section>
  )
}

export default Contact
