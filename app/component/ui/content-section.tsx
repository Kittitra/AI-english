import Image from "next/image";
import React from "react";

import section_img01 from "@/app/public/section img01.png";

type Props = {};

export default function ContentSection({}: Props) {
  return (
    <div
      className="w-[100%] h-[110vh] 
      flex flex-row justify-center items-center
      gap-[5rem] 
    "
    >
      <div
        className="w-[30rem]
        flex flex-col items-start"
      >
        <div className="text-5xl font-bold">What is AI</div>
        <div className="pb-20 pl-3">AI คืออะไร</div>
        <div className="text-xl">
          ปัญญาประดิษฐ์ หรือ AI (Artificial Intelligence)
          คือเทคโนโลยีที่ออกแบบมาให้คอมพิวเตอร์สามารถทำงาน
          หรือแก้ไขปัญหาที่มักต้องใช้ปัญญาของมนุษย์ได้
          โดยการประมวลผลข้อมูลและตัดสินใจจากข้อมูลที่ได้รับ
        </div>
      </div>
      <div
        className="w-100 h-100
        relative 
        
       "
      >
        <Image
          src={section_img01}
          alt="sectionImg01"
          width={350}
          height={350}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
    </div>
  );
}
