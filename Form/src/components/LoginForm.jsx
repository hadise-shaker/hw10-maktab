import React,{useState,useEffect} from 'react'
import "../Font/vazir/Vazir.css"
import "./Forms.css"
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import Modal from "./Modal"
import RegisterLoginButton from"./RegisterLoginButton"
import Forgetpsw from './Forgetpsw'
const LoginForm = ({login,set}) => {
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
/*   const handleClickShowPassword = () => {
    console.log("psw");
    setValues({ ...values, showPassword: !values.showPassword });
  }; */

  const [showforget, setShowforget] = useState(false);
  const emailPattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const forget =()=>{
    setShowforget(!showforget)
   /*  console.log("hi"); */
  }

  const [email, setEmail] = useState('');
  const [showmodal, setShowmodal] = useState(false)



  const login_message=()=> {
    const validemail=emailPattern.test(email);
if(validemail&&pwd!=="") {
      setShowmodal(!showmodal);
      
    }if (!validemail&&email==="") {
      alert("لطفا ایمیل خود را صحیح وارد کنید")
    }
    if (pwd==="") {
      alert("لطفا رمز خود را وارد نمایید")
     
    } 
    
    
  }
  useEffect(() => {
  console.log(email);
  }, [email])
  const closeModal =()=>{
    setShowmodal(!showmodal);
   
  }
  
    return (
      
      <div>

       
        <form className="register-form" id="register-form" onSubmit={(e)=>{e.preventDefault()}} name={login}>
        <RegisterLoginButton
            classes={`btn--right ${login=="register" ? "isactive" : null}`}
            btn_lable="ثبت نام"
            action={set}
          />
          <RegisterLoginButton
            classes={`btn--left ${login=="login" ? "isactive" : null}`}
            action={set}
            btn_lable="ورود"
          />
            <h1 className="title">خوش آمدید</h1>
            <input type="text" placeholder="پست الکترونیکی"  onChange={e =>setEmail(e.target.value)} required/>
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
          onChange={e => setPwd(e.target.value)}
          value={pwd}
           required/>
            </div>

            <a  className="Forget-psw" onClick={forget}> 
           
            فراموش کردید؟</a>
            {showforget&&<Forgetpsw></Forgetpsw>}
            <RegisterLoginButton classes="btn-form" btn_lable="ورود" action={login_message}></RegisterLoginButton>
            
        </form>
        {showmodal&&<Modal text={email} close={closeModal} text_lable="خوش امدید " name={email}></Modal>}
        </div>
    )
}

export default LoginForm;