import Image from "next/image";
import React from "react";

import section_img01 from "@/app/public/section img01.png";
import section_img02 from "@/app/public/section img02.png";
import { Button } from "@/components/ui/button";

type Props = {};

export default function ContentSection_2({}: Props) {
  return (
    <div
      className="w-[100%] h-[110vh] 
      flex flex-row justify-center items-center
     
    "
    >
      <div
        className="w-[70rem]
        flex flex-row items-start gap-[5rem]"
      >
        <div className="w-[100%] ">
          <Image
            className=" rounded-xl"
            src={section_img02}
            alt="sectionImg02"
          />
        </div>
        <div className="p-5">
          <div className="text-5xl font-bold">What is AI Capable of</div>
          <div className="pb-20 pl-3">AI มีความสามารถอะไรบ้าง</div>
          <div className="pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, cupiditate. Harum veniam eaque illo! Corporis dolore
            inventore amet, perferendis atque totam eligendi dignissimos aliquam
            dolor.
          </div>
        </div>
      </div>
    </div>
  );
}
