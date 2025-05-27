function BrandIntro() {
    return (
        <div className="flex max-md:mt-8 flex-col lg:gap-8 gap-2 *:self-end lg:w-2/3 lg:py-20 text-white ">
            <span className="text-4xl lg:text-[80px] font-semibold text-white max-md:mx-auto  ">
                Conscientia <span className="text-[#5B9D24]">Health</span>
            </span>
            <span className="text-lg lg:text-4xl max-md:block max-md:w-full max-md:text-center font-extralight">
                Your Health In Mind
            </span>
            <span className="uppercase text-xs max-md:block max-md:w-full max-md:text-center text-right lg:text-2xl">
                Book an appointment with us today and receive the help you
                deserve.
            </span>
        </div>
    );
}

export default BrandIntro;
