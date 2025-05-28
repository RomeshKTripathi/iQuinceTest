import React from "react";

function Links({ links }) {
    return (
        <ul className="flex max-lg:hidden gap-5 my-auto">
            {links.map((link) => (
                <li
                    key={link.id}
                    className="hover:underline cursor-pointer  font-medium text-neutral-900"
                >
                    {link.title}
                </li>
            ))}
        </ul>
    );
}

export default Links;
