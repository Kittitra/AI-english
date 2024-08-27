import Image from "next/image";
import Hero from "./component/Hero";
import Content from "./component/Content";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Content />
    </div>
  );
}
