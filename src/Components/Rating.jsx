import React from "react";
import StarIcon from "../assets/Icons/StarIcon";

function Rating() {
    return (
        <span className="flex w-full justify-center gap-2">
            <StarIcon styles={"lg:size-5 size-3"} />
            <StarIcon styles={"lg:size-5 size-3"} />
            <StarIcon styles={"lg:size-5 size-3"} />
            <StarIcon styles={"lg:size-5 size-3"} />
            <StarIcon styles={"lg:size-5 size-3"} />
        </span>
    );
}

export default Rating;
