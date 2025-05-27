import React, { useState } from "react";

export default function QnaPanel({ question, answer, expanded = false }) {
    const [expand, setExpand] = useState(expanded);
    const handleExpand = () => {
        setExpand((prev) => !prev);
    };
    return (
        <div
            onClick={handleExpand}
            className="w-full lg:p-4 p-2 cursor-pointer"
        >
            <div className="flex justify-between">
                <span className="text-xl font-medium">
                    {question ?? "Your Question "}
                </span>
                <span className="text-xl lg:text-3xl">
                    {expand ? "-" : "+"}
                </span>
            </div>
            <p
                className={`${
                    expand ? "max-h-44" : "max-h-0"
                } transition-all duration-800 ease-in-out overflow-hidden`}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus porro qui deleniti cumque cupiditate, id minima ex
                veritatis, necessitatibus dicta distinctio quam facere doloribus
                adipisci dolor ipsum unde temporibus repellendus.
            </p>
        </div>
    );
}
