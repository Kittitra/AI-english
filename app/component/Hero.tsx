import React from "react";
import Image from "next/image";

import HeroImg from "@/app/public/hero01.png";
import Head from "./Head";
import HeroInfo from "./ui/hero-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  // h = 120vh
  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] h-[120vh] ">
        <Image
          className="w-[100%] h-[120vh] 
          bg-gradient-to-b from-slate-800 to-slate-1000
          opacity-30 bg-cover bg-center absolute
          "
          width="0"
          height="0"
          src=""
          alt="hero"
        />
        <HeroInfo />
      </div>
    </div>
  );
};

export default Hero;
