"use client";
import Image from "next/image";
import React from "react";

import section_img01 from "@/app/public/section img01.png";
import section_img02 from "@/app/public/section img02.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function ContentSection_3({}: Props) {
  return (
    <div
      className="w-[100%] h-[110vh] 
      flex flex-row justify-center items-center
     
    "
    >
      <div
        className="w-[70rem]
        flex flex-row items-start gap-[9rem]"
      >
        <div className="w-[100%] ">
          <Image
            className=" rounded-xl"
            src={section_img02}
            alt="sectionImg02"
          />
        </div>
        <div className="p-5">
          <div className="text-5xl font-bold">
            Why do we need to use <br /> AI ?
          </div>
          <div className="pb-7 text-left">ทำไมเราต้องใช้ AI</div>
          <div className="pb-10">
            การใช้ AI มีศักยภาพในการเปลี่ยนแปลงหลายด้านของชีวิตประจำวันและธุรกิจ
            การเพิ่มประสิทธิภาพในการทำงาน การแก้ปัญหาที่ซับซ้อน การพัฒนานวัตกรรม
            การปรับปรุงคุณภาพชีวิต การเพิ่มความปลอดภัย
            และการประหยัดทรัพยากรเป็นเพียงบางส่วนของเหตุผลที่ทำให้ AI
            กลายเป็นเทคโนโลยีที่สำคัญและน่าจับตามอง
          </div>
        </div>
      </div>
    </div>
  );
}
