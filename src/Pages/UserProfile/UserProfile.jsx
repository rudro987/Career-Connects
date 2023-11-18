import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="max-w-[85rem] mx-auto py-28 px-10">
      <h1 className="text-3xl text-center font-bold">
        {user.displayName}'s Profile
      </h1>
      <div className="pt-10">
        <div className="bg-white sm:flex gap-20 justify-center dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex-shrink-0 items-center relative w-full overflow-hidden pt-[40%] sm:rounded-xl sm:max-w-[25rem] md:rounded-lg md:max-w-md">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover"
              src={user.photoURL}
              alt="Profile picture"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 flex flex-col gap-5 h-full sm:p-7">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Profile name: {user.displayName}
              </h3>
              <p className="mt-1 text-charcoalGray  dark:text-gray-400">
                Email: {user.email}
              </p>
              <p className="mt-1 font-semibold text-charcoalGray dark:text-gray-400">
                Skills: 
                <ul className="list-decimal max-w-[70%] mx-auto pt-5 leading-8">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
