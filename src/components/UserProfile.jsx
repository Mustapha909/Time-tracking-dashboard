function UserProfile({ selectedTimeframe, onSelectTimeframe }) {
  const timeframes = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className="relative bg-[#5747EA] text-white rounded-lg  w-full sm:w-80 md:w-[250px] lg:w-[300px] overflow-hidden h-auto min-h-[10rem] md:min-h-[20rem]">
      <div className="flex flex-row justify-between sm:flex-col p-6">
        <img
          src="./images/image-jeremy.png"
          alt="user"
          className="w-16 h-16 rounded-full"
        />
        <div className="pt-4">
          <p className="text-gray-400 text-sm">Report for</p>
          <h2 className="text-2xl font-bold">Jeremy Robson</h2>
        </div>
      </div>

      {/* Timeframe Buttons */}
      <div className="absolute bottom-0 left-0 bg-[#1C204B] w-full py-4 px-6 flex flex-row justify-between sm:flex-col gap-2 rounded-b-lg">
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
