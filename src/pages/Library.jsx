import PageHeader from "../components/PageHeader";
import TitlePresentation from "../components/TitlePresentation";
import thumbail from "../assets/thumbnail_library.svg";
import LayoutPage from "../components/LayoutPage";
import Button from "../components/Button";
import webflow from "../assets/webflow.svg";
import figma from "../assets/figma.svg";
import Step from "../components/Step";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import MainOther from "../components/MainOther";

const Library = () => {
    return (
        <LayoutPage>
            <PageHeader
                title="Component Library"
                description="Explore a comprehensive collection of reusable UI components designed to streamline your development process. Each component is customizable, responsive, and built to enhance user experience across various platforms. Discover buttons, modals, forms, and more to integrate seamlessly into your projects."
                thumb={thumbail}
            />
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <TitlePresentation title="It's Never Been Easier with Paste" />
                </div>
            </div>
            <section className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="px-4 py-12 overflow-hidden">
                    <div className="px-4 mx-auto max-w-screen-lg relative">
                        <div className="relative">
                            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                <svg
                                    className="w-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="875"
                                    height="48"
                                    viewBox="0 0 875 48"
                                    fill="none"
                                >
                                    <path
                                        d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                        stroke="#D4D4D8"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeDasharray="1 12"
                                    />
                                </svg>
                            </div>
                            <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                                <Step
                                    number={1}
                                    title="Choose the Component"
                                    description="Browse our component library and select the one that fits your needs."
                                >
                                    <Link to="/hero">
                                        <Button title="Hero" size="fit" />
                                    </Link>
                                    <Link to="/modal">
                                        <Button title="Modal" size="fit" />
                                    </Link>
                                    <Link to="/services">
                                        <Button title="Services" size="fit" />
                                    </Link>
                                </Step>
                                <Step
                                    number={2}
                                    title="Copy to Figma or Webflow"
                                    description="With a simple click, copy the selected component directly into your preferred tool."
                                >
                                    <Button
                                        img={figma}
                                        title="Figma"
                                        size="fit"
                                    />
                                    <Button
                                        img={webflow}
                                        title="Webflow"
                                        size="fit"
                                    />
                                </Step>
                                <Step
                                    number={3}
                                    title="Customize and Integrate"
                                    description="Adjust the component's style and content to match your brand and seamlessly integrate it into your project."
                                ></Step>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutPage>
    );
};

export default Library;
