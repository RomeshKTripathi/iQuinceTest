import React from "react";

function Chip({ text }) {
    return (
        <span className="block font-medium hover:bg-white cursor-pointer hover:text-black hover:border-black text-white py-2 px-4  w-32 text-center text-nowrap overflow-clip border border-white rounded-full">
            {text}
        </span>
    );
}

export default Chip;
