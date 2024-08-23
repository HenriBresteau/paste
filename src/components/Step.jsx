import React from "react";
import Button from "./Button";

const Step = ({ number, title, description, children }) => {
    return (
        <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-zinc-800 border-2 border-zinc-700 rounded-full shadow">
                <span className="text-2xl font-aeonik text-gray-700 dark:text-gray-200">
                    {number}
                </span>
            </div>
            <h3 className="mt-4 text-lg font-inter_500 leading-tight text-white">
                {title}
            </h3>
            <p className="mt-4 text-base text-gray-400">{description}</p>
            <div className="mt-4 flex items-center justify-center gap-4">
                {children}
            </div>
        </div>
    );
};

export default Step;
