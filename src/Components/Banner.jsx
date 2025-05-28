import Header from "./Header";
import BrandIntro from "./BrandIntro";
import Button from "./Button";
import {
    adhdperson,
    anxityperson,
    bipolarperson,
    depressperson,
} from "../assets/images";
import { memo, useEffect, useState } from "react";
import RenderImage from "./RenderImage";

const list = [anxityperson, depressperson, adhdperson, bipolarperson];
function Banner() {
    const [image, setImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev + 1) % list.length);
            console.log("Interval tick");
        }, 3000);

        return () => {
            clearInterval(interval);
            console.log("Interval cleared");
        };
    }, []);
    return (
        <section className="relative bg-cea bg-[#29ABDF] bg-cover w-full h-full rounded-b-3xl overflow-hidden p-4 pb-0">
            <div className="absolute inset-0 bg-my-blue-dark opacity-70"></div>
            <div className="relative z-10">
                <Header />
                <BrandIntro />
                <Button
                    outline={true}
                    text="Book an Appointment"
                    styles={"max-lg:block max-lg:my-6 max-lg:mx-auto"}
                />
            </div>
            <div className="relative z-10 flex justify-center min-h-64">
                <RenderImage image={list[image]} />
            </div>
        </section>
    );
}

export default Banner;
