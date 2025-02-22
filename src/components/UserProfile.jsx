function UserProfile({ selectedTimeframe, onSelectTimeframe }) {
  const timeframes = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className="relative bg-[#5747EA] text-white rounded-xl  w-full sm:w-80 md:w-[250px] lg:w-[300px] overflow-hidden h-auto min-h-[10rem] md:min-h-[20rem]">
      <div className="flex flex-row justify-between sm:flex-col p-6">
        <img
          src="/images/image-jeremy.png"
          alt="user"
          className="w-20 h-20 rounded-full border-4 border-[#fff]"
        />
        <div className="pt-4">
          <p className="text-[#BBC0FF] text-[15px] font-[300] ">Report for</p>
          <h2 className="text-[40px] font-[500] ">Jeremy Robson</h2>
        </div>
      </div>

      {/* Timeframe Buttons */}
      <div className="absolute bottom-0 left-0 bg-[#1C204B] w-full py-4 px-6 flex flex-row justify-between sm:flex-col gap-2 rounded-b-xl text-[#7078C9] text-[18px] ">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => onSelectTimeframe(timeframe.toLowerCase())}
            className={`text-white opacity-60 hover:opacity-100 ${
              selectedTimeframe === timeframe.toLowerCase()
                ? 'font-bold opacity-100'
                : ''
            }`}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
