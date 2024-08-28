import Image from "next/image";
import React from "react";

import gptImg from "@/app/public/chatGpt.jpg";
import infoHeaderImage from "@/app/public/infoHeader.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Gpt_Section({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-10 w-[70rem]">
          <div className=" text-3xl font-semibold pb-7">GPT (OpenAI)</div>
          <div className="text-md pb-14">
            ChatGPT เป็นโมเดลปัญญาประดิษฐ์ที่พัฒนาโดย OpenAI ซึ่งใช้สถาปัตยกรรม
            GPT (Generative Pre-trained Transformer)
            โดยมีความสามารถหลักในการสร้างและเข้าใจภาษาธรรมชาติ (Natural Language
            Processing - NLP) ทำให้สามารถทำงานเกี่ยวกับข้อความได้หลากหลาย
            ไม่ว่าจะเป็นการตอบคำถาม การสนทนา การเขียนเนื้อหา การแปลภาษา
            หรือการสรุปข้อความ นอกจากนี้ ChatGPT
            ยังสามารถปรับแต่งให้เข้ากับความต้องการเฉพาะของธุรกิจหรือผู้ใช้ได้
            โดยสามารถเรียนรู้จากบริบทและปรับปรุงผลลัพธ์ตามความต้องการเฉพาะได้
            <br />
            โมเดล ChatGPT สามารถใช้งานได้ในหลายโดเมน
            ไม่ว่าจะเป็นการให้บริการลูกค้า การศึกษา การตลาด
            หรือแม้กระทั่งการเขียนโปรแกรม นอกจากนี้ ChatGPT
            ยังสามารถทำงานร่วมกับเครื่องมืออื่นๆ
            เพื่อเพิ่มความสามารถในการให้บริการที่หลากหลายมากขึ้น เช่น
            การวิเคราะห์ข้อมูล การตรวจสอบโค้ด หรือการสร้างสคริปต์
            <br />
            <div className="pb-1">
              คำแนะนำในการนำ ChatGPT ไปประยุกต์ใช้ เช่น:
            </div>
            <br />
            - การให้บริการลูกค้า (Customer Service) เช่นนำมาใช้เป็น chatbot
            ที่มีความสามารถในการตอบคำถามและให้ข้อมูลที่ตรงตามความต้องการของลูกค้าได้ทันที
            ซึ่งช่วยเพิ่มประสิทธิภาพในการให้บริการและลดภาระของพนักงาน
            <br />
            - การสร้างเนื้อหา (Content Creation) ChatGPT
            เหมาะสำหรับการสร้างบทความ บล็อกโพสต์ คำบรรยายสินค้า
            หรือเนื้อหาในโซเชียลมีเดีย
            ที่ต้องการความคิดสร้างสรรค์และการใช้ภาษาที่น่าสนใจ
            <br />
            - การสนับสนุนด้านการศึกษา (Educational Support) ChatGPT
            สามารถใช้เป็นเครื่องมือในการช่วยการเรียนรู้
            โดยการตอบคำถามจากนักเรียนหรือการอธิบายเนื้อหาที่ยากให้ง่ายขึ้น
            <br />
            - การทำการตลาดและการสื่อสาร (Marketing and Communication) สามารถใช้
            ChatGPT ในการวิเคราะห์และตอบกลับข้อความของลูกค้าในแคมเปญการตลาด
            การสร้างสคริปต์สำหรับโฆษณา หรือการตอบสนองคำถามในโซเชียลมีเดีย
            <br />- การช่วยเขียนโปรแกรม (Programming Assistant) ChatGPT
            สามารถช่วยนักพัฒนาในการเขียนโค้ด การแก้ไขข้อผิดพลาด การอธิบายโค้ด
            หรือการสร้างสคริปต์สำหรับงานที่ต้องทำซ้ำๆ
            ซึ่งช่วยประหยัดเวลาและลดความผิดพลาดได้
          </div>
        </div>
        <div>
          <Image src={gptImg} alt="img" width={550} className=" rounded-xl" />
        </div>
      </div>
    </div>
  );
}
