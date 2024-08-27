import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const HeroInfo = (props: Props) => {
  return (
    <div
      className=" w-[100%] h-[90vh] relative
    flex flex-col justify-center items-start
    p-10 pl-[20rem]
    "
    >
      <div className="flex flex-col gap-3 font-bold ">
        <h1 className=" text-2xl pb-4">เทคโนโลยีใหม่ที่ช่วยเหลือคุณ</h1>
        <div className=" text-5xl">Artificial Intelligence</div>
        <div className=" text-3xl">ปัญญาประดิษฐ์ ที่ช่วยให้ชีวิตดีขึ้น</div>
      </div>
      <div className="p-3 pt-10">
        <Button className=" bg-slate-900 hover:bg-white hover:text-black ">
          <Link href="/info">
            <div className="flex gap-2">
              <div>เนื้อหาเพิ่มเติม</div>
              <MoveRight className="text-xs" />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroInfo;
