import React from "react";

function Button({ outline = false, text = "Button Prototype", styles }) {
    return (
        <button
            className={`lg:px-8 px-8 outline-none lg:py-4 h-fit py-2 rounded-full bg-gradient-to-r from-my-green to-my-blue hover:from-my-blue hover:to-my-blue cursor-pointer transition-colors duration-300 text-white  font-medium text-sm ${
                outline ? "border-[1px] border-white" : ""
            } ${styles} `}
        >
            {text}
        </button>
    );
}

export default Button;
