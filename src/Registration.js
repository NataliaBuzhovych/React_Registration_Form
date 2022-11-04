import "./index.css";
import { useFormik } from "formik";
import lock from "./assetc/padlock.png";
import { Link } from "react-router-dom";
import { Adiv, SButton, Ldiv, Sh3, Sspan, Chekdiv, Linkdiv } from "./styled";

function SingUP() {
  let fNameDoc = document.getElementById("firstName");
  let lNameDoc = document.getElementById("lastName");
  let emailDoc = document.getElementById("email");
  let passwordDoc = document.getElementById("password");

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [valid, setValid] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Empty field";
      fNameDoc.classList.remove("noterorr");
      fNameDoc.classList.add("erorr");
    } else {
      fNameDoc.classList.add("noterorr");
      fNameDoc.classList.remove("erorr");
    }
    if (!values.lastName) {
      errors.lastName = "Empty field";
      lNameDoc.classList.remove("noterorr");
      lNameDoc.classList.add("erorr");
    } else {
      lNameDoc.classList.remove("erorr");
      lNameDoc.classList.add("noterorr");
    }
    if (!values.email) {
      errors.email = "Empty field";
      emailDoc.classList.remove("noterorr");
      emailDoc.classList.add("erorr");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
      emailDoc.classList.remove("noterorr");
      emailDoc.classList.add("erorr");
    } else {
      emailDoc.classList.remove("erorr");
      emailDoc.classList.add("noterorr");
    }
    if (!values.password) {
      errors.password = "Empty field";
      passwordDoc.classList.remove("noterorr");
      passwordDoc.classList.add("erorr");
    } else {
      passwordDoc.classList.remove("erorr");
      passwordDoc.classList.add("noterorr");
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Adiv className="App">
      <Ldiv>
        <img src={lock}></img>
      </Ldiv>
      <Sh3>Sign up</Sh3>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="fName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          placeholder={
            formik.errors.firstName
              ? `${formik.errors.firstName}`
              : "First Name *"
          }
        ></input>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="lName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          placeholder={
            formik.errors.lastName ? `${formik.errors.lastName}` : "Last Name *"
          }
        ></input>

        <input
          type="email"
          name="email"
          id="email"
          className="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={
            formik.errors.email ? `${formik.errors.email}` : "Email *"
          }
        ></input>
        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
        <input
          type="text"
          name="password"
          id="password"
          className="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder={
            formik.errors.password ? `${formik.errors.password}` : "Password *"
          }
        ></input>
        <Chekdiv>
          <input type="checkbox"></input>
          <Sspan>
            I want to receive inspiration, marketing promptions and updates via
            email.
          </Sspan>
        </Chekdiv>
        <SButton
          type="submit"
          disabled={
            !formik.values.email ||
            !formik.values.password ||
            !formik.values.firstName ||
            !formik.values.lastName ||
            formik.errors.email
          }
        >
          SING UP
        </SButton>
      </form>
      <Linkdiv style={{ justifyContent: "flex-end" }}>
        <Link
          to="/singin"
          style={{
            color: "#2a76a5",
            font: "small-caption",
          }}
        >
          Already have an account? Sing in
        </Link>
      </Linkdiv>
    </Adiv>
  );
}

export default SingUP;
