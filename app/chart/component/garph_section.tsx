import React from "react";
import Garph from "./garph/garph";

type Props = {};

const Garph_section = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 p-10 px-[10rem]">
      <div className="text-5xl text-right font-bold pb-[5rem]">
        กราฟแสดงข้อมูลของแต่ละโมเดล
      </div>
      <Garph />
      <div className="text-3xl font-semibold pb-[1rem]">
        จากกราฟเราสามารถแยกได้จากการเทียบข้อมูลประเภทต่างๆ
      </div>
      <div className="text-xl">
        <b>- Quantity</b> จะปรเมินจาก MMLU (Massive Multitask Language
        Understanding) เป็นหนึ่งในชุดข้อมูล (benchmark)
        ที่ใช้ในการประเมินประสิทธิภาพของโมเดลภาษา AI บนหลากหลายภารกิจ (tasks)
        และหลายโดเมนความรู้ และแปลงเป็นดัชนีคุณภาพการประเมิน ออกมาเป็นร้อยละ
      </div>
      <div className="text-xl">
        <b>- Speed</b> ประเมินจาก การหาค่าเฉลี่ยจากการแสดงผล
        token(คือหน่วยพื้นฐานของข้อมูลที่โมเดลภาษาใช้ในการประมวลผลข้อความ)
        ต่อวินาที
      </div>
      <div className="text-xl">
        <b>- Price</b> คือราคาที่ประเมินจากระดับราคาต่อการประมวณผล 1M token
      </div>
    </div>
  );
};

export default Garph_section;
