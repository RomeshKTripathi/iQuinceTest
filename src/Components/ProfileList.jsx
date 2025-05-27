import LeftIcon from "../assets/Icons/LeftIcon";
import { profiles } from "../data/data";
import Profile from "./Profile";
function ProfileList() {
    return (
        <div className="flex flex-col lg:gap-4">
            <div className="flex lg:gap-12 gap-8 overflow-x-scroll max-h-100 [&::-webkit-scrollbar]:h-0 ">
                {profiles.map((profile) => (
                    <Profile key={profile.id} {...profile} />
                ))}
            </div>
            <div className="flex gap-4 *:cursor-pointer align-middle">
                <span className=" bg-my-green-light lg:p-3 p-1 align-middle justify-center h-fit rounded-full inline-block">
                    <LeftIcon styles={"size-8"} />
                </span>
                <span className="lg:p-3 p-1 rotate-180 h-fit bg-my-green align-middle justify-center rounded-full inline-block">
                    <LeftIcon styles={"size-8"} />
                </span>
                <div className="w-full lg:h-2 h-1 bg-my-blue-light rounded-full self-center">
                    <div className="w-1/5 bg-my-blue h-full hover:bg-my-blue-dark rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default ProfileList;
