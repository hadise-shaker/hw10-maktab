import "./App.css";
import React, { useState } from "react";
import "./components/Forms.css";
import "./Font/vazir/Vazir.css";
import Register_Login_Button from "./components/Register_Login_Button";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <div>
        <div className="mybtn">
          <Register_Login_Button
            classes={`btn--right ${toggle ? "isactive" : null}`}
            btn_lable="ثبت نام"
            action={() => setToggle(!toggle)}
          />
          <Register_Login_Button
            classes={`btn--left ${!toggle ? "isactive" : null}`}
            action={() => setToggle(!toggle)}
            btn_lable="ورود"
          />
        </div>

        {toggle && <RegisterForm />}
        {!toggle && <LoginForm />}
      </div>
    </div>
  );
};

export default App;
