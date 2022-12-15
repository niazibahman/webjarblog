import Image from "next/image";
import { CalendarTodayOutlined,ChatBubbleOutline,Person2Outlined } from '@mui/icons-material';
export default function BlogCard({data}){
    let publishDate = new Date(Date.parse(data.createdAt));
    let persianDate= publishDate.toLocaleDateString('fa-IR');

    return(<div className="w-full grid grid-cols-4 gap-2 rounded-15px bg-white my-2">
        <div className="col-span-1 rounded-r-15px">
            <img src={data.introImageUrl.host.concat(data.introImageUrl.path)} alt={data.title} className="rounded-r-15px"/>
        </div>
        <div className=" col-span-3 h-48 flex flex-row">
            <div className="w-4/5 flex flex-col justify-between">
                <h2 className="font-yekanRegular mb-2">{data.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.body }} className="text-sm h-full overflow-y-hidden"></div>
                <div className="flex flex-row items-center justify-around text-xs">
                    <div className="flex flex-row items-center">
                        <CalendarTodayOutlined className="w-5 h-5 ml-1"/>
                        <span>{persianDate}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <ChatBubbleOutline className="w-5 h-5 ml-1"/>
                        <span>{data.commentCount}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <Person2Outlined className="w-5 h-5 ml-1"/>
                        <span>{data.author}</span>
                    </div>
                </div>
            </div>
            <div className="w-1/5 flex flex-col justify-end mr-2">
                <button className="text-white bg-greenAccent rounded-15px text-center px-6 py-3 hover:drop-shadow-xmd">بیشتر</button>
            </div>
        </div>
    </div>);
}