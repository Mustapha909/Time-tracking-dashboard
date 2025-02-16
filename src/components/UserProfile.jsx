function UserProfile() {
  return (
    <>
      <div className="bg-indigo-950 flex flex-col justify-center items-center text-white  ">
        <div className="bg-indigo-800  ">
          <img
            src="./images/image-jeremy.png"
            alt="user"
            className="w-16 h-16 rounded-full"
          />
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
        <div className=" mt-4">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
