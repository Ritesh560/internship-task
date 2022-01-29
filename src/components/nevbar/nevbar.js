import React from "react"

// Styles
import "./nevbar.css"

function Nevbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li className="nevItem-1">
            {" "}
            <img src="Img/logo.png" alt="#" className="logo" height="15px" /> Sales Machine
          </li>
          <li className="center">
            <input type="text" placeholder="Search" className="search" />
          </li>
          <li>
            <img src="Img/profilepic2.png" alt="#" className="profilepic" />
            <img src="Img/arrow.png" alt="#" className="navlogo" />
            <img src="Img/logout.png" alt="#" className="navlogo" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nevbar
