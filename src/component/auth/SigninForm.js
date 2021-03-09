import React, { useState } from "react";
import SERVER_ADDRESS from "../../constant/serverAddress";
import { fetchPostAPI } from "../../utils/fetchApis";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    fetchPostAPI("/auth/signin", { body: { email, password } })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
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
        <label htmlFor="email">email</label>
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
        <label htmlFor="password">password</label>
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
      <button className="bg-indigo-500 rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SigninForm;
