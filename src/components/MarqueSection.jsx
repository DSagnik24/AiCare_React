import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MarqueeSection() {
  return (
    <div
      className="position-fixed bottom-0 w-100 bg-warning py-2 px-3 text-black fw-bold z-3"
      style={{ overflow: 'hidden', height: '2.5rem' }}
    >
      <marquee
        behavior=""
        direction="left"
        scrollamount="15"
        className="fs-6 fs-lg-4"
      >
        <span className="text-danger fw-bolder me-4">
          AICARE 2025 Topics (but not limited to):
        </span>
        Applications of AI in Computing, UAV Networks, Astronomy, Renewable Energy.
        <a
          href="subPages/Trackpagefinal.html"
          className="text-danger text-decoration-underline fw-bolder ms-3"
        >
          🚀 View Tracks
        </a>
      </marquee>
    </div>
  )
}
