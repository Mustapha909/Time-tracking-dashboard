function ActivityCard({ item, background }) {
  return (
    <div className="relative bg-blue-500 text-white rounded-lg flex-grow">
      {/* Background Icon */}
      <img
        src={background}
        alt=""
        className="absolute top-0 right-0 w-20 h-20 opacity-40"
      />
      <div className="relative bg-indigo-500 h-6xl py-4 px-4 rounded-lg translate-y-12 flex flex-col text-white justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <p>{item.timeframes.weekly.current}hrs</p>
        <p>{item.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  );
}

export default ActivityCard;
