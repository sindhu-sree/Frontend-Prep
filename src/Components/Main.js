import React from 'react'
import { Outlet} from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import NavBar from './NavBar/NavBar';

const Main = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div style={{display:"flex",height:"100vh"}} >
        <div style={{position:"relative", width:"260px"  }}>
          <SideBar/>
        </div>
        <div style={{position:"relative",flex:1, display:"Flex", alignItems:"center",justifyContent:"center"}}>
          <Outlet /> {/* This is where child routes will be rendered */}
        </div>
      </div>
    </div>
  )
}

export default Main

