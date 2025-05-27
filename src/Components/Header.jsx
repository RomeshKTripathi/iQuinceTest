import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Links from "./Links";
import { links } from "../data/data";
import HamburgerIcon from "../assets/Icons/HamburgerIcon";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="w-auto  flex justify-between bg-white p-2 lg:px-3 lg:py-2 rounded-full">
                <Logo />
                <Links links={links} />
                <div className="flex max-md:hidden *:self-center gap-4">
                    <a className="text-[#29ABDF] cursor-pointer" href="#">
                        International Clients
                    </a>
                    <Button text="Get Started" />
                </div>
                <div
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="md:hidden bg-my-green p-2 rounded-full"
                >
                    <HamburgerIcon styles={"size-6"} />
                </div>
            </div>
            <div
                className={`absolute z-20 md:hidden right-0 w-1/2 max-w-full bg-white rounded-2xl p-4 transition duration-200 ml-auto ${
                    showMenu ? "translate-x-0" : "translate-x-52"
                }`}
            >
                <ul className="*:p-2 *:block  *:text-center text-my-dark-green *:border-b-[1px] ">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Treatments</li>
                    <li>Articles</li>
                </ul>
            </div>
        </>
    );
}

export default Header;
