import React, { useState } from "react"

//styles
import "./box.css"

function Box3() {
  const [show, setShow] = useState("Activity")

  return (
    <div className="box3">
      <div className="buttons">
        <button className="btn">
          {" "}
          <img src="img/upload.png" alt="upload" className="logo" /> Salesforce
        </button>
        <button className="btn1">
          <img className="logo" src="Img/pause.png" alt="||" />
          <img src="Img/recording.jpeg" alt="" className="logo" />
        </button>
      </div>
      <div className="tasks">
        <button className="btn2" id="activity" onClick={() => setShow("Activity")}>
          Activity
        </button>
        <button className="btn2" id="task" onClick={() => setShow("Task")}>
          Tasks
        </button>
        <button
          className="btn2"
          id="progress"
          onClick={() => {
            setShow("Progress")
          }}
        >
          Progress
        </button>
      </div>
      {(() => {
        if (show === "Activity") {
          document.getElementById("activity").classList.add("hover")
          document.getElementById("task").classList.remove("hover")
          document.getElementById("progress").classList.remove("hover")
          return <h1>Activity</h1>
        } else if (show === "Task") {
          document.getElementById("task").classList.add("hover")
          document.getElementById("activity").classList.remove("hover")
          document.getElementById("progress").classList.remove("hover")
          return <h1>Task</h1>
        } else {
          document.getElementById("progress").classList.add("hover")
          document.getElementById("task").classList.remove("hover")
          document.getElementById("activity").classList.remove("hover")
          return <h1>Progress</h1>
        }
      })()}
    </div>
  )
}

export default Box3
