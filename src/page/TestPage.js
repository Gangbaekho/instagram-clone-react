import React, { useState, useRef, useEffect } from "react";

import { Element } from "react-scroll";

import default_user from "../image/default_user.s.png";
import default_heart from "../image/default_heart.s.png";
import default_detail from "../image/default_detail.s.png";
import default_share from "../image/default_share.s.png";

const TestPage = (props) => {
  return (
    <section className="flex flex-col justify-center w-screen h-screen border-2 border-solid border-black bg-black relative">
      <div className="absolute top-10 right-10 bg-white">XICON</div>
      <div className="flex justify-center mr-10 ml-10 border-black border-2 border-solid bg-white lg:h-detailFeed">
        <div className="hidden border-black border-2 border-solid lg:block lg:h-detailFeed">
          <img src={default_user} className="h-full" />
        </div>
        <div className="border-black border-2 border-solid w-60 lg:h-detailFeed lg:w-80">
          <article className="flex justify-center border-black border-2 border-solid lg:h-1/12 ">
            <div className="border-black border-2 border-solid w-10">
              <img src={default_user} />
            </div>
            <div className="border-black border-2 border-solid">Ronaldo</div>
            <div className="border-black border-2 border-solid ">팔로잉</div>
            <div className="border-black border-2 border-solid">...</div>
          </article>
          <article className="border-black border-2 border-solid lg:hidden">
            <img src={default_user} className="w-full" />
          </article>
          <Element
            className="hidden border-black border-2 border-solid lg:block lg:h-9/12 scroll-hide"
            id="scroll-container"
            style={{
              position: "relative",
              overflow: "auto",
              // overflowY: "scroll",
            }}
          >
            <Element
              name="scroll-container-first-element"
              style={{
                marginBottom: "200px",
              }}
            >
              <div>
                <h1>Test</h1>
                <h2>Test</h2>
                <p>ASDjlkasjdlkajslkdjaklsd</p>
              </div>
            </Element>

            <Element
              name="scroll-container-second-element"
              style={{
                marginBottom: "200px",
              }}
            >
              second element inside container
            </Element>
          </Element>
          {/* { <article className="hidden border-black border-2 border-solid lg:block lg:h-9/12">
            <div className="border-2 border-solid border-black">
              <Element
                className="scroll-hide"
                id="scroll-container"
                style={{
                  position: "relative",
                  height: "200px",
                  overflowY: "scroll",
                }}
              >
                <Element
                  name="scroll-container-first-element"
                  style={{
                    marginBottom: "200px",
                  }}
                >
                  <div>
                    <h1>Test</h1>
                    <h2>Test</h2>
                    <p>ASDjlkasjdlkajslkdjaklsd</p>
                  </div>
                </Element>

                <Element
                  name="scroll-container-second-element"
                  style={{
                    marginBottom: "200px",
                  }}
                >
                  second element inside container
                </Element>
              </Element>
            </div>
          </article>} */}
          <article className="border-black border-2 border-solid lg:h-2/12">
            <div className="flex justify-between border-black border-2 border-solid">
              <div className="border-black border-2 border-solid">
                <img src={default_heart} className="w-10 inline-block" />
                <img src={default_detail} className="w-10 inline-block" />
              </div>
              <div className="border-black border-2 border-solid">
                <img src={default_share} className="w-10 inline-block" />
              </div>
            </div>
            <div>좋아요 100개</div>
            <div>2일전</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestPage;
