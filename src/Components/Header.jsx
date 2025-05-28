import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Links from "./Links";
import { links, navlinks } from "../data/data";
import HamburgerIcon from "../assets/Icons/HamburgerIcon";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="w-auto  flex justify-between bg-white p-2 md:px-3 md:py-2 rounded-full">
                <Logo />
                <Links links={navlinks} />
                <div className="flex max-lg:hidden *:self-center gap-4">
                    <a className="text-[#29ABDF] cursor-pointer" href="#">
                        International Clients
                    </a>
                    <Button text="Get Started" />
                </div>
                <div
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="lg:hidden bg-my-green p-2 rounded-full"
                >
                    <HamburgerIcon styles={"max-md:size-6 max-lg:size-8"} />
                </div>
            </div>
            <div
                className={`absolute z-auto lg:hidden right-0 max-md:w-1/2 max-lg:w-52 max-w-full bg-white rounded-2xl p-4 transition duration-200 ml-auto ${
                    showMenu ? "translate-x-0" : "translate-x-56 opacity-0"
                }`}
            >
                <ul className="*:p-2 *:block  *:text-center text-my-dark-green *:border-b-[1px] ">
                    {navlinks.map((link) => (
                        <li key={link.id}>{link.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
