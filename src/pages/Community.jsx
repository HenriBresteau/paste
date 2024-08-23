import React from "react";
import PageHeader from "../components/PageHeader";
import TitlePresentation from "../components/TitlePresentation";
import PageCard from "../components/PageCard";
import thumbnail from "../assets/thumbnail_community.svg";
import { Blocks, GraduationCap, Pencil } from "lucide-react";
import LayoutPage from "../components/LayoutPage";
const Community = () => {
    return (
        <LayoutPage>
            <PageHeader
                title="Community Contributions"
                description=" Explore, share, and discover amazing creations by our community"
                thumb={thumbnail}
            />
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <TitlePresentation title="Contribution Categories" />
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    <PageCard
                        title="Tutorials"
                        subtitle="Guides and how-tos from community members."
                        icon={GraduationCap}
                    />
                    <PageCard
                        title="Plugins"
                        subtitle="Additional tools and utilities."
                        icon={Blocks}
                    />
                    <PageCard
                        title="Modifications"
                        subtitle="Custom tweaks and enhancements."
                        icon={Pencil}
                    />
                </div>
            </div>
        </LayoutPage>
    );
};

export default Community;
