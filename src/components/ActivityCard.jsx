function ActivityCard({ item, background, bgColors, timeframe }) {
  return (
    <div
      className={`relative ${bgColors} text-white rounded-lg 
                  w-full sm:w-64 md:w-[200px] lg:w-[250px]
                  h-38 sm:h-42 md:h-48 lg:h-50 overflow-hidden`}
    >
      {/* Background Icon */}
      <img
        src={background}
        alt=""
        className="absolute top-0 right-0 w-16 sm:w-20 sm:h-20 h-16 opacity-40 filter invert"
      />

      {/* Inner Card */}
      <div
        className="absolute bottom-0 left-0 bg-[#1C204B] w-full p-4 rounded-lg 
                      h-30 sm:h-36 md:h-40 lg:h-40"
      >
        <div className="flex justify-between items-center py-1">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div className="flex flex-row justify-between sm:flex-col">
          <p className="text-3xl font-bold py-2">
            {item.timeframes[timeframe].current}hrs
          </p>
          <p className="text-lg text-gray-400">
            Last{' '}
            {timeframe === 'daily'
              ? 'day'
              : timeframe === 'weekly'
              ? 'week'
              : 'month'}{' '}
            - {item.timeframes[timeframe].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
