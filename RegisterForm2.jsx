import React,{useState} from 'react'
import "./Forms.css"
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import Register_Login_Button from "./Form/register/src/components/Register_Login_Button"
const RegisterForm2 = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [edu, setEdu] = useState('');
    const [os, setOs] = useState('');
    const [showAddTask2, setShowAddTask2] = useState(true);
    return (
        <form className="register-form">
        <Register_Login_Button
          classes={`btn--right ${showAddTask2?"isactive":null}`}
          btn_lable="ثبت نام"
          action={() => setShowAddTask2(!showAddTask2)}
        ></Register_Login_Button>
        <Register_Login_Button
          classes={`btn--left ${!showAddTask2?"isactive":null}`}
          action={() => setShowAddTask2(!showAddTask2)}
          btn_lable="ورود"
        ></Register_Login_Button>
         <h1 className="title">رایگان ثبت نام کنید</h1>
         <input type="text" placeholder="نام"className="name" />
         <input type="text" placeholder=" نام خانوادگی" className="lastName"/>
         <input type="text" placeholder="پست الکترونیکی"/>
         <div>
         <div>
           {isRevealPwd ? <FaEye className="eye" onClick={() => setIsRevealPwd(prevState => !prevState)}></FaEye> 
           : 
           <FaEyeSlash className="eye" onClick={() => setIsRevealPwd(prevState => !prevState)}></FaEyeSlash> }   
           </div>
        
         <input           
       name="pwd"
       placeholder="رمز عبور"
       type={isRevealPwd ? "text" : "password"}
       value={pwd}
       onChange={e => setPwd(e.target.value)}/>
         </div>
         <input type="text" onChange={e => setEdu(e.target.value) } placeholder="مدرک" value={edu}/>
         {edu!==""?<input type="text" placeholder="محل تحصیل"/> : ""}
         
         <select name="ostan" id="" placeholder="استان"onChange={e => setOs(e.target.value) }  value={os} >
             <option>تهران</option>
             <option >اصفهان</option>
             <option >قزوین</option>
             <option >مشهد</option>
             <option >اردبیل</option>
             <option >گیلان</option>
             <option >مازندران</option>
             <option >بم</option>
         </select>
         {/* {{setOs}=='مشهد' ?console.log("hi") : ""} */}
  
             {os==="تهران"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>1شهر</option>
             <option >2شهر</option>
         </select> : ""}
             {os==="اصفهان"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>3شهر</option>
             <option >4شهر</option>
         </select> : ""}
             {os==="قزوین"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>5شهر</option>
             <option >6شهر</option>
         </select> : ""}
             {os==="مشهد"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>7شهر</option>
             <option >8شهر</option>
         </select> : ""}
         {os==="اردبیل"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>9شهر</option>
             <option >10شهر</option>
         </select> : ""}
         {os==="اردبیل"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>11شهر</option>
             <option >12شهر</option>
         </select> : ""}
         {os==="گیلان"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>13شهر</option>
             <option >14شهر</option>
         </select> : ""}
         {os==="مازندران"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>15شهر</option>
             <option >16شهر</option>
         </select> : ""}
         {os==="بم"?            
             <select name="ostan" id="" placeholder="شهر" >
             <option>17شهر</option>
             <option >18شهر</option>
         </select> : ""}
  
         <Register_Login_Button classes="btn-form" btn_lable="ثبت نام"></Register_Login_Button>
     </form>
    )
}

export default RegisterForm2
