import Image from "next/image";
import React from "react";

import claudeImg from "@/app/public/claude.jpg";
import infoHeaderImage from "@/app/public/infoHeader.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Claude_Section({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-10 w-[70rem]">
          <div className=" text-3xl font-semibold pb-7">Claude (Anthropic)</div>
          <div className="text-md pb-14">
            Claude เป็นโมเดลปัญญาประดิษฐ์ที่พัฒนาโดย Anthropic
            ซึ่งมีความเชี่ยวชาญในการประมวลผลภาษาธรรมชาติ (NLP)
            และถูกออกแบบมาเพื่อให้มีความปลอดภัยและมีจริยธรรมในการทำงาน Claude
            ได้รับการออกแบบมาให้เป็นผู้ช่วยที่มีความสามารถในการสนทนา
            การวิเคราะห์ข้อมูล และการทำงานด้านภาษาที่ซับซ้อน
            <br />
            ความสามารถหลักของ Claude:
            <br />
            - การสนทนาขั้นสูง (Advanced Conversation): Claude
            มีความสามารถในการเข้าใจและตอบสนองต่อบทสนทนาที่ซับซ้อน
            รวมถึงการรับมือกับคำถามที่ยากหรือสถานการณ์ที่ละเอียดอ่อน
            โดยเน้นที่การตอบสนองอย่างมีเหตุผลและถูกต้อง
            <br />
            - ความปลอดภัยและจริยธรรม (Safety and Ethics): Claude
            ถูกพัฒนาโดยให้ความสำคัญกับความปลอดภัยและจริยธรรมในการใช้งาน AI
            ซึ่งรวมถึงการป้องกันการสร้างเนื้อหาที่อาจเป็นอันตราย
            การรักษาความเป็นส่วนตัว และการทำงานในกรอบของจริยธรรมที่เหมาะสม
            <br />
            - การปรับแต่งสำหรับงานเฉพาะ (Customization for Specific Tasks):
            Claude สามารถปรับแต่งเพื่อใช้งานในโดเมนเฉพาะ เช่น การบริการลูกค้า
            การวิเคราะห์ข้อมูล การเขียนเนื้อหา หรือการแปลภาษา
            ทำให้สามารถตอบสนองต่อความต้องการของธุรกิจหรือองค์กรได้อย่างแม่นยำ
            <br />
            - การสร้างเนื้อหาและการเขียน (Content Creation and Writing): Claude
            มีความสามารถในการสร้างบทความ การเขียนสคริปต์
            หรือเนื้อหาสำหรับโซเชียลมีเดีย
            โดยเน้นที่การใช้ภาษาที่ถูกต้องและสอดคล้องกับบริบท
            <br />
            - การประมวลผลข้อมูลและการวิเคราะห์ (Data Processing and Analysis):
            Claude สามารถนำไปใช้ในการวิเคราะห์ข้อมูลเชิงลึก
            การสรุปข้อมูลจากแหล่งต่างๆ
            และการสร้างรายงานที่มีความชัดเจนและครอบคลุม
            <br />
            - การสนับสนุนด้านการศึกษาและการเรียนรู้ (Educational Support):
            Claude สามารถใช้ในการช่วยเหลือนักเรียนและครูในการสอน
            การทำความเข้าใจเนื้อหาที่ซับซ้อน
            หรือการสร้างแบบฝึกหัดและกิจกรรมการเรียนรู้
            <br />
            <div className="pb-1">
              คำแนะนำในการนำ Claude ไปประยุกต์ใช้ เช่น:
            </div>
            <br />
            - การให้บริการลูกค้า (Customer Service) Claude สามารถนำมาใช้เป็น
            chatbot ที่สามารถตอบคำถามและแก้ไขปัญหาของลูกค้าได้อย่างมีประสิทธิภาพ
            ด้วยความสามารถในการจัดการกับสถานการณ์ที่ซับซ้อนและการตอบสนองอย่างปลอดภัย
            <br />
            - การสร้างและการตรวจสอบเนื้อหา (Content Creation and Review) Claude
            เหมาะสำหรับการสร้างเนื้อหาคุณภาพสูง ไม่ว่าจะเป็นบทความ
            โพสต์โซเชียลมีเดีย หรือเอกสารทางการตลาด
            นอกจากนี้ยังสามารถใช้ในการตรวจสอบความถูกต้องและความสอดคล้องของเนื้อหาที่มีอยู่แล้วได้
            <br />
            - การสนับสนุนการทำงานในองค์กร (Enterprise Support) Claude
            สามารถช่วยในการสร้างรายงานอัตโนมัติ การจัดการเอกสาร การสรุปการประชุม
            หรือการวิเคราะห์ข้อมูลจากแหล่งต่างๆ
            เพื่อช่วยในการตัดสินใจเชิงกลยุทธ์
            <br />
            - การสนับสนุนการศึกษา (Educational Support) ChatGPT Claude
            สามารถใช้ในการสร้างแบบฝึกหัด การทดสอบ
            หรือการสอนแบบออนไลน์ที่สามารถปรับให้เข้ากับความต้องการของนักเรียนแต่ละคนได้
            <br />- การสร้างและการวิเคราะห์แชทบอท (Chatbot Development and
            Analysis) Claude
            สามารถนำไปใช้ในการพัฒนาแชทบอทที่ซับซ้อนและมีความเข้าใจบริบทที่ดี
            รวมถึงการวิเคราะห์ประสิทธิภาพของแชทบอทเพื่อปรับปรุงการทำงาน
          </div>
        </div>
        <Image src={claudeImg} alt="" width={550} className=" rounded-xl" />
      </div>
    </div>
  );
}
