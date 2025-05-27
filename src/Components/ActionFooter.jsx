import React from "react";
import Button from "./Button";
import Round from "../assets/Icons/Round";

function ActionFooter() {
    return (
        <div className="relative  w-full bg-tree bg-cover ">
            <div className="absolute inset-0 bg-my-green opacity-90"></div>
            <div className="relative z-10 flex justify-between p-4 text-white lg:p-20">
                <div className="flex max-md:flex-col lg:w-3/5 lg:gap-8 gap-4">
                    <div className="flex col-span-6 flex-col lg:gap-12 max-md:gap-5">
                        <span className="block text-sm  lg:text-5xl font-medium ">
                            You Deserve To find relief, Today
                        </span>
                        <Button
                            text="Lets Go"
                            styles="lg:w-36 px-12 max-md:hidden"
                            outline={true}
                        />
                    </div>
                    <div className="lg:self-center text-xs lg:text-lg font-medium">
                        WELCOMING NEW PATIENTS:
                        <br />
                        Toll-free 1 (877) 803-534{" "}
                    </div>
                    <Button
                        text="Lets Go"
                        styles="w-fit  px-12 md:hidden"
                        outline={true}
                    />
                </div>
                <div className="flex lg:w-1/5 min-h-full justify-between">
                    <div className="self-center animate-rotatePingPong text-lg font-medium">
                        <Round styles={"lg:size-44 size-24 "} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionFooter;
