import Rating from "./Rating";

function CustomerReviews() {
    return (
        <section className="flex md:p-8 p-4 md:gap-5 gap-3 flex-col justify-center w-5/6 mx-auto">
            <span className="text-my-green underline block text-center max-md:text-xs">
                FROM OUR CUSTOMERS
            </span>
            <p className="text-center max-md:text-xs text-3xl leading-[50px]">
                “Excellent is an understatement. The services, products and good
                associate with Conscientia Health is what the planet deserves.
                Dr. Sim and her team I trust with the mental health of the
                communities I love- humanity”.
            </p>
            <Rating />
            <span className="block text-center md:text-2xl text-xs">P.P</span>
            <div className="md:w-fit md:h-2 min-h-1 mx-auto flex md:gap-4 gap-2">
                <span className="bg-my-blue md:w-16 w-6 h-1 rounded-full inline-block"></span>
                <span className="bg-my-blue-light md:w-16 w-6 h-1 rounded-full inline-block"></span>
                <span className="bg-my-blue-light md:w-16 w-6 h-1 rounded-full inline-block"></span>
                <span className="bg-my-blue-light md:w-16 w-6 h-1 rounded-full inline-block"></span>
            </div>
        </section>
    );
}

export default CustomerReviews;
