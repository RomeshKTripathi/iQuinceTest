import React, { useEffect, useState } from "react";

function RenderImage({ image }) {
    return (
        <div className="self-end overflow-hidden">
            <img
                src={image}
                className={`w-full h-auto lg:h-80 opacity-0 transition-all duration-300 animate-slide-up`}
                alt=""
            />
        </div>
    );
}

export default RenderImage;
