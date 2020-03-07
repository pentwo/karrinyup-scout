import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    const form = form

    if (form.name === "phone" && form.value !== "") {
      const value =
        form.value.slice(0, 4) +
        "-" +
        form.value.slice(4, 7) +
        "-" +
        form.value.slice(7)

      console.log("value: ", value)
      setState({ ...state, [form.name]: value })
    } else {
      setState({ ...state, [form.name]: form.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
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
            action="/"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label for="contactName">
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
              <label for="contactEmail">
                Email <small>*Required</small>
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
              <label for="contactPhone">Contact Number</label>
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
              <label for="contactMessage">
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
              Send 📝
            </button>
          </form>
        </div>
        <div className="contact__form__icon">
          <img
            className="icon"
            src="https://img.icons8.com/clouds/320/000000/email.png"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
