import React from "react";
import Image from "next/image";

import HeroImg from "@/app/public/hero01.png";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroInfo from "./hero-info";

type Props = {};

const Title = (props: Props) => {
  // h = 120vh
  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] h-[120vh] ">
        <HeroInfo />
      </div>
    </div>
  );
};

export default Title;
