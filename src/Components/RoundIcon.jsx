import React from "react";

function RoundIcon({ children }) {
    return (
        <span className="size-8 bg-white rounded-full *:self-center flex justify-center align-middle">
            {children}
        </span>
    );
}

export default RoundIcon;
