function ActivityCard({ item, background, bgColors, timeframe }) {
  return (
    <div
      className={`relative ${bgColors} text-white rounded-xl 
                  w-full sm:w-64 md:w-[200px] lg:w-[250px]
                  h-38 sm:h-42 md:h-48 lg:h-60 overflow-hidden`}
    >
      {/* Background Icon */}
      <img
        src={background}
        alt=""
        className="absolute top-0 right-0 w-16 sm:w-20 sm:h-20 h-16 opacity-40 filter invert"
      />

      {/* Inner Card */}
      <div
        className="absolute bottom-0 left-0 bg-[#1C204B] w-full p-4 rounded-xl
                      h-30 sm:h-36 md:h-40 lg:h-50"
      >
        <div className="flex justify-between items-center py-1">
          <h3 className="text-[18px] text-[#fff]">{item.title}</h3>
          <img src="/images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div className="flex flex-row justify-between sm:flex-col">
          <p className="text-3xl py-2 text-[56px] font-[400] text-[#fff]">
            {item.timeframes[timeframe].current}hrs
          </p>
          <p className="text-[15px] text-[#BBC0FF] font-[300]">
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
