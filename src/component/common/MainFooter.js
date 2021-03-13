import React from "react";

const MainFooter = (props) => {
  return (
    <div className="w-96 space-y-3">
      <div className="text-gray-400 text-xs text-opacity-70 cursor-pointer">
        소개.도움말.홍보 센터. API. 채용 정보.
      </div>
      <div className="text-gray-400 text-xs text-opacity-70 cursor-pointer">
        개인정보처리방침. 약관. 위치. 인기 계정. 해시태그. 언어
      </div>
      <div className="text-gray-400 text-xs text-opacity-70 cursor-pointer">
        &copy; 2021 JINSTAGRAM FROM JINSOO
      </div>
    </div>
  );
};

export default MainFooter;
