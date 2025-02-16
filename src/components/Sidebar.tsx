import React from "react"
import { SidebarData } from "../data/SidebarData"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    const activeLink = ' flex justify-start items-center text-white space-x-1 text-2xl font-bold hover:bg-blue-500 pl-7 mt-7 w-full h-14 bg-blue-500'
    const normalLink = ' flex justify-start items-center text-white space-x-1 text-2xl font-bold hover:bg-blue-500 pl-7 mt-7 w-full h-14'
  return (
    <React.Fragment>
        <section>
            <div className="text-white">
                {
                    SidebarData.map((item, index)=>{
                        return(
                            <div  key={index} >

                                <NavLink to={item.part} 
                                className={({isActive})=>
                                    isActive? activeLink:normalLink
                                }>
                                    <span>{item.icons}</span>
                                    <span>{item.title}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </React.Fragment>
  )
}

export default Sidebar