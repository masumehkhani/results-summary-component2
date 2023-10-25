import React from "react";

interface SummaryItem {
  id: number;
  title: string;
  src: string;
  score: number;
  bgColor:string
  txtColor:string

}

interface SummaryPartsProps {
  summaryItems: SummaryItem[];
}
// className=""
const SummaryParts: React.FC<SummaryPartsProps> = ({ summaryItems }) => {
  return (
    <>
      {summaryItems.map((item) => (
        <div className={`flex justify-between items-center font-[HankenGrotesk-Bold] text-sm p-3 sm:p-3 m-2 rounded-xl ${item.bgColor} ${item.txtColor}`} key={item.id}>
          <div className="flex">
            <span  className="flex justify-center items-center px-1">
              <img className=" text-sm" src={item.src} alt={item.title} />
            </span>
            <span className=" text-sm">{item.title}</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-blue-950">{item.score}</span>
            <span className="text-[#c2c0c0]">/100</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default SummaryParts;
