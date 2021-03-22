import React from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  RemoveScrollBar,
  noScrollbarsClassName,
} from "react-remove-scroll-bar";

const TestPageThree = (props) => {
  return (
    <div class="overflow-y-scroll w-44 h-32 ">
      <div>
        <h1> asjhdlajsdkasjdlkajsdlkjasd</h1>
        <h2> ajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasd</h2>
        <p className="overflow-y-scroll">
          ajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasdajshlkjaklsdjlkasjdlkajslkdjaklsdjlkasd
        </p>
      </div>
    </div>
  );
};

export default TestPageThree;
