import React, { useState, useEffect } from "react"
import uuid from "uuid"

import "./App.css"

//components
import Nevbar from "./components/nevbar/nevbar"
import Box1 from "./components/Box1/box"
import Box2 from "./components/Box2/box"
import Box3 from "./components/Box3/box"

//Adding and Deleting tabs
const i = 0
var tabsNumber = 0

const state = {
  tabs: [
    { id: 1, name: "Tab 1", content: "Wow this is tab 1", class: `${tabsNumber > 0 ? "show" : "hide"}` },
    { id: 2, name: "Tab 2", content: "Look at me, it's Tab 2", class: `${tabsNumber > 0 ? "show" : "hide"}` },
    { id: 3, name: "Tab 3", content: "Look at me, it's Tab 2", class: `${tabsNumber > 0 ? "show" : "hide"}` },
    { id: 4, name: "Tab 4", content: "Look at me, it's Tab 2", class: `${tabsNumber > 0 ? "show" : "hide"}` },
  ],
  currentTab: { id: 1, name: "Tab 1", content: "Wow this is tab 1" },
}

const handleAddTab = () => {
  alert("hi")
  tabsNumber = tabsNumber + 1
}

const createTabs = () => {
  const { tabs, currentTab } = state
  return tabs.map((tab) => {
    return tab.class === "show" ? (
      <button className={currentTab.id === tab.id ? "tabbtn active" : "tabbtn"}>
        {tab.name}{" "}
        <img
          src="Img/cut.png"
          alt="X"
          onClick={() => {
            tabsNumber = tabsNumber - 1
          }}
        />{" "}
      </button>
    ) : (
      <div></div>
    )
  })
}

function App() {
  const { currentTab, tabs } = state
  useEffect(() => {
    var a = tabsNumber
    tabs.map((tab) => {
      tab.class = `${a ? "show" : "hidden"}`
      a--
    })
  }, [tabsNumber])
  return (
    <>
      <Nevbar />
      <div className="layout">
        <Box1 handleAddTab={handleAddTab} />
        <Box2 createTabs={createTabs} state={state} />
        <Box3 />
      </div>
    </>
  )
}

export default App
