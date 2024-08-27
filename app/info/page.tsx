"use client";

import { link } from "fs";
import Head from "../component/Head";
import Infosection_1 from "./component/info-section";
import { useRef } from "react";
import Infosection_2 from "./component/info-section-2";
import Infosection_3 from "./component/info-section-3";

const Content = () => {
  return (
    <div>
      <div className="flex justify-end p-5">
        <Head />
      </div>
      <div className="flex flex-col p-10">
        <Infosection_1 />
      </div>
      <div id="info">
        <Infosection_2 />
      </div>
      <div>
        <Infosection_3 />
      </div>
    </div>
  );
};

export default Content;
