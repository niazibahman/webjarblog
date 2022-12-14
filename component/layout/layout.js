import Header from "../header/header";
export default function Layout(props){
    return(<div className="bg-white font-yekan w-screen h-screen">
        <Header/>
        {props.children}
    </div>);
}