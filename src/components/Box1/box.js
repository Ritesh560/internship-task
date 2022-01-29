import React, { useEffect } from "react"

//styles
import "./box.css"

function Box1({ handleAddTab }) {
  return (
    <>
      <div className="box1">
        <div className="about">
          <div className="intro">
            <h3>
              Jean Samuel Najnudel <img className="logo last" src="Img/edit.png" alt="edit" /> <img className="logo" src="Img/shield.png" alt="edit" />{" "}
            </h3>
            <h5>President</h5>
            <h4>
              Ringover | <img className="logo" src="Img/people.png" alt="edit" /> 101-250
            </h4>
            <a href="http://www.ringover.com">http://www.ringover.com</a>
            <div className="social-media">
              <img className="logo" src="Img/linkedin.png" alt="edit" />
              <img className="logo" src="Img/cloud.png" alt="edit" />
            </div>
          </div>
          <h3>Topics</h3>
          <div className="topics">
            <p className="topicBox">Some topic</p>
            <p className="topicBox">Some topic name</p>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p>
              {" "}
              <img className="logo" src="Img/email.png" alt="edit" /> j.nanjnudel@ringover.com
            </p>
            <p>
              <img className="logo" src="Img/phone-.png" alt="edit" /> +33 07 55 35 23 21 <small>primary</small>{" "}
            </p>
            <p>
              {" "}
              <img className="logo" src="Img/phone-.png" alt="edit" /> +33 99 53 05 19 21
            </p>
          </div>
          <h3>Additional</h3>
          <p>
            {" "}
            <img className="logo" src="Img/email.png" alt="edit" /> president@ringover.com
          </p>
          <p>
            {" "}
            <img className="logo" src="Img/translate.png" alt="edit" /> Francais
          </p>
          <img className="logo" src="Img/link.png" alt="edit" /> <a href="www.youtube.com/ringover">www.youtube.com/ringover</a>
          <p>
            <img className="logo" src="Img/worldwide.png" alt="edit" /> Indian Standard (+5:30)
          </p>
        </div>

        <div className="features">
          <img className="logo phone" src="Img/call.png" alt="edit" />
          <div className="sub-contacts">
            <img className="logo" src="Img/video-camera.png" alt="edit" onClick={() => handleAddTab()} />
            <img className="logo" src="Img/calendar.png" alt="edit" onClick={() => handleAddTab()} />
            <img className="logo" src="Img/email.png" alt="edit" onClick={() => handleAddTab()} />
            <img className="logo" src="Img/message.png" alt="edit" onClick={() => handleAddTab()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Box1
