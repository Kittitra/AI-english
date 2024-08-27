import Image from "next/image";
import React from "react";

import infoHeaderImage from "@/app/public/infoHeader.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

type Props = {};

export default function Infosection_3({}: Props) {
  return (
    <div
      className="w-[100%] max-h-fit
      flex flex-row justify-start items-center px-40 gap-[5rem]
    "
    >
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-10 w-[70rem]">
          <div className=" text-3xl font-semibold pb-7">
            สถิติ ความสามารถ ศักยภาพ ของAI ในด้านต่างๆ
          </div>
          <div className="text-md pb-14">
            ศักยภาพและความสามารถของโมเดล AI ต่างๆ
            แต่ละโมเดลมีจุดเด่นและจุดด้อยต่างกันไป
            ขึ้นอยู่กับการใช้งานที่เฉพาะเจาะจง นี่คือการสรุปข้อมูลคร่าวๆ
            เกี่ยวกับโมเดล AI ต่างๆ
          </div>
          <div>
            <Button className=" bg-slate-900 hover:bg-white hover:text-black ">
              <Link href="/chart">
                <div className="flex gap-2">
                  <div>เนื้อหาเพิ่มเติม</div>
                  <MoveRight className="text-xs" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
        <div className=" relative">
          <Image className="w-[50rem]" src={infoHeaderImage} alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
