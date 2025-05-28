import React from "react";
import { concioushealth } from "../assets/images";
import RoundIcon from "./RoundIcon";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import LinkedinIcon from "../assets/Icons/LinkedinIcon";
import SignupForEmail from "./SignupForEmail";
import Copyright from "./Copyright";

function FooterMobile() {
    return (
        <div className=" relative bg-illustration bg-cover h-full w-full">
            <div className="absolute inset-0  bg-black opacity-95"></div>
            <div className="relative flex flex-col gap-4 z-10 p-4 md:px-20 text-white">
                <div>
                    <img
                        src={concioushealth}
                        className="w-1/2 mx-auto"
                        alt=""
                    />
                </div>
                <div className="text-center text-xs md:text-sm text-my-dark-green font-medium">
                    Making high quality mental health care easily accessible,
                    affordable and timely for everyone. Because your mental
                    health should not wait.
                </div>
                <div className="text-center text-xl font-medium">
                    info@conscientiahealth.com
                    <br />
                    (877) 803-5342 (Phone)
                    <br />
                    (917) 477-6852 (Fax)
                </div>
                <div className=" flex justify-center gap-3">
                    <RoundIcon>
                        <FacebookIcon styles={"size-4"} />
                    </RoundIcon>

                    <RoundIcon>
                        <InstagramIcon styles={"size-4"} />
                    </RoundIcon>
                    <RoundIcon>
                        <LinkedinIcon styles={"size-4"} />
                    </RoundIcon>
                </div>
                <div className="w-4/5 mx-auto">
                    <span className="block text-center ">
                        Signup for Newsletter
                    </span>
                    <SignupForEmail />
                </div>
                <Copyright />
                <div className="text-center text-sm ">
                    Privacy Policy | Terms of Service
                </div>
            </div>
        </div>
    );
}

export default FooterMobile;
