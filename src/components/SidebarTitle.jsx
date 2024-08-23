import { ChevronDown } from "lucide-react";
import React, { Children } from "react";

const SidebarTitle = ({ icon, title, children, more }) => {
    return (
        <details className="flex flex-col gap-6 border-b border-dashed border-zinc-700 pb-6">
            <summary className="flex items-center justify-between cursor-pointer group">
                <div
                    className="flex items-center gap-4 transition-colors 
                text-white group-hover:text-white/75
                "
                >
                    <p>{icon}</p>
                    <p className="uppercase font-inter_500 text-sm  tracking-tight ">
                        {title}
                    </p>
                </div>
                <ChevronDown
                    size={24}
                    className="rotate-0 transform text-zinc-700 transition-all duration-300 group-hover:text-white/50"
                />
            </summary>
            <div className="border-l border-zinc-700 flex flex-col mt-6 gap-4 ">
                {children}
            </div>
            {more && (
                <p className="text-zinc-500 font-inter_400 text-sm tracking-tight mt-6 hover:text-white">
                    Show more +{" "}
                </p>
            )}
        </details>
    );
};

export default SidebarTitle;
