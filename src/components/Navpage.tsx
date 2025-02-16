import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../page/Home"
import Html from "../page/Html"
import Css from "../page/Css"
import Javascript from "../page/Javascript"
import Tailwind from "../page/Tailwind"
import Reactjs from "../page/Reactjs"
import Reactts from "../page/Reactts"

const Navpage = () => {
  return (
   <React.Fragment>
    <section>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/html"element={<Html></Html>} />
          <Route path="/css" element={<Css></Css>}/>
          <Route path="/javascript" element={<Javascript></Javascript>}/>
          <Route path="/tailwind" element={<Tailwind></Tailwind>}/>
          <Route path="/reactjs" element={<Reactjs></Reactjs>}/>
          <Route path="/reactts" element={<Reactts></Reactts>}/>
        </Routes>
    </section>
   </React.Fragment>
  )
}

export default Navpage