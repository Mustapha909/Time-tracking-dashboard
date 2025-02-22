import ActivityCard from './ActivityCard';

function ActivityGrid({ data, backgrounds, bgColors, timeframe }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <ActivityCard
          key={item.title}
          item={item}
          background={backgrounds[index]}
          bgColors={bgColors[index]}
          timeframe={timeframe}
        />
      ))}
    </div>
  );
}

export default ActivityGrid;
