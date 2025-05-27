import { useState } from "react";
import { carouselData } from "../data/data";
import CarouselBlock from "./CarouselBlock";

function Carousel() {
    const [image, setImage] = useState("bg-anxity");
    const handleSetImage = (imageName) => {
        setImage(imageName);
    };
    return (
        <div
            className={`w-full lg:mt-12 mt-4 transition-transform duration-500 ${image} bg-cover `}
        >
            <div className="h-full w-full bg-black/50 max-md:flex max-md:overflow-x-scroll lg:grid lg:grid-cols-3">
                {carouselData.map((obj) => (
                    <CarouselBlock
                        key={obj.id}
                        handleSetImage={handleSetImage}
                        {...obj}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
