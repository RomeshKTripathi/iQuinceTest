import React from "react";
import { logo } from "..//assets/images/index.js";

function Logo() {
    return (
        <img
            src={logo}
            className=" ml-2 w-fit h-8 self-center md:h-fit my-auto "
            alt=""
        />
    );
}

export default Logo;
