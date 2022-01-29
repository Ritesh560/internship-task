import React, { useState } from "react"

//styles
import "./box.css"

function Box2({ tabs, handelRemoveTab }) {
  const [activeTab, setActiveTab] = useState([tabs[0]])

  return (
    <div className="box2">
      <div className="heading">
        <h2>Workspace</h2>
        <div className="left">
          <img className="logo" id="person" src="Img/person.png" alt="person" />
          <img className="logo" id="file" src="Img/file.png" alt="file" />
        </div>
      </div>

      {tabs.length === 0 ? (
        <div className="empty center">
          <img className="logo board" src="Img/board.jpg" alt="Empty" />
          <h3>Your workspace is empty!</h3>
          <p>To add a tab, click on any option on your bottom left</p>
        </div>
      ) : (
        <div className="TabContainer">
          <div className="tabs">
            {tabs.map((tab, i) => {
              return (
                <div className="tabbtn" onClick={() => setActiveTab(tab)}>
                  {tab}
                  <img
                    src="Img/cut.png"
                    alt="X"
                    onClick={() => {
                      handelRemoveTab(i)
                    }}
                  />
                </div>
              )
            })}
          </div>

          <div className="tabContent">{activeTab}</div>
        </div>
      )}
    </div>
  )
}

export default Box2
