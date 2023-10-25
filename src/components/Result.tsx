
const Result = () => {
  return (
    <div className=" w-full h-[45%] rounded-es-3xl rounded-ee-3xl sm:rounded-3xl sm:h-[400px] sm:w-[330px] p-4 flex flex-col justify-between items-center  bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
      <h1 className="text-base sm:text-xl text-Light-lavender font-[HankenGrotesk-Medium]">Your Result</h1>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem] from-violet-blue via-violet-blue to-persian-blue rounded-full ">
        <span className="text-white text-5xl sm:text-6xl font-[HankenGrotesk-ExtraBold]">76</span>
        <span className="text-Light-lavender text-sm sm:text-base font-[HankenGrotesk-Medium] sm:my-3">of 100</span>
      </div>
      <h3 className="text-xl sm:text-2xl text-Pale-blue font-[HankenGrotesk-Bold]">Great</h3>
      <p className="text-sm sm:text-base text-Light-lavender font-[HankenGrotesk-Medium] px-4 sm:px-6 text-center m-2 sm:m-4 ">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default Result
