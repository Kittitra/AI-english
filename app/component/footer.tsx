import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row justify-between px-[15rem] bg-slate-950 p-10">
      <div>
        <div className="text-3xl">AI Literacy</div>
        <hr className="mt-1" />
        <div className="pt-2">Website แนะนำและให้ความรู้เกี่ยวกับเรื่อง AI</div>
      </div>
      <div>
        <div className="text-xl text-right">จัดทำโดย</div>
        <hr className="pb-3" />
        <div className="flex flex-col text-right">
          <div>นายจิรภัทร ศรีทิพย์</div>
          <div>นายถนัดกิจ มงคล</div>
          <div>นายวรวุฒิ ศรีสุคนธ์</div>
          <div>นายวัชรพงษ์ ไชยยะ</div>
          <div>นายกิตติธรา กาวินัน</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
