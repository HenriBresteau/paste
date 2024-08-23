import { NavLink } from "react-router-dom";
import ico from "../assets/logo-icon.svg";
import Button from "./Button";
import { ChevronRightCircleIcon } from "lucide-react";
const Hero = () => {
    return (
        <div className="flex py-16 relative z-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative max-w-xs md:max-w-lg">
                    <h1 className="font-inter_500  text-4xl md:text-7xl leading-[1.15] text-center text-white">
                        Bring Your{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#FF2900]">
                            Ideas{" "}
                        </span>
                        to{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#FF2900]">
                            Life{" "}
                        </span>
                        with <span className="font-aeonik ">Paste</span>{" "}
                    </h1>
                    <span className="absolute md:right-5 md:bottom-1 rotate-2  right-1/2 translate-x-1/2  ">
                        <img src={ico} className="w-10 h-10" />
                    </span>
                </div>
                <p className="font-inter_400 text-white/75 max-w-xs md:max-w-lg text-center mt-8 md:mt-0">
                    Ready-to-use components for stunning designs. <br /> Export
                    seamlessly to Webflow and Figma.
                </p>
                <NavLink to="/library" className="mt-4">
                    <Button
                        title="Go to Library"
                        size="home"
                        icon={<ChevronRightCircleIcon />}
                    />
                </NavLink>
            </div>
        </div>
    );
};

export default Hero;
