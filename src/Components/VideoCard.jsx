import React from "react";
import { promo } from "../assets/images";
import TextLink from "./TextLink";
import PlayIcon from "../assets/Icons/PlayIcon";
function VideoCard() {
    return (
        <div className="flex flex-col gap-4 lg:w-1/2">
            <img className="rounded-xl" src={promo} alt="Loading..." />
            <div className="flex lg:gap-5 gap-3 align-middle">
                <span className="bg-my-blue h-fit rounded-full lg:p-4 p-3 inline-block">
                    <PlayIcon styles={"lg:size-6 size-4"} />
                </span>
                <TextLink
                    text="Exclusive Interview with Mario Lopez"
                    styles="underline text-my-blue self-center"
                />
            </div>
        </div>
    );
}

export default VideoCard;
