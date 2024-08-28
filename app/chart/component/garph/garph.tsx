import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { Model: "ChatGPT", quanlity: 77, speed: 95, price: 7.5 },
  { Model: "Gemini", quanlity: 60, speed: 212, price: 0.13 },
  { Model: "LLama", quanlity: 72, speed: 30, price: 4.5 },
  { Model: "Mistral", quanlity: 72, speed: 41, price: 4.5 },
  { Model: "Claude", quanlity: 77, speed: 76, price: 6 },
  { Model: "Qwen2", quanlity: 69, speed: 48, price: 0.9 },
];

const chartConfig = {
  quanlity: {
    label: "quanlity",
    color: "#7798c4",
  },
  speed: {
    label: "speed",
    color: "#eaaa5a ",
  },
  price: {
    label: "price",
    color: "#274da1",
  },
} satisfies ChartConfig;

function Garph() {
  return (
    <div>
      <div className="flex justify-end text-xl">
        <ChartContainer config={chartConfig} className=" h-[40rem] w-[80rem]">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="Model"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="quanlity" fill="var(--color-quanlity)" radius={4} />
            <Bar dataKey="speed" fill="var(--color-speed)" radius={4} />
            <Bar dataKey="price" fill="var(--color-price)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default Garph;
