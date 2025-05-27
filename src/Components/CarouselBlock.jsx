import React, { useState } from "react";

function CarouselBlock({
    title = "Some title",
    description = "description",
    image,
    handleSetImage,
}) {
    const [showDesc, setShowDesc] = useState(false);
    const handleMouseEnter = () => {
        setShowDesc(true);
        handleSetImage(image);
    };
    const handleMouseLeave = () => {
        setShowDesc(false);
    };
    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                setShowDesc((prev) => !prev);
            }}
            className="min-w-full border-[0.5px] border-neutral-400 h-52 flex flex-col gap-3 text-white/80 justify-center p-8"
        >
            <span className="block text-center font-medium text-2xl ">
                {title}
            </span>
            <p
                className={`text-center transition-all duration-500 overflow-hidden ${
                    showDesc ? "max-h-[100px] " : "max-h-0 text-transparent"
                }`}
            >
                {description}
            </p>
        </div>
    );
}

export default CarouselBlock;
