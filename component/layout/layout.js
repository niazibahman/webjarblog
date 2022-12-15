import { useState } from "react";
import BackDrop from "../backdrop/backdrop";
import Header from "../header/header";
import Login from "../login/login";
export default function Layout(props){
    const [showLogin,setShowLogin]=useState(false);

    const changeShowLoginHandler=()=>{
        setShowLogin(!showLogin);
    }
    return(<div className="w-screen h-screen">
        {showLogin&&<Login  click={changeShowLoginHandler}/>}
        {showLogin&&<BackDrop/>}
        <Header click={changeShowLoginHandler}/>
        {props.children}
    </div>);
}