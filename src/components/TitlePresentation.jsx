import React from "react";

const TitlePresentation = ({ title, badge }) => {
    return (
        <div className="font-aeonik text-2xl text-white flex items-center gap-2 ">
            {title}
            {badge && (
                <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF2900] inline-block text-transparent bg-clip-text text-base">
                    {badge}
                </span>
            )}
        </div>
    );
};

export default TitlePresentation;
