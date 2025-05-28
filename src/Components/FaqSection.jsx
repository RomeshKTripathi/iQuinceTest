import React from "react";
import TextLink from "./TextLink";
import QnaPanel from "./QnaPanel";
import { FAQs } from "../data/data";

function FaqSection() {
    return (
        <div className="p-4 md:p-20 flex max-lg:flex-col max-md:gap-4 max-lg:gap-12 ">
            <div className="lg:w-1/2">
                <TextLink text={"FREQUENTLY ASKED QUESTIONS"} />
                <span className="md:text-6xl block md:mt-4 max-md:text-center  font-medium">
                    Your Answers to Popular Questions
                </span>
            </div>
            <div className="bg-white lg:w-1/2 ">
                {FAQs.map((Q) => {
                    return (
                        <>
                            <QnaPanel key={Q.id} {...Q} />
                            <hr />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default FaqSection;
