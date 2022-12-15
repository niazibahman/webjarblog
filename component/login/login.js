import { Person2Outlined } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
export default function Login(props){
    return(<div className="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 z-7100 flex flex-col justify-center items-center">
        <div className="w-10/12 md:w-3/4 lg:w-3/5 h-5/6 lg:h-4/5 z-7200 bg-white flex flex-col items-center justify-center">
            <span className="font-yekanRegular text-2xl mb-5">ورود به حساب کاربری</span>
            <div className="w-2/3 md:w-1/2 lg:w-2/5  flex flex-col items-center">
            <div className="flex flex-col justify-center w-full">
                <label form="username">نام کاربری</label>
                <TextField id='username' className='drop-shadow-search mt-2 w-full rounded-15px caret-greenAccent' variant="outlined" type="text" placeholder='جستجو کنید ...'
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
                <TextField id='password' className='drop-shadow-search mt-2 w-full rounded-15px caret-greenAccent' variant="outlined" type="password" placeholder='جستجو کنید ...'
                    InputProps={{
                    style:{borderRadius:'15px',backgroundColor:'white',height:'40px'},
                    startAdornment: (
                     <InputAdornment position="start">
                      <Person2Outlined/>
                     </InputAdornment>
                ),}}/>
            </div>
            <button className="bg-greenAccent text-white w-full h-12 rounded-15px mt-8">ورود</button>
            </div>
            <div className="flex flex-col justify-center"></div>
        </div>
    </div>);
}