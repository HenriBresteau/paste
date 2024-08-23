import React from "react";
import SidebarTitle from "./SidebarTitle";
import SidebarItem from "./SidebarItem";
import webflow from "../assets/webflow.svg";
import figma from "../assets/figma.svg";
import bgBtn from "../assets/bg-pro.svg";
import { Bookmark, LayoutGrid, Sparkles, Star, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="border-t border-r border-l-0 border-b-0 border-stone-900 p-8  lg:w-[280px] flex flex-col gap-6">
            <SidebarTitle title="Plateform" icon={<Zap width={16} />}>
                <SidebarItem icon={webflow} title="Webflow" to="/plateform" />
                <SidebarItem icon={figma} title="Figma" to="/plateform" />
            </SidebarTitle>
            <SidebarTitle
                title="Sections"
                icon={<LayoutGrid width={16} />}
                more={true}
            >
                <SidebarItem title="Hero" to="/hero" />
                <SidebarItem title="Modal" to="/modal" />
                <SidebarItem title="Services" to="/services" />
                <SidebarItem title="Testimonials" to="/testimonials" />
                <SidebarItem title="Pricing" to="/pricing" />
                <SidebarItem title="FAQ" to="/faq" />
                <SidebarItem title="Footer" to="/footer" />
            </SidebarTitle>
            <SidebarTitle title="Style" icon={<Sparkles width={16} />}>
                <SidebarItem title="Color" to="/color" />
                <SidebarItem title="Text" to="/text" />
                <SidebarItem title="Typography" to="/typography" />
                <SidebarItem title="Border" to="border" />
            </SidebarTitle>
            <SidebarTitle title="Saved" icon={<Bookmark width={16} />}>
                <SidebarItem title="Top" to="/top" />
                <SidebarItem title="Recent" to="/recent" />
            </SidebarTitle>
            <SidebarTitle title="Plan" icon={<Star width={16} />}>
                <SidebarItem title="Free" to="/membership" />
                <SidebarItem title="Pro" to="/membership" />
                <SidebarItem title="Elite" to="/membership" />
            </SidebarTitle>

            <NavLink
                to="/membership"
                className="flex w-fit lg:w-full px-6 justify-center items-center py-2.5 text-white font-inter_500 bg-zinc-900 hover:bg-zinc-800 rounded-md border border-zinc-700 relative overflow-hidden cursor-pointer group hover:shadow-[0_10px_20px_rgba(254,75,0,0.15)]"
            >
                <img
                    src={bgBtn}
                    alt=""
                    className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[80px] h-4 group-hover:scale-150 transition-all "
                />
                <p className="text-white font-inter_500 text-sm">
                    Upgrade to {""}
                    <span className="text-orange-600"> Pro </span>
                </p>
                <img
                    src={bgBtn}
                    alt=""
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-180  group-hover:scale-150 transition-all w-[80px] h-4 "
                />
            </NavLink>
        </div>
    );
};

export default Sidebar;
