import { PolicyImage } from "../assets/images";
import Button from "./Button";

function Policy() {
    return (
        <section className=" lg:p-20 p-4">
            <div className="w-full lg:flex lg:rounded-3xl rounded-2xl overflow-hidden">
                <div className="lg:w-1/2">
                    <img
                        src={PolicyImage}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="lg:w-1/2  lg:px-16 lg:py-20 p-8 bg-my-blue flex flex-col lg:gap-8 gap-6">
                    <span className="block lg:text-3xl text-2xl max-md:text-center leading-[30px] font-medium text-white">
                        Are You Coverd? <br />
                        Insurance Deductibles
                    </span>
                    <p className="text-white font-light max-md:text-center max-md:text-xs max-md:leading-5">
                        A health insurance deductible is a set amount of money
                        that an insured person must pay out of pocket every year
                        for eligible healthcare services before the insurance
                        plan begins to pay any benefits.
                    </p>
                    <Button
                        text="View Our Policy"
                        styles={"w-fit max-md:mx-auto"}
                        outline={true}
                    />
                </div>
            </div>
        </section>
    );
}

export default Policy;
