import Head from 'next/head';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import BlogCard from '../component/blogcard/blogcard';
import { useState } from 'react';


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

  const changeCategoryStateHandler=(index)=>{
    let tempCategoryState=[...categoryState];
    tempCategoryState[index]=!tempCategoryState[index];
    setCategoryState([...tempCategoryState]);
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
        <TextField className='drop-shadow-search w-80 md:w-96 rounded-15px caret-greenAccent' variant="outlined" type="search" placeholder='جستجو کنید ...'
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
                <div className='flex flex-row lg:flex-col text-sm md:text-base whitespace-nowrap'>
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
                data.map(x=><BlogCard data={x}/>)
              }
            </div>
           </div>
        </div>
      </main>
    </div>
  )
}