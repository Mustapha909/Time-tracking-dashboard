import ActivityCard from '../components/ActivityCard';
import UserProfile from '../components/UserProfile';
import data from '../data/data.json';

const backgrounds = [
  'images/icon-work.svg',
  'images/icon-play.svg',
  'images/icon-study.svg',
  'images/icon-exercise.svg',
  'images/icon-social.svg',
  'images/icon-self-care.svg',
];

function Dashboard() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-4 gap-y-16 gap-x-4 p-4 w-[60%] h-[100%]">
          <div className="row-span-2 bg-blue-500 py-20 rounded-lg flex items-center justify-center text-white">
            <UserProfile />
          </div>

          {data.map((item) => (
            <ActivityCard
              key={item.title}
              item={item}
              background={backgrounds[data.indexOf(item)]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
