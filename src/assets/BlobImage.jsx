import React from "react";

function BlobImage({ image }) {
    return (
        <svg
            className="hover:scale-105 transition-transform duration-200"
            viewBox="0 0 180 180"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="blobClip">
                    <path
                        fill="#FF0066"
                        d="M54,-52.8C67.2,-40.9,73,-20.5,73,0.1C73.1,20.6,67.4,41.2,54.3,56.3C41.2,71.4,20.6,81.1,-1.1,82.2C-22.8,83.3,-45.6,75.8,-58,60.7C-70.5,45.6,-72.6,22.8,-71.2,1.3C-69.9,-20.1,-65.1,-40.2,-52.7,-52.1C-40.2,-63.9,-20.1,-67.5,0.2,-67.7C20.5,-67.9,40.9,-64.6,54,-52.8Z"
                        transform="translate(100 100)"
                    />
                </clipPath>
            </defs>

            <image
                href={image}
                width="160"
                height="160"
                x="20"
                y="32"
                clipPath="url(#blobClip)"
                preserveAspectRatio="xMidYMid slice"
            />

            {/* Optional: Draw the blob outline */}
            {/* <use href="#blobPath" fill="none" stroke="#FF0066" strokeWidth="2" /> */}
        </svg>
    );
}

export default BlobImage;
