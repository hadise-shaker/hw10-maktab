import React ,{useState} from 'react'
import "./Register_Login_Button.css"
import Proptypes from "prop-types";

const Register_Login_Button = ({classes,btn_lable,action}) => {

    return (

            <button className={classes} onClick={action}>{btn_lable}</button>
            

  
    )
}

Register_Login_Button.propTypes={
classes: Proptypes.string
}

export default Register_Login_Button;
