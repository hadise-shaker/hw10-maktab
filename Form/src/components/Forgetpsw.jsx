import React, { useState } from 'react'
/* import LoginForm from "./LoginForm";
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import Register_Login_Button from"./Register_Login_Button"
import RegisterForm from "./RegisterForm";
import "./RegisterForm.css" */
import "./Forgetpsw.css"
import "../Font/vazir/Vazir.css"
import Modal from "./Modal"
const Forms = () => {
/*     const [showfaramoshi, setShowfaramoshi] = useState(false);
    const faramoshi=()=>{
        setShowfaramoshi(!showfaramoshi)
    } */
    const [showmodal, setShowmodal] = useState(false)
    const [email, setEmail] = useState('');
    const psw_modal = ()=>{
        if (email!=="") {
            setShowmodal(!showmodal)
        }else{
            alert(" لطفا ایمیل خود را برای ارسال رمز وارد کنید")
        }
        
    }
    const closeModal =(e)=>{
        setShowmodal(!showmodal);
        e.preventDefault()
      }
    return (
        <div className="faramoshi">
<div action="" /* onSubmit={(e)=>{e.preventDefault()}} */>
    <label htmlFor="">
    ایمیل خود را وارد کنید
       
    </label>
    <input type="email" placeholder="ایمیل..." onChange={e => setEmail(e.target.value)}/>
    <button type="submit" className="forget-btn" onClick={psw_modal}>ارسال رمز</button>
    {showmodal&&<Modal text_lable="رمز شما ارسال شد" close={closeModal}></Modal>}
   {/*  {showfaramoshi && <input type="email" placeholder="email..."/>} */}
</div>
</div>
    )
}

export default Forms
