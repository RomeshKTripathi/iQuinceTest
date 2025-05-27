import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Links from "./Links";
import { links } from "../data/data";

function Header() {
    return (
        <div className="w-auto  flex justify-between bg-white p-2 lg:px-3 lg:py-2 rounded-full">
            <Logo />
            <Links links={links} />
            <div className="flex max-md:hidden *:self-center gap-4">
                <a className="text-[#29ABDF] cursor-pointer" href="#">
                    International Clients
                </a>
                <Button text="Get Started" />
            </div>
        </div>
    );
}

export default Header;
