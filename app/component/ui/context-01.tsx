import NarrowAi from "@/app/public/Narrow_AI_IMG.png";
import GeneralAi from "@/app/public/Artificial_General_IMG.png";
import SuperAi from "@/app/public/SuperAi_IMG.png";
import { StaticImageData } from "next/image";
import React from "react";

interface AIInfoItem {
  title: string;
  body: string;
  propsName: string;
  propsperty: string;
  img: StaticImageData;
}

interface Context01Props {
  title: string[];
  body: string[];
  propsName: string[];
  propsperty: string[];
  img: string[];
}

const aiInfo: AIInfoItem[] = [
  {
    title: "AI แบบจำกัด (Narrow AI)",
    body: "AI แบบจำกัด (Narrow AI) หรือบางครั้งเรียกว่า Weak AI คือปัญญาประดิษฐ์ที่ออกแบบมาเพื่อทำงานเฉพาะด้านหรือแก้ปัญหาเฉพาะอย่างใดอย่างหนึ่งโดยเฉพาะ มันไม่มีความสามารถในการทำงานหลากหลายแบบมนุษย์หรือมีปัญญาทั่วไป แต่มีความเชี่ยวชาญในงานหรือฟังก์ชันที่กำหนดไว้เป็นอย่างดี",
    propsName: "คุณสมบัติของ Narrow AI",
    propsperty:
      "- มีความเชี่ยวชาญเฉพาะด้าน\n- ถูกออกแบบมาเพื่อทำงานหรือแก้ปัญหาเฉพาะด้านหนึ่งเท่านั้นขอบเขตจำกัด\n- ไม่สามารถทำงานที่อยู่นอกเหนือขอบเขตที่ถูกตั้งโปรแกรมไว้ได้พึ่งพาข้อมูลที่กำหนด\n- การทำงานของมันพึ่งพาข้อมูลและอัลกอริทึมที่ได้รับการพัฒนาและฝึกฝนมา",
    img: NarrowAi,
  },
  {
    title: "AI แบบทั่วไป (General AI)",
    body: "AI แบบทั่วไป (General AI) หรือที่เรียกว่า Artificial General Intelligence (AGI) คือปัญญาประดิษฐ์ที่มีความสามารถใกล้เคียงกับมนุษย์ในทุกด้าน ซึ่งหมายความว่ามันสามารถทำความเข้าใจ เรียนรู้ และปรับตัวได้เหมือนมนุษย์ โดยไม่มีการจำกัดเฉพาะในเรื่องใดเรื่องหนึ่งเหมือน Narrow AI",
    propsName: "คุณสมบัติของ General AI",
    propsperty: `- การเรียนรู้และการปรับตัว:
      AGI สามารถเรียนรู้จากประสบการณ์และข้อมูลใหม่ ๆ ได้อย่างอิสระ และสามารถปรับตัวกับสถานการณ์ต่าง ๆ ที่เปลี่ยนแปลงไป\n
      - ความเข้าใจในหลายด้าน:
      มีความสามารถในการทำงานที่หลากหลาย ไม่ว่าจะเป็นการแก้ปัญหาทางคณิตศาสตร์ การเขียนบทความ หรือการตอบคำถามเชิงปรัชญา\n
      - การตัดสินใจที่ซับซ้อน:
      สามารถทำการตัดสินใจที่ซับซ้อนและเชื่อมโยงหลายปัจจัยเข้าด้วยกันได้\n
      - การใช้เหตุผลและการวิเคราะห์:
      AGI มีความสามารถในการวิเคราะห์และใช้เหตุผลเพื่อแก้ไขปัญหาที่ซับซ้อนและท้าทาย\n`,
    img: GeneralAi,
  },
  {
    title: "AI ที่มีความสามารถมากกว่ามนุษย์ (Superintelligent AI)",
    body: "Superintelligent AI คือปัญญาประดิษฐ์ที่มีความสามารถทางสติปัญญาเหนือกว่ามนุษย์ในทุกด้าน ไม่ว่าจะเป็นการแก้ไขปัญหา การตัดสินใจ การเรียนรู้ หรือการสร้างสรรค์สิ่งใหม่ ๆ แนวคิดเกี่ยวกับ Superintelligent AI มักเกี่ยวข้องกับการพัฒนาของ AI ที่สามารถคิด วิเคราะห์ และประมวลผลข้อมูลได้อย่างรวดเร็วและแม่นยำกว่ามนุษย์ทุกคนรวมกัน",
    propsName: "คุณสมบัติของ Superintelligent AI",
    propsperty: `- การวิเคราะห์และการแก้ไขปัญหาที่เหนือชั้น:
      มีความสามารถในการวิเคราะห์ข้อมูลและแก้ไขปัญหาที่ซับซ้อนอย่างรวดเร็วและมีประสิทธิภาพสูงกว่า
      - การเรียนรู้และการปรับตัวอย่างรวดเร็ว:
      สามารถเรียนรู้จากประสบการณ์และปรับตัวได้อย่างรวดเร็วโดยไม่จำกัดอยู่ในกรอบใด ๆ
      - ความสามารถในการคิดเชิงสร้างสรรค์:
      สามารถคิดและสร้างสรรค์สิ่งใหม่ ๆ ที่มนุษย์ไม่เคยคิดถึงหรือไม่สามารถทำได้
      - การทำงานอย่างไม่หยุดยั้ง:
      ไม่มีข้อจำกัดทางกายภาพหรือความต้องการพักผ่อน ทำให้สามารถทำงานต่อเนื่องได้ตลอดเวลา`,
    img: SuperAi,
  },
];

const titlesAndBodies = aiInfo.map((item) => ({
  title: item.title,
  body: item.body,
  propsName: item.propsName,
  propsperty: item.propsperty,
  img: item.img.src,
}));

const Context_01: React.FC<Context01Props> = ({
  title,
  body,
  img,
  propsperty,
  propsName,
}) => {
  // คอมโพเนนต์ Context_01 implementation
  return (
    <div className="flex flex-col px-72 pt-[20rem]">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {title.map((t, index) => (
        <div key={index}>
          <div
            key={index}
            className="flex flex-row text-right pb-[20rem] gap-[7rem]"
          >
            <div className="w-full max-h-full">
              <img src={img[index]} alt={t} className=" rounded-md " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl font-semibold pb-5">{t}</h2>
              <p className=" text-sm pb-10">{body[index]}</p>
              <div className="text-2xl font-bold pb-2">{propsName[index]}</div>
              <div className=" text-xs">
                {propsperty[index].split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

const App: React.FC = () => (
  <Context_01
    title={titlesAndBodies.map((item) => item.title)}
    body={titlesAndBodies.map((item) => item.body)}
    img={titlesAndBodies.map((item) => item.img)}
    propsName={titlesAndBodies.map((item) => item.propsName)}
    propsperty={titlesAndBodies.map((item) => item.propsperty)}
  />
);

export default App;
