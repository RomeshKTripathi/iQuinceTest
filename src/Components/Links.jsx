import React from "react";

function Links({ links }) {
    return (
        <ul className="flex max-lg:hidden gap-5 my-auto">
            {links.map((link, index) => (
                <li
                    key={index}
                    className="hover:underline cursor-pointer  font-medium text-neutral-900"
                >
                    {link}
                </li>
            ))}
        </ul>
    );
}

export default Links;
