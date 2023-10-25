import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
import SummaryParts from "./SummaryParts";
const items = [
  { id: 0, src: memory, title: "Reaction", score: 90,bgColor:'bg-light-red',txtColor:'text-light-reda'},
  { id: 1, src: reaction, title: "Memory", score: 85,bgColor:'bg-orangey-yellow',txtColor:'text-orangey-yellowa' },
  { id: 2, src: verbal, title: "Verbal", score: 75,bgColor:'bg-green-teal',txtColor:'text-green-teala' },
  { id: 3, src: visual, title: "Visual", score: 95,bgColor:'bg-coblat-blue',txtColor:'text-coblat-bluea' },
];

const Summary = () => {
  return (
    <div className=" w-full h-[55%] sm:h-[400px] sm:w-[330px] p-4 flex flex-col justify-between">
      <h1 className="text-base sm:text-xl text-blue-900 font-[HankenGrotesk-Bold] mx-4">Summary</h1>
      <div className="w-full">
        <div className=" flex flex-col justify-between ">
          <SummaryParts summaryItems={items} />
        </div>
      </div>
      <button className="bg-blue-900 text-white w-[95%] m-2 p-2 rounded-3xl">
        Continue
      </button>
    </div>
  );
};

export default Summary;
