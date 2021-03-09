import React from "react";

import SignupForm from "../component/auth/SignupForm";

const SignupPage = (props) => {
  return (
    <div>
      <h1 className="font-bold text-4xl underline text-indigo-500 text-center">
        This is signup page!
      </h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
