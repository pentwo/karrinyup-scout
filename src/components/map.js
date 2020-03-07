import React from "react"

export default function map() {
  return (
    <section className="container-fluid map">
      <h1>Where to find us?</h1>
      <div className="map__frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10182.788690044586!2d115.78363608086917!3d-31.871315958673147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x280f9ff1085825ce!2sKarrinyup%20Scouts!5e0!3m2!1sen!2sau!4v1580523106673!5m2!1sen!2sau"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </section>
  )
}

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10182.788690044586!2d115.78363608086917!3d-31.871315958673147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x280f9ff1085825ce!2sKarrinyup%20Scouts!5e0!3m2!1sen!2sau!4v1580523106673!5m2!1sen!2sau" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
*/
