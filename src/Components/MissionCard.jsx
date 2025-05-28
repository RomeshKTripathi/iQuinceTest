import React from "react";
import VideoCard from "./VideoCard";
import ArticleCard from "./ArticleCard";

function MissionCard() {
    return (
        <div className="flex max-lg:flex-col gap-4 ">
            <VideoCard />
            <ArticleCard />
        </div>
    );
}

export default MissionCard;
