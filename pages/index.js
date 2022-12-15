import Head from 'next/head';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import BlogCard from '../component/blogcard/blogcard';
import { useState } from 'react';
import { ArrowBackIosNewOutlined,ArrowForwardIosOutlined,Person2Outlined } from '@mui/icons-material';


export async function getStaticProps(){
  var allPosts=[];
  var data= await axios.get("https://challenge.webjar.ir/posts")
  if(data.status===200){
    allPosts=data.data
  }
  return {
    props: {
      data : allPosts
    }
  }
}

export default function Home({ data }) {
  const [categoryState,setCategoryState]=useState([false,false,false,false,false]);
  const [dataSource,setDataSource]=useState(data)
  const [dataForShow,setDataForShow]=useState(dataSource.slice(0,5))
  const [totalPage,setTotalPage]=useState(Math.ceil(dataSource.length/5))
  const [currentPage,setCurrentPage]=useState(1);

  const changeCategoryStateHandler=(index)=>{
    let tempCategoryState=[...categoryState];
    tempCategoryState[index]=!tempCategoryState[index];
    setCategoryState([...tempCategoryState]);
    let tempdata=[];
    if(tempCategoryState.includes(true) && tempCategoryState.includes(false)){
      data.map(x=>{
        if(tempCategoryState[0]===true){
          if(x.category.endsWith("a")===true){tempdata.push(x)}
        }
        if(tempCategoryState[1]===true){
          if(x.category.endsWith("b")===true){tempdata.push(x)}
        }
        if(tempCategoryState[2]===true){
          if(x.category.endsWith("c")===true){tempdata.push(x)}
        }
        if(tempCategoryState[3]===true){
          if(x.category.endsWith("d")===true){tempdata.push(x)}
        }
        if(tempCategoryState[4]===true){
          if(x.category.endsWith("1")===true){tempdata.push(x)}
        }
      });
      setDataSource(tempdata);
      setTotalPage(Math.ceil(tempdata.length/5));
      setDataForShow(tempdata.slice(0,5));
    }else{
      setDataSource(data);
      setTotalPage(Math.ceil(data.length/5));
      setDataForShow(data.slice(0,5));
    }
  };

  const changePageNumberHandler=(index)=>{
    setCurrentPage(index);
    setDataForShow(dataSource.slice(index,(index+5)));
  };

  const changeSearchHandler=(e)=>{
    if(e.target.value !== ""){
      let tempData=[];
      dataSource.map(x=>{
        if(x.body.includes(e.target.value) === true){
          tempData.push(x);
        }
      });
      setDataSource(tempData);
      setTotalPage(Math.ceil(tempData.length/5))
      setDataForShow(tempData.slice(0,5))
    }
  };
  
  return (
    <div>
      <Head>
        <title>webjar blog</title>
      </Head>

      <main className='w-full h-full'>
        <div className='lg:container px-4 lg:px-0 flex flex-col items-center mx-auto'>
        <div className='w-full flex flex-row justify-start my-4 text-black37'>
          <span>خانه</span>
          <span className='mx-2'>&#62;</span>
          <span className='text-greenAccent'>وبلاگ</span>
        </div>
        <h1 className='font-yekanUltraBold text-34px my-4 text-black'>وبلاگ</h1>
        <TextField onChange={changeSearchHandler} className='drop-shadow-search w-80 md:w-96 rounded-15px caret-greenAccent' variant="outlined" type="search" placeholder='جستجو کنید ...'
           InputProps={{
             style:{borderColor:'red',borderRadius:'15px',backgroundColor:'white',height:'40px'},
             startAdornment: (
               <InputAdornment position="start">
                 <Search/>
               </InputAdornment>
            ),
           }}/>
           <div className='w-full grid grid-cols-1 lg:grid-cols-4 lg:gap-4 my-4'>
            <div className='col-span-1 col-start-1'>
              <div className='w-full flex flex-col'>
                <span className='font-yekanBold text-md text-black37'>دسته بندی</span>
                <div className='flex flex-row lg:flex-col text-sm md:text-base'>
                  <div className='w-full pl-4 flex flex-row items-center lg:justify-between lg:my-1'>
                    <label form='computerCHK' className='text-grayText'>کامپیوتر</label>
                    <input id='computerCHK' onChange={()=>changeCategoryStateHandler(0)} checked={categoryState[0]} type="checkbox"  className="accent-greenAccent w-4 h-4 cursor-pointer mx-2"/>
                  </div>
                  <div className='w-full pl-4 flex flex-row items-center lg:justify-between lg:my-1'>
                    <label form='computerCHK' className='text-grayText'>سیستم های اداری</label>
                    <input id='computerCHK' onChange={()=>changeCategoryStateHandler(1)} checked={categoryState[1]} type="checkbox"  className="accent-greenAccent w-4 h-4 cursor-pointer mx-2"/>
                  </div>
                  <div className='w-full pl-4 flex flex-row items-center lg:justify-between lg:my-1'>
                    <label form='computerCHK' className='text-grayText'>سیستم های تجاری</label>
                    <input id='computerCHK' onChange={()=>changeCategoryStateHandler(2)} checked={categoryState[2]} type="checkbox"  className="accent-greenAccent w-4 h-4 cursor-pointer mx-2"/>
                  </div>
                  <div className='w-full pl-4 flex flex-row items-center lg:justify-between lg:my-1'>
                    <label form='computerCHK' className='text-grayText'>سیستم های عمومی</label>
                    <input id='computerCHK' onChange={()=>changeCategoryStateHandler(3)} checked={categoryState[3]} type="checkbox"  className="accent-greenAccent w-4 h-4 cursor-pointer mx-2"/>
                  </div>
                  <div className='w-full pl-4 flex flex-row items-center lg:justify-between lg:my-1'>
                    <label form='computerCHK' className='text-grayText'>سیستم های آموزشی</label>
                    <input id='computerCHK' onChange={()=>changeCategoryStateHandler(4)} checked={categoryState[4]} type="checkbox"  className="accent-greenAccent w-4 h-4 cursor-pointer mx-2"/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              {
                dataForShow.map(x=><BlogCard data={x}/>)
              }
            </div>
            {
              totalPage > 1?
              <div className='col-span-3 col-end-5 flex flex-row items-center justify-center'>
                <button onClick={currentPage===totalPage?()=>{}:()=>changePageNumberHandler(currentPage+1)} className='w-8 h-8 rounded-15px bg-white flex flex-col justify-center items-center'>
                  <ArrowForwardIosOutlined color='success'/>
                </button>
                {
                  Array(totalPage).fill(true).map((x,index)=><button onClick={()=>changePageNumberHandler((totalPage-index))} key={index} className={`w-8 h-8 rounded-15px flex flex-col justify-center items-center ${(totalPage-index) === currentPage?"bg-greenAccent text-white":"bg-white text-greenAccent"}`}>{totalPage-index}</button>)
                }
                <button onClick={currentPage===1?()=>{}:()=>changePageNumberHandler(currentPage-1)} className='w-8 h-8 rounded-15px bg-white flex flex-col justify-center items-center'>
                  <ArrowBackIosNewOutlined color='success'/>
                </button>
              </div>:null
            }
           </div>
        </div>
      </main>
    </div>
  )
}