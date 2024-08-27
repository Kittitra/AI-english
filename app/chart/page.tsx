"use client";

import { link } from "fs";
import Head from "../component/Head";
import Section from "./component/section";
import Title from "./component/title-section";
import Gpt_Section from "./component/gpt-section";
import Gemini_Section from "./component/gemini-section";
import Liama_Section from "@/app/chart/component/liama-section";
import Mixtral_Section from "./component/mixtral-section";
import Claude_Section from "./component/claude-section";
import Qwen2_Section from "./component/qwen2-section";
import Perplexity_Section from "./component/perplexity-section";
import Garph from "./component/garph/garph";
import Garph_section from "./component/garph_section";

const Content = () => {
  return (
    <div>
      <div className="flex justify-end p-5">
        <Head />
      </div>
      <div>
        <Title />
      </div>
      <div className="pb-[20rem]">
        <div className="pb-[3rem]">
          <Section />
        </div>
        <Garph_section />

        <Gpt_Section />
        <Gemini_Section />
        <Liama_Section />
        <Mixtral_Section />
        <Claude_Section />
        <Qwen2_Section />
      </div>
    </div>
  );
};

export default Content;
