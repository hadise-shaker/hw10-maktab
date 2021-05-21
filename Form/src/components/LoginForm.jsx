import React,{useState} from 'react'
import "../Font/vazir/Vazir.css"
import "./Forms.css"
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import Modal from "./Modal"
import Register_Login_Button from"./Register_Login_Button"
import Forgetpsw from './Forgetpsw'
const LoginForm = ({login}) => {
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
/*   const handleClickShowPassword = () => {
    console.log("psw");
    setValues({ ...values, showPassword: !values.showPassword });
  }; */

  const [showAddTask3, setShowAddTask3] = useState(true);
  const [showfaramoshi, setShowfaramoshi] = useState(false);

  const faramoshi =()=>{
    setShowfaramoshi(!showfaramoshi)
   /*  console.log("hi"); */
  }
  const [welcome, setWelcome] = useState('');
  const [showmodal, setShowmodal] = useState(false)
  const login_message=(e)=> {
    if (welcome==="") {
      alert("لطفا ایمیل خود را وارد نمایید")
      e.preventDefault() 
    }if (pwd==="") {
      alert("لطفا رمز خود را وارد نمایید")
      e.preventDefault() 
    } 
     else{ setShowmodal(!showmodal);
    }
  }
  const closeModal =(e)=>{
    setShowmodal(!showmodal);
    e.preventDefault()
  }

    return (
      
      <div>

       
        <form className="register-form" id="register-form" onSubmit={(e)=>{e.preventDefault()}} name={login}>
                 
        <Register_Login_Button
        classes={`btn--right ${!showAddTask3?"isactive":null}`}
        btn_lable="ثبت نام"
        action={() => setShowAddTask3(!showAddTask3)}
      ></Register_Login_Button>
      <Register_Login_Button
        classes={`btn--left ${showAddTask3?"isactive":null}`}
        action={() => setShowAddTask3(!showAddTask3)}
        btn_lable="ورود"
      ></Register_Login_Button>
            <h1 className="title">خوش آمدید</h1>
            <input type="email" placeholder="پست الکترونیکی"  onChange={e =>setWelcome(e.target.value)} />
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

            <a  className="Forget-psw" onClick={faramoshi}> 
           
            فراموش کردید؟</a>
            {showfaramoshi&&<Forgetpsw></Forgetpsw>}
            <Register_Login_Button classes="btn-form" btn_lable="ورود" action={login_message}></Register_Login_Button>
            
        </form>
        {showmodal&&<Modal text={welcome} close={closeModal} text_lable="خوش امدید "></Modal>}
        </div>
    )
}

export default LoginForm;