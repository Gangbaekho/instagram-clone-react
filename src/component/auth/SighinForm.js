import React, { useState, useEffect } from "react";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <form onSubmit={submitButtonHandler}>
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
