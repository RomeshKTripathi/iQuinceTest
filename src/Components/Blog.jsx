import { blog1 } from "../assets/images";

function Blog({ image, topic, title, description, author, date, styles }) {
    return (
        <div className={`w-full flex flex-col gap-4 ${styles}`}>
            <img className="rounded-3xl" src={image ?? blog1} alt="" />
            <div className="flex justify-between">
                <span className="block bg-my-green text-white py-2 px-5 text-sm rounded-full">
                    {topic ?? "Topic"}
                </span>
                <div className="text-sm self-center font-medium">
                    <span className="text-my-blue">{author ?? "Author"} </span>{" "}
                    {" | "}
                    <span>{date ?? "January 01, 2001"}</span>
                </div>
            </div>
            <div>
                <span className="lg:text-lg block lg:mb-4 text-my-blue font-medium">
                    {title ??
                        "New Year, New You: Prioritizing Mental Wellness in January"}
                </span>
                <span className="lg:text-sm text-xs block">
                    {description ??
                        "The start of a new year is always a time of reflection and renewal. It’s when we think about our goals, set resolutions, and dream of becoming the best versions of ourselves."}
                </span>
            </div>
        </div>
    );
}

export default Blog;
