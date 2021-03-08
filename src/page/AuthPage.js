import React from "react";

import SigninForm from "../component/auth/SighinForm";
import SignupForm from "../component/auth/SignupForm";

const AuthPage = () => {
  // 로그인 할 수 있는 form이 필요
  // 회원가입 할 수 있는 form이 필요
  return (
    <div>
      <h1 class="text-center text-4xl text-blue-500">This is auth page.</h1>
      <SigninForm />
      <hr class="my-10" />
      <SignupForm />
    </div>
  );
};

export default AuthPage;
