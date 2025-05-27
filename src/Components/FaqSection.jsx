import React from "react";
import TextLink from "./TextLink";
import QnaPanel from "./QnaPanel";

function FaqSection() {
    return (
        <div className="p-4 lg:p-20 flex max-md:flex-col max-md:gap-4 ">
            <div className="lg:w-1/2">
                <TextLink text={"FREQUENTLY ASKED QUESTIONS"} />
                <span className="lg:text-6xl block lg:mt-4 max-md:text-center  font-medium">
                    Your Answers to Popular Questions
                </span>
            </div>
            <div className="bg-white lg:w-1/2 ">
                <QnaPanel />
                <hr />
                <QnaPanel />
                <hr />
                <QnaPanel />
                <hr />
                <QnaPanel />
                <hr />
            </div>
        </div>
    );
}

export default FaqSection;
