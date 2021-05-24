import React,{useState} from 'react'
import "./Forms.css"
import "../Font/vazir/Vazir.css"
import Register_Login_Button from"./Register_Login_Button"
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import Modal from "./Modal"
const RegisterForm = ({Register,set}) => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [edu, setEdu] = useState('');
    const [eduP, setEduP] = useState('');
    const [os, setOs] = useState('');
    const [showmodal, setShowmodal] = useState(false)
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const register=()=>{
        const emailPattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validemail=emailPattern.test(email);
        if (name==""||name==Number||lastname===Number||lastname==="") {
            alert("نام خود را صحیح وارد کنید")
        }
        if (validemail) {
            setShowmodal(!showmodal)
        }
    }
    const closeModal =(e)=>{
        setShowmodal(!showmodal);
        e.preventDefault()
      }
    return (
        <div>
            <form className="register-form" onSubmit={(e)=>e.preventDefault() } name={Register}>
      <Register_Login_Button
        classes={`btn--right ${Register=="register"?"isactive":null}`}
        btn_lable="ثبت نام"
        action={set}
      />
      <Register_Login_Button
        classes={`btn--left ${Register==="login"?"isactive":null}`}
        action={set}
        btn_lable="ورود"
      />
       <h1 className="title">رایگان ثبت نام کنید</h1>
       <input  placeholder="نام"className="name" onChange={e =>setName(e.target.value)} required/>
       <input  placeholder=" نام خانوادگی" className="lastName" onChange={e =>setLastName(e.target.value)} required/>
       <input type="text" placeholder="پست الکترونیکی" onChange={e =>setEmail(e.target.value)} required/>
       <div>
       <div>
         {isRevealPwd ? <FaEye className="eye" onClick={() => setIsRevealPwd(prevState => !prevState)}/>
         : 
         <FaEyeSlash className="eye" onClick={() => setIsRevealPwd(prevState => !prevState)}/> }   
         </div>
      
       <input           
     name="pwd"
     placeholder="رمز عبور"
     type={isRevealPwd ? "text" : "password"}
     onChange={e => setPwd(e.target.value)}
     value={pwd}
      required/>
       </div>
       <input type="text" onChange={e => setEdu(e.target.value) } placeholder="مدرک" value={edu} required/>
       {edu!==""?<input type="text" placeholder="محل تحصیل" onChange={e => setEduP(e.target.value) }/> : ""}
       
       <select name="ostan" id="" placeholder="استان"onChange={e => setOs(e.target.value) }  value={os} required>
           <option>تهران</option>
           <option >اصفهان</option>
           <option >قزوین</option>
           <option >مشهد</option>
           <option >اردبیل</option>
           <option >گیلان</option>
           <option >مازندران</option>
           <option >بم</option>
       </select>

           {os==="تهران"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>1شهر</option>
           <option >2شهر</option>
       </select> : ""}
           {os==="اصفهان"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>3شهر</option>
           <option >4شهر</option>
       </select> : ""}
           {os==="قزوین"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>5شهر</option>
           <option >6شهر</option>
       </select> : ""}
           {os==="مشهد"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>7شهر</option>
           <option >8شهر</option>
       </select> : ""}
            {os==="اردبیل"?            
           <select name="ostan" id="" placeholder="شهر" required >
           <option>9شهر</option>
           <option >10شهر</option>
       </select> : ""}
            {os==="اردبیل"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>11شهر</option>
           <option >12شهر</option>
       </select> : ""}
            {os==="گیلان"?            
           <select name="ostan" id="" placeholder="شهر"required >
           <option>13شهر</option>
           <option >14شهر</option>
       </select> : ""}
            {os==="مازندران"?            
           <select name="ostan" id="" placeholder="شهر" required>
           <option>15شهر</option>
           <option >16شهر</option>
       </select> : ""}
            {os==="بم"?            
           <select name="ostan" id="" placeholder="شهر"required >
           <option>17شهر</option>
           <option >18شهر</option>
       </select> : ""}

       <Register_Login_Button classes="btn-form" btn_lable="ثبت نام" action={register}/>
       {showmodal&&<Modal email={email} name={name} lastname={lastname} os={os} text_os="استان : " text_edu="مدرک : "  text_eduP="محل تحصیل : " edu={edu} eduP={eduP} text_lable="ثبت نام شما انجام شد با ایمیل :" close={closeModal}/>}
   </form>
        </div>
    )
}

export default RegisterForm
