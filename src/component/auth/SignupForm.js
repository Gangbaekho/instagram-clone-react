import React, { useState } from "react";
import SERVER_ADDRESS from "../../constant/serverAddress";
import { fetchPostAPI } from "../../utils/fetchApis";

const SignupForm = (props) => {
  const { history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(passwordCheck);

    fetchPostAPI("/auth/signup", { body: { email, password, passwordCheck } })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="w-3/4 mx-auto mt-10 space-y-8"
      onSubmit={submitButtonHandler}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="passwordcheck">Password Check</label>
        <input
          id="passwordcheck"
          type="password"
          name="passwordcheck"
          placeholder="Password Check"
          onInput={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </div>
      <button className="bg-indigo-500 rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
