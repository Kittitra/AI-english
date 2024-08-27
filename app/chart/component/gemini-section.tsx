import Image from "next/image";
import React from "react";

import imgGemini from "@/app/public/Google-Ai-Gemini-Logo.jpg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Gemini_Section({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-10 w-[70rem]">
          <div className=" text-3xl font-semibold pb-7">
            Gemini AI (Google DeepMind)
          </div>
          <div className="text-md pb-14">
            Gemini AI คือโมเดลปัญญาประดิษฐ์ที่พัฒนาโดย Google DeepMind
            ซึ่งเป็นโมเดลที่มีความสามารถสูงและออกแบบมาให้เป็นมัลติโหมด
            (multimodal) โดยสามารถทำงานและประมวลผลข้อมูลหลากหลายประเภท เช่น
            ข้อความ รูปภาพ เสียง วิดีโอ และโค้ดต่างๆ ทำให้ Gemini
            สามารถประมวลผลข้อมูลจากแหล่งต่างๆ ร่วมกันได้อย่างมีประสิทธิภาพ
            <br />
            Gemini มีความสามารถในการสร้างโค้​ดในหลายภาษาโปรแกรม เช่น Python,
            Java, และ C++
            และยังสามารถเข้าใจและให้คำอธิบายเกี่ยวกับโค้ดเหล่านี้ได้อย่างถูกต้องและละเอียด
            นอกจากนี้
            โมเดลนี้ยังมีความสามารถในการประมวลผลและให้คำตอบที่ถูกต้องแม่นยำโดยใช้ข้อมูลที่อัปเดตล่าสุด
            ซึ่งทำให้ Gemini
            เป็นตัวเลือกที่น่าสนใจสำหรับนักพัฒนาและองค์กรที่ต้องการประสิทธิภาพในการประมวลผลข้อมูลและการใช้งาน
            AI ในระดับสูง
            <br />
            <div className="pb-1">การนำ AI โมเดล Gemini เช่น:</div>
            <br />
            - การพัฒนาซอฟต์แวร์และแอปพลิเคชันที่หลากหลาย
            หากคุณกำลังพัฒนาแอปพลิเคชันที่ต้องการการประมวลผลข้อมูลที่หลากห​ลายพลิเคชันที่วิเคราะห์ข้อความ
            รูปภาพ และเสียงพร้อมกัน Gemini
            สามารถช่วยคุณทำให้กระบวนการนี้มีประสิทธิภาพและแม่นยำมากขึ้น <br />
            การวิเคราะห์ข้อมูล (Data Analysis)
            <br />
            - การปรับปรุงบริการลูกค้า Gemini
            เหมาะสำหรับการวิเคราะห์ข้อมูลขนาดใหญ่หรือข้อมูลจากหลายแหล่งพร้อมกัน
            ทำให้คุณสามารถค้นหาแนวโน้มหรือรูปแบบที่ซับซ้อนในข้อมูลของคุณได้ เช่น
            การวิเคราะห์ตลาด การพยากรณ์แนวโน้มการขาย
            หรือการวิเคราะห์ข้อมูลผู้ใช้
            <br />
            - การสร้างเนื้อหาอัตโนมัติ
            หากคุณมีความต้องการสร้างเนื้อหาจำนวนมากอย่างรวดเร็ว เช่น บทความ ข่าว
            หรือโพสต์ในโซเชียลมีเดีย คุณสามารถใช้ Gemini
            ในการสร้างเนื้อหาเหล่านี้ได้อย่างรวดเร็วและมีความคิดสร้างสรรค์
            <br />
            - การพัฒนานวัตกรรมในอุตสาหกรรมต่างๆ
            โมเดลนี้สามารถนำไปประยุกต์ใช้ในอุตสาหกรรมที่ต้องการการวิเคราะห์ข้อมูลและการตัดสินใจที่ซับซ้อน
            เช่น การแพทย์ การเงิน การตลาด และการผลิต โดยใช้ Gemini
            ในการทำความเข้าใจและจัดการกับข้อมูลขนาดใหญ่
            หรือในการตัดสินใจเชิงกลยุทธ์
            <br />
          </div>
        </div>
        <div>
          <Image src={imgGemini} alt="imgGemini" />
        </div>
      </div>
    </div>
  );
}
