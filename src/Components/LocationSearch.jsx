import { map } from "../assets/images";
import { locations } from "../data/data";
import Chip from "./Chip";

function LocationSearch() {
    return (
        <div className="md:p-20 p-4 mb-20 ">
            <div className="rounded-xl md:rounded-3xl w-full overflow-hidden flex max-lg:flex-col-reverse">
                <img src={map} className="lg:w-3/5 object-cover" alt="" />
                <div className="bg-my-blue lg:w-2/5 p-8">
                    <span className="uppercase text-white font-medium block max-md:text-center mb-4">
                        Locations
                    </span>
                    <div className="max-lg:hidden flex flex-wrap gap-3">
                        {locations.map((location) => (
                            <Chip key={location.id} text={location.name} />
                        ))}
                    </div>
                    <select className="w-full border lg:hidden block border-white text-white bg-my-blue *:bg-white *:text-my-blue rounded-full md:p-4 px-3 py-2 outline-0">
                        <option value={""}>Choose a Location ...</option>
                        <option value={"China"}>China</option>
                        <option value={"India"}>India</option>
                        <option value={"US"}>US</option>
                        <option value={"Russia"}>Russia</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default LocationSearch;
