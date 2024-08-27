import Image from "next/image";
import React from "react";

import infoHeaderImage from "@/app/public/infoHeader.jpg";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Infosection_1({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className=" flex flex-col pr-10 w-[70rem]">
        <div className=" text-5xl font-semibold pb-7">
          พื้นฐานของ AI
          <br />
          ครอบคลุมหลากหลายด้าน
        </div>
        <div className="text-md">
          ตั้งแต่การเรียนรู้ของเครื่อง การประมวลผลภาษาธรรมชาติ
          การประมวลผลภาพและวิดีโอ การวางแผนและการตัดสินใจ หุ่นยนต์
          อัลกอริทึมและการเรียนรู้เชิงลึก รวมถึงการเตรียมข้อมูล
          ความเข้าใจพื้นฐานในด้านเหล่านี้จะช่วยให้เราสามารถพัฒนาและใช้ AI
          ได้อย่างมีประสิทธิภาพและปลอดภัย
        </div>
      </div>
      <div className=" relative">
        <Image className="w-[50rem]" src={infoHeaderImage} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>
    </div>
  );
}
