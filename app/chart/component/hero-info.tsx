import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Link from "next/link";
import React from "react";

const chartData = [
  { month: "January", desktop: 500, mobile: 80 },
  { month: "February", desktop: 400, mobile: 200 },
  { month: "March", desktop: 300, mobile: 120 },
  { month: "April", desktop: 200, mobile: 190 },
  { month: "May", desktop: 100, mobile: 130 },
  { month: "June", desktop: 200, mobile: 250 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

type Props = {};

const HeroInfo = (props: Props) => {
  return (
    <div
      className=" w-[100%] h-[90vh] relative
    flex flex-row justify-center items-center
    p-10 pl-[2rem] gap-5
    "
    >
      <div>
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <BarChart data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col gap-3 font-bold text-right">
        <div className=" text-5xl pb-10">
          สถิติ ความสามารถ <br /> และศักยภาพ
        </div>
        <div className=" text-xl font-medium">ด้านต่างๆของ AI</div>
      </div>
    </div>
  );
};

export default HeroInfo;
