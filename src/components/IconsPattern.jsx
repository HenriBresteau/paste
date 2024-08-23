import { Layout, Moon, PenTool, TypeOutline } from "lucide-react";
import React from "react";

const IconsPattern = () => {
    const icons = [<Moon />, <TypeOutline />, <Layout />, <PenTool />];
    return (
        <div className="grid grid-cols-4 gap-4">
            <Moon color="white" />
            <TypeOutline color="white" />
            <Layout color="white" />
            <PenTool color="white" />
            {/* {icons.map((Icon, index) => (
                <div key={index} className="p-4">
                    <Icon className="text-white" />
                </div>
            ))} */}
        </div>
    );
};

export default IconsPattern;
