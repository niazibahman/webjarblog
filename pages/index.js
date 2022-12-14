import Head from 'next/head';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import { useEffect } from 'react';


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

 function Home({ data }) {

  return (
    <div>
      <Head>
        <title>webjar blog</title>
      </Head>

      <main className='w-full h-full'>
        <div className='lg:container px-4 lg:px-0 flex flex-col items-center mx-auto'>
        <div className='w-full flex flex-row justify-start my-4'>
          <span>خانه</span>
          <span className='mx-2'>&#62;</span>
          <span className='text-greenAccent'>وبلاگ</span>
        </div>
        <h1 className='font-yekanUltraBold text-34px my-4'>وبلاگ</h1>
        <TextField className='drop-shadow-search w-80 md:w-96 rounded-15px caret-greenAccent' variant="outlined" type="search" placeholder='جستجو کنید ...'
           InputProps={{
             style:{borderColor:'red',borderRadius:'15px',backgroundColor:'white',height:'40px'},
             startAdornment: (
               <InputAdornment position="start">
                 <Search/>
               </InputAdornment>
            ),
           }}/>
        </div>
      </main>
    </div>
  )
}

export default Home