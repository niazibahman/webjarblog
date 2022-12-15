export default function Header(props){
    return(
        <div className="w-full bg-white drop-shadow-header">
            <header className="lg:container px-4 lg:px-0 flex flex-row justify-between items-center h-24 mx-auto">
                <div className="text-greenAccent text-2xl font-bold">&#60;&#47;&#62;</div>
                <nav className="h-full">
                    <ul className="text-black37 h-full flex flex-row items-center justify-center">
                        <li className="hover:text-greenAccent cursor-pointer ml-8 lg:ml-12">خانه</li>
                        <li className="hover:text-greenAccent cursor-pointer ml-8 lg:ml-12">محصولات</li>
                        <li className="hover:text-greenAccent cursor-pointer ml-8 lg:ml-12">خدمات</li>
                        <li className="text-greenAccent cursor-pointer ml-8 lg:ml-12 border-b-2 border-greenAccent">وبلاگ</li>
                    </ul>
                </nav>
                <button onClick={props.click} className="text-greenAccent bg-white border border-greenAccent rounded-15px text-center px-6 py-3 hover:drop-shadow-xmd">ورود</button>
            </header>
        </div>
    );
}