import React from "react";
import MainHeader from "../component/common/MainHeader";
import ScrollContainer from "../component/common/ScrollContainer";
import { Element } from "react-scroll";

const DirectMessagePage = (props) => {
  return (
    <div>
      <MainHeader />
      <div className="fixed border-check w-screen h-screen">
        <div
          className="flex border-check direct-message-height direct-message-grid mx-auto"
          style={{ width: "935px", marginTop: "76px", marginBottom: "20px" }}
        >
          <div className="flex justify-center items-center border-check">
            ID
          </div>
          <div className="flex justify-center items-center border-check">
            <div>대화상대</div>
          </div>
          <div className="border-check">
            <ScrollContainer passClass="friend-list">
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
              <Element className="border-check mb-20 overflow-hidden">
                하하하하하하
              </Element>
            </ScrollContainer>
          </div>
          <div className="border-check">
            <ScrollContainer passClass="chat-list">
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
              <Element className="border-check mb-20">하하하하하하</Element>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessagePage;
