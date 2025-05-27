import React from "react";

function RenderImage({ image }) {
    return (
        <div className="self-end overflow-hidden">
            <img
                src={image}
                className="w-full h-full animate-slide-up "
                alt=""
            />
        </div>
    );
}

export default RenderImage;
