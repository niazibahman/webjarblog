import { Person2Outlined } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef,useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
export default function Login(props){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const [error,seterror]=useState(false);
    const [loading,setLoading]=useState(false);


    const changeUserNameHandler=(event)=>{
        setUsername(event.target.value);
    };

    const changePasswordHandler=(event)=>{
        setPassword(event.target.value);
    };

    const loginHandler=async()=>{
        if(username === "" ||username === null || password ===""||password ===null){
            setMessage("لطفا نام کاربری و رمز را وارد کنید!");
            setTimeout(()=>{setMessage("")},2000)
            return
        }
        setLoading(true);
        try{
            let response = await axios.post('https://challenge.webjar.ir/auth/login',{
            "userName": username,
            "password": password
        });
        if(response.status === 200){
            setMessage("ورود با موفقیت انجام شد");
            setTimeout(() => {
                props.click();
            }, 1000);
        }else{
            seterror(true);
            setMessage("نام کاربری یا رمز عبور اشتباه است");
            setTimeout(() => {
                setMessage("");
                setLoading(false);
            }, 2000);
        }
        }catch(error){
            seterror(true);
            setMessage("مشکل در برقراری ارتباط!");
            setTimeout(() => {
                setMessage("");
                setLoading(false);
            }, 2000);
        }
    }

    return(<div className="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 z-7100 flex flex-col justify-center items-center">
        <div className="w-10/12 md:w-3/4 lg:w-3/5 h-5/6 lg:h-4/5 z-7200 bg-white flex flex-col items-center justify-center">
            <span className="font-yekanRegular text-2xl mb-5">ورود به حساب کاربری</span>
            <div className="w-2/3 md:w-1/2 lg:w-2/5  flex flex-col items-center">
            <div className="flex flex-col justify-center w-full">
                <label form="username">نام کاربری</label>
                <TextField error={error} onChange={changeUserNameHandler} id='username' className='drop-shadow-search mt-2 w-full rounded-15px caret-greenAccent' variant="outlined" type="text" placeholder='جستجو کنید ...'
                    InputProps={{
                    style:{borderRadius:'15px',backgroundColor:'white',height:'40px'},
                    startAdornment: (
                     <InputAdornment position="start">
                      <Person2Outlined/>
                     </InputAdornment>
                ),}}/>
            </div>
            <div className="flex flex-col justify-center w-full mt-4">
                <label form="password">رمز عبور</label>
                <TextField error={error} onChange={changePasswordHandler} id='password' className='drop-shadow-search mt-2 w-full rounded-15px caret-greenAccent' variant="outlined" type="password" placeholder='جستجو کنید ...'
                    InputProps={{
                    style:{borderRadius:'15px',backgroundColor:'white',height:'40px'},
                    startAdornment: (
                     <InputAdornment position="start">
                      <Person2Outlined/>
                     </InputAdornment>
                ),}}/>
            </div>
            <button onClick={()=>loginHandler()} className="bg-greenAccent text-white w-full h-12 rounded-15px mt-8">{loading === true ?<CircularProgress color="inherit" className="w-6 h-6"/>:"ورود"}</button>
            {message !== ""?<div>{message}</div>:null}
            </div>
            <div className="flex flex-col justify-center"></div>
        </div>
    </div>);
}