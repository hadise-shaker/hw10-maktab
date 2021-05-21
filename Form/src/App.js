import "./App.css";
import React, { useState } from "react";
import "./components/Forms.css";
import "./Font/vazir/Vazir.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const set = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div>
        {toggle && <RegisterForm set={set} Register="register" />}
        {!toggle && <LoginForm set={set} login="login" />}
      </div>
    </div>
  );
};

export default App;
