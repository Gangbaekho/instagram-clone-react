import React, { useState } from "react";

import SigninForm from "../component/auth/SigninForm";

const SigninPage = (props) => {
  return (
    <div>
      <h1 className="text-center text-indigo-500 text-4xl font-bold underline ">
        This is signin page
      </h1>
      <button>Go back</button>
      <SigninForm />
    </div>
  );
};

export default SigninPage;
