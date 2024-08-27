import Image from "next/image";
import React from "react";

import perplexImg from "@/app/public/Perplexity-AI.jpg";
import infoHeaderImage from "@/app/public/infoHeader.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Perplexity_Section({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-10 w-[70rem]">
          <div className=" text-3xl font-semibold pb-7">Perplexity</div>
          <div className="text-md pb-14">
            Perplexity
            เป็นโมเดลปัญญาประดิษฐ์ที่มีความสามารถในการวัดความซับซ้อนหรือ
            "perplexity" ของข้อความที่ได้รับ
            ซึ่งใช้ในการวิเคราะห์และประเมินประสิทธิภาพของโมเดลภาษาต่างๆ
            ในการสร้างและทำความเข้าใจข้อความ Perplexity
            มักใช้เป็นตัวชี้วัดในงานประมวลผลภาษาธรรมชาติ (NLP) โดยค่าต่ำของ
            Perplexity
            หมายความว่าโมเดลมีความสามารถในการคาดการณ์คำต่อไปในข้อความได้ดี
            <br />
            ความสามารถหลักของ Perplexity
            <br />
            - การประเมินประสิทธิภาพของโมเดลภาษาต่างๆ (Language Model
            Evaluation): Perplexity
            ใช้ในการวัดความสามารถของโมเดลในการคาดการณ์คำในข้อความ
            ซึ่งเป็นตัวชี้วัดที่สำคัญในการประเมินว่าโมเดลสามารถเข้าใจบริบทและความหมายของข้อความได้ดีเพียงใด
            <br />
            - การวัดความซับซ้อนของข้อความ (Text Complexity Measurement):
            Perplexity สามารถใช้ในการวิเคราะห์ความซับซ้อนของข้อความ
            เพื่อดูว่าโมเดลมีความเข้าใจในระดับไหนและมีความสามารถในการประมวลผลข้อความที่ซับซ้อนหรือยาวได้อย่างแม่นยำ
            <br />
            - การปรับปรุงและพัฒนาโมเดลภาษา (Language Model Improvement):
            Perplexity
            ช่วยให้นักวิจัยและนักพัฒนาเห็นภาพรวมของประสิทธิภาพของโมเดล
            ซึ่งช่วยในการปรับแต่งและพัฒนาโมเดลภาษาให้ดียิ่งขึ้น โดยลด Perplexity
            ให้ต่ำที่สุดเท่าที่จะทำได้
            <br />
            - การเปรียบเทียบโมเดลภาษา (Model Comparison):
            ค่านี้ช่วยในการเปรียบเทียบประสิทธิภาพของโมเดลภาษาต่างๆ
            ในการประมวลผลข้อความเดียวกัน
            ซึ่งเป็นประโยชน์ในการเลือกโมเดลที่ดีที่สุดสำหรับการใช้งานที่เฉพาะเจาะจง
            <br />
            <div className="pb-1">
              คำแนะนำในการนำ Perplexity ไปประยุกต์ใช้ เช่น:
            </div>
            <br />
            - การประเมินและปรับแต่งโมเดล NLP (NLP Model Evaluation and Tuning)
            Perplexity เป็นตัวชี้วัดที่สำคัญในการประเมินโมเดลภาษาที่ใช้ในงาน NLP
            หากคุณกำลังพัฒนาโมเดลภาษาหรือทำงานกับโมเดลที่มีอยู่แล้ว การลดค่าของ
            Perplexity จะช่วยให้คุณทราบว่าโมเดลของคุณมีประสิทธิภาพมากขึ้น
            <br />
            - การวิเคราะห์และเลือกโมเดลภาษาที่ดีที่สุด (Choosing the Best
            Language Model) คุณสามารถใช้ Perplexity ในการเปรียบเทียบโมเดลต่างๆ
            เพื่อตัดสินใจเลือกโมเดลที่เหมาะสมที่สุดสำหรับงานของคุณ
            โดยการดูว่ามีโมเดลใดที่มีค่าต่ำสุดในบริบทที่คุณสนใจ
            <br />
            - การพัฒนาและปรับปรุงเครื่องมือสร้างข้อความ (Text Generation Tool
            Improvement)
            หากคุณกำลังพัฒนาเครื่องมือหรือแอปพลิเคชันที่สร้างข้อความ Perplexity
            จะเป็นตัวชี้วัดที่ช่วยให้คุณสามารถปรับปรุงความแม่นยำในการสร้างข้อความ
            โดยการลดค่าของ Perplexity ในโมเดลที่คุณใช้
            <br />
            - การวิเคราะห์ความซับซ้อนของเนื้อหาสำหรับการศึกษา (Content
            Complexity Analysis for Education) Perplexity
            สามารถใช้ในการวิเคราะห์และจัดอันดับความซับซ้อนของเนื้อหาการศึกษา
            เพื่อให้คุณสามารถปรับระดับความยากของเนื้อหาตามความสามารถของผู้เรียนได้
            <br />- การวิจัยและพัฒนาด้าน NLP (NLP Research and Development)
            ในงานวิจัยที่เกี่ยวข้องกับการพัฒนาและทดสอบโมเดลภาษา Perplexity
            เป็นเครื่องมือที่สำคัญในการวัดความก้าวหน้าและประสิทธิภาพของโมเดล
            ซึ่งช่วยในการสร้างโมเดลที่มีคุณภาพสูงขึ้น
          </div>
        </div>
        <Image src={perplexImg} alt="" width={620} />
      </div>
    </div>
  );
}
