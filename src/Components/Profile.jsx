import React from "react";
import BlobImage from "../assets/BlobImage";

function Profile({ image, qualification, name }) {
    return (
        <div className="min-w-36 lg:min-w-64">
            <BlobImage image={image} />
            <div className="p-3">
                <span className="block text-center max-md:text-xs  text-my-green">
                    {qualification}
                </span>
                <span className="block text-center text-sm lg:text-lg font-medium">
                    {name}
                </span>
            </div>
        </div>
    );
}

export default Profile;
