import React, { useState, useEffect } from "react"

import "./App.css"

//components
import Nevbar from "./components/nevbar/nevbar"
import Box1 from "./components/Box1/box"
import Box2 from "./components/Box2/box"
import Box3 from "./components/Box3/box"

//Adding and Deleting tabs
function App() {
  const [tabs, setTabs] = useState([])

  const handleAddTab = (text) => {
    if (tabs.length < 4) {
      setTabs([...tabs, text])
    }
  }

  const handelRemoveTab = (index) => {
    setTabs(tabs.filter((_, i) => i !== index))
  }

  return (
    <>
      <Nevbar />
      <div className="layout">
        <Box1 handleAddTab={handleAddTab} handelRemoveTab={handelRemoveTab} />
        <Box2 tabs={tabs} handelRemoveTab={handelRemoveTab} />
        <Box3 />
      </div>
    </>
  )
}

export default App
