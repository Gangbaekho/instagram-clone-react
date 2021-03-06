import React, { useState, useEffect } from "react";
import MainHeader from "../component/common/MainHeader";
import ScrollContainer from "../component/common/ScrollContainer";
import { Element } from "react-scroll";
import Conversation from "../component/direct-message/Conversation";
import Message from "../component/direct-message/Message";
import DirectMessageForm from "../component/direct-message/DirectMessageForm";
import openSocket from "socket.io-client";
import SERVER_ADDRESS from "../constant/serverAddress";
import Modal from "../component/common/Modal";

const DirectMessagePage = (props) => {
  // useEffect(() => {
  //   openSocket(SERVER_ADDRESS);
  // }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (flag) => {
    setIsOpen(flag);
  };
  return (
    <div>
      <MainHeader />
      <Modal isOpen={isOpen} openModalHandler={openModalHandler}>
        <section
          className="bg-white w-96 rounded-xl p-5 space-y-4 z-40"
          style={{ height: "500px" }}
        >
          <article className="border-b-2 border-solid border-gray-300 py-2">
            새로운 메시지
          </article>
          <article className="border-b-2 border-solid border-gray-300 py-2">
            <div>
              <label htmlFor="search">받는 사람 : &nbsp;</label>
              <input type="text" id="search" />
            </div>
          </article>
          <article>
            <ScrollContainer customStyle={{ height: "350px" }}>
              <Element>Test</Element>
              <Element>Test</Element>
            </ScrollContainer>
          </article>
        </section>
      </Modal>
      <div className="fixed border-check w-screen h-screen">
        <div
          className="flex border-check direct-message-height direct-message-grid mx-auto"
          style={{ width: "935px", marginTop: "76px", marginBottom: "20px" }}
        >
          <div className="flex justify-center items-center border-check">
            {localStorage.getItem("userNickName")}{" "}
            <button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              대화하기
            </button>
          </div>
          <div className="flex justify-center items-center border-check">
            <div>대화 상대 아이디</div>
          </div>
          <div className="border-check">
            <ScrollContainer passClass="friend-list">
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
              <Element className="border-check overflow-hidden">
                <Conversation />
              </Element>
            </ScrollContainer>
          </div>
          <div className="border-check">
            <ScrollContainer passClass="chat-list">
              <Element className="border-check ">
                <Message from="asdasd" content="헬로" />
              </Element>
              <Element className="border-check ">
                <Message from="6061563fad635a0adc06963a" content="반갑다" />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="asdasd"
                  content="뭐하고 지내냐?뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐뭐하고 지내냐"
                />
              </Element>
              <Element className="border-check ">
                <Message
                  from="6061563fad635a0adc06963a"
                  content="뭐 그냥 있찌."
                />
              </Element>
            </ScrollContainer>
            <DirectMessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessagePage;
