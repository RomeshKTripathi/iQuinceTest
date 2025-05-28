import React from "react";
import Button from "./Button";
import TextLink from "./TextLink";
import Blog from "./Blog";
import { blogData } from "../data/data";

function OurBlogs() {
    return (
        <div className="w-full flex flex-col gap-12 rounded-b-3xl  bg-gradient-to-b p-4 md:p-20 from-my-lightest-green to-transparent">
            <div className="lg:flex lg:justify-between">
                <div>
                    <TextLink text={"OUR BLOGS"} />
                    <span className="text-2xl block max-lg:text-center md:text-5xl font-medium">
                        Explore our Insights
                    </span>
                </div>
                <Button
                    text="View All Articles"
                    styles={"max-lg:hidden"}
                    outline={true}
                />
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 md:mt-20 max-lg:*:mb-12">
                <Blog {...blogData[0]} />
                <Blog {...blogData[1]} styles={"lg:-mt-12"} />
                <Blog {...blogData[2]} />
            </div>
            <Button
                text="View All Articles"
                styles={"lg:hidden w-fit mx-auto"}
                outline={true}
            />
        </div>
    );
}

export default OurBlogs;
