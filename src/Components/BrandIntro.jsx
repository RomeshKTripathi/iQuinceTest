function BrandIntro() {
    return (
        <div className="flex max-md:mt-8 flex-col md:gap-8 gap-2 *:self-end lg:w-2/3 md:py-20 text-white ">
            <span className="text-4xl md:text-[80px] font-semibold text-white max-lg:mx-auto  ">
                Conscientia <span className="text-[#5B9D24]">Health</span>
            </span>
            <span className="text-lg md:text-3xl lg:text-4xl max-lg:block max-lg:w-full max-lg:text-center font-extralight">
                Your Health In Mind
            </span>
            <span className="uppercase text-xs max-md:block max-md:w-full max-lg:text-center text-right md:text-2xl">
                Book an appointment with us today and receive the help you
                deserve.
            </span>
        </div>
    );
}

export default BrandIntro;
