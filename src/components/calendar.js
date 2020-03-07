import React from "react"

export default function calendar() {
  // const width = document.documentElement.clientWidth

  // const calMode = width > 568 ? "MONTH" : "AGENDA"
  return (
    <section className="container-fluid calendar">
      <h2 className="text-center"> Our calendar</h2>
      <iframe
        id="558097969"
        src={`https\://calendar.google.com/calendar/embed?src=karrinyuplnthallhire@gmail.com&color=%23212e67&mode=MONTH&ctz=GMT+8&showTitle=0&showNav=1&showDate=1&showTabs=1&showCalendars=0&hl=en`}
        title="karrinyuplnthallhire@gmail.com"
        scrolling="no"
        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe>
    </section>
  )
}

/*
<iframe id="558097969" src="https://calendar.google.com/calendar/embed?src=karrinyuplnthallhire@gmail.com&color=%23668CD9&mode=MONTH&ctz=Etc/GMT-8&showTitle=0&showNav=1&showDate=1&showTabs=1&showCalendars=0&hl=en" title="karrinyuplnthallhire@gmail.com" scrolling="no" width="400" height="300" frameborder="0"></iframe>
*/
