import { useEffect } from "react";
export default function BackDrop(props){
    useEffect(()=>{document.body.style.overflow = 'hidden'},[]);     
    useEffect(()=>()=>{document.body.style.overflow = 'scroll'},[]);
    return(
        <div onClick={props.click} className='w-screen h-screen fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 z-7000'/>
    );

}