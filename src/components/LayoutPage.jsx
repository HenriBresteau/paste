import React from "react";

const LayoutPage = ({ children }) => {
    return (
        <div className="bg-neutral-900 w-full border-t border-stone-900 overflow-y-auto scrollbar-stable h-screen">
            <div className="p-8 flex flex-col gap-10 max-w-screen-xl mx-auto ">
                {children}
            </div>
        </div>
    );
};

export default LayoutPage;
