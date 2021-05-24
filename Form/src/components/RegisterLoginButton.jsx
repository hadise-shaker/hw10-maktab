import React ,{useState} from 'react'
import "./RegisterLoginButton.css"
import Proptypes from "prop-types";

const RegisterLoginButton = ({classes,btn_lable,action}) => {

    return (

            <button className={classes} onClick={action}>{btn_lable}</button>
            

  
    )
}

RegisterLoginButton.propTypes={
classes: Proptypes.string
}

export default RegisterLoginButton;
