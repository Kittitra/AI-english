"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  label?: string;
  link?: string;
};

const arrMenu = [
  {
    label: "Main",
    link: "main",
  },
  {
    label: "Info",
    link: "info",
  },
  {
    label: "Footer",
    link: "footer",
  },
];

const Head = () => {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center gap-7 font-semibold text-md pr-[7rem]">
        {/* {arrMenu.map((item) => (
          <h1
            className=" cursor-pointer transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-110"
            onClick={() => {
              const element = document.getElementById(item.link);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item.label}
          </h1>
        ))} */}
        <Link
          className="py-10 text-md cursor-pointer transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-110"
          href="/"
        >
          Back to MainPage
        </Link>
      </div>
    </div>
  );
};

export default Head;
