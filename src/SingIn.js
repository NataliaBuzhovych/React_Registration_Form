import "./index.css";
import { useState, useEffect } from "react";
import lock from "./assetc/padlock.png";
import { Link } from "react-router-dom";
import { Adiv, SButton, Ldiv, Sh3, Sspan, Chekdiv, Linkdiv } from "./styled";

function SingIn() {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setInputValue({ ...inputValues, [id]: value });
    console.log(event.target.className);
  }

  const checkValidation = () => {
    let errors = validation;
    const email = inputValues.email;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    const cond1 = "(?=.*[a-z])";
    const cond2 = "(?=.*[A-Z])";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be longer than 8 characters";
    } else if (password.length >= 12) {
      errors.password = "Password must shorter than 12 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else {
      errors.password = "";
    }
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputValues });
  };

  return (
    <Adiv className="App">
      <Ldiv>
        <img src={lock}></img>
      </Ldiv>
      <Sh3>Sign in</Sh3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          className="email"
          onChange={(e) => handleChange(e)}
          value={inputValues.email}
          placeholder="Email *"
        ></input>
        {validation.email && <p>{validation.email}</p>}

        <input
          type="text"
          id="password"
          className="password"
          onChange={(e) => handleChange(e)}
          value={inputValues.password}
          placeholder="Password *"
        ></input>
        {validation.password && <p>{validation.password}</p>}

        <Chekdiv>
          <input type="checkbox"></input>
          <Sspan>Remember me</Sspan>
        </Chekdiv>

        <SButton
          type="submit"
          disabled={validation.email || validation.password}
        >
          SING IN
        </SButton>
      </form>
      <Linkdiv style={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ color: "#2a76a5", font: "small-caption" }}>
          Forgot password?
        </Link>
        <Link
          to="/"
          style={{
            color: "#2a76a5",
            font: "small-caption",
          }}
        >
          Don't have an account? Sing Up
        </Link>
      </Linkdiv>
    </Adiv>
  );
}

export default SingIn;
