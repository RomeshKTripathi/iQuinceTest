function ActionCard() {
    return (
        <div className=" bg-[#29ABDF] md:rounded-4xl rounded-2xl lg:mx-auto flex  flex-col  lg:gap-5 md:gap-8 gap-4 p-4 lg:flex-row w-full mb-4 md:my-12 md:p-10 lg:p-20 text-white">
            <div className="w-full lg:w-2/3 text-sm text-center mx-auto md:text-3xl lg:text-4xl  font-medium">
                Please Select A State Or <br />
                Provider To Book An Appointment
            </div>
            <div className="w-2/3 lg:w-1/3 my-auto mx-auto">
                <select className="w-full border border-white text-white bg-my-blue *:bg-white *:text-my-blue rounded-full md:p-4 px-3 md:py-3 py-1 outline-0">
                    <option value={""}>Choose a Location ...</option>
                    <option value={"China"}>China</option>
                    <option value={"India"}>India</option>
                    <option value={"US"}>US</option>
                    <option value={"Russia"}>Russia</option>
                </select>
            </div>
        </div>
    );
}

export default ActionCard;
