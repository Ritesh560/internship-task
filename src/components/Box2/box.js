import React from "react"

//styles
import "./box.css"

function Box2({ createTabs, state }) {
  const { currentTab } = state
  return (
    <div className="box2">
      <div className="heading">
        <h2>Workspace</h2>
        <div className="left">
          <img className="logo" id="person" src="Img/person.png" alt="person" />
          <img className="logo" id="file" src="Img/file.png" alt="file" />
        </div>
      </div>

      {/* <div className="empty center">
        <img className="logo board" src="Img/board.jpg" alt="Empty" />
        <h3>Your workspace is empty!</h3>
        <p>To add a tab, click on any option on your bottom left</p>
      </div> */}

      <div className="tabs">
        {createTabs()}
        <p className="tab-content">{currentTab.content}</p>
      </div>
    </div>
  )
}

export default Box2
