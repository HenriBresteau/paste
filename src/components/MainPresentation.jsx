import React from "react";
import TitlePresentation from "./TitlePresentation";
import preview from "../assets/preview.png";
import Button from "./Button";
import webflow from "../assets/webflow.svg";
import figma from "../assets/figma.svg";
import { Eye } from "lucide-react";

const MainPresentation = ({ title, descprition, badge }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-12  lg:gap-8 border-b-2 border-stone-900 pb-10">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4 lg:mr-4">
                    <TitlePresentation title={title} badge={badge} />
                    <p className="text-zinc-500 text-sm mb-20 lg:mb-10">
                        {descprition}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap xl:flex-nowrap justify-between gap-4">
                        <Button
                            title="Copy to Weblfow"
                            img={webflow}
                            size="default"
                        />
                        <Button
                            title="Copy to Figma"
                            img={figma}
                            size="default"
                        />
                    </div>
                    <Button
                        title="Live preview"
                        icon={<Eye size={20} />}
                        size="default"
                    />
                </div>
            </div>
            <img src={preview} alt="preview" />
        </div>
    );
};

export default MainPresentation;
