import React from "react"
import Mainpage from "./components/Mainpage"
import { BrowserRouter } from "react-router-dom"
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Mainpage></Mainpage>
      </BrowserRouter>
      
    </React.Fragment>
  )
}

export default App