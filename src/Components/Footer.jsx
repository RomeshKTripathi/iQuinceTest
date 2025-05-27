import React from "react";
import Button from "./Button";
import { concioushealth } from "../assets/images";
import RoundIcon from "./RoundIcon";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import LinkedinIcon from "../assets/Icons/LinkedinIcon";
import SignupForEmail from "./SignupForEmail";
import Copyright from "./Copyright";

function Footer() {
    return (
        <div className=" relative bg-illustration bg-cover h-full w-full">
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-my-blue lg:to-my-dark-green bg-black opacity-95"></div>
            <div className="relative flex z-10 lg:p-20 p-4 text-white">
                <div className="w-1/3 flex flex-col gap-8 font-medium ">
                    <span className="text-xl block font-normal">
                        Making high quality mental health care easily
                        accessible, affordable and timely for everyone. Because
                        your mental health should not wait.
                    </span>
                    <span className="text-2xl block">
                        info@conscientiahealth.com
                    </span>
                    <span className="text-3xl block">
                        (877) 803-5342 (Phone)
                        <br /> (917) 477-6852 (Fax)
                    </span>
                    <span className="text-3xl block">
                        Find Providers by state
                    </span>
                    <Button
                        text="Find Providers By Store"
                        styles="w-fit lg:mt-8"
                        outline={true}
                    />
                </div>
                <div className="w-1/3 self-end flex justify-evenly">
                    <div>
                        <span className="font-medium ">Treatments</span>
                        <ul className="*:font-light text-xs *:mt-2">
                            <li>Anxity</li>
                            <li>Depression</li>
                            <li>ADHD</li>
                            <li>ADHD Testing</li>
                            <li>Bipolar</li>
                            <li>Grief</li>
                            <li>PTSD</li>
                            <li>Sucide Prevention</li>
                            <li>Weight Management</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-medium ">Quick Links</span>
                        <ul className="*:font-light text-xs *:mt-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Location</li>
                            <li>Career</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <img src={concioushealth} alt="" />
                    <span className=" block font-medium mt-8 ">
                        Signup for Newsletter
                    </span>
                    <SignupForEmail />
                </div>
            </div>
            <div className="relative z-10 lg:px-20 lg:py-8 p-4 text-white">
                <div className="w-full h-[1px] bg-white/70 rounded-full"></div>
                <div className="flex justify-between lg:text-xs mt-2">
                    <Copyright />
                    <div className="flex gap-3 *:cursor-pointer">
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
                    <div>Privacy | Terms</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
