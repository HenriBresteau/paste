import PageHeader from "../components/PageHeader";
import TitlePresentation from "../components/TitlePresentation";
import extensionsData from "../data/extensionsData";
import PageCard from "../components/PageCard";
import { Blocks } from "lucide-react";
import thumbnail from "../assets/thumbnail_extension.svg";
import LayoutPage from "../components/LayoutPage";

const Extensions = () => {
    return (
        <LayoutPage>
            <PageHeader
                title="Extensions"
                description="Enhance your UI components with additional features and functionality using our range of extensions"
                thumb={thumbnail}
            />
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <TitlePresentation title="Available Extensions" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extensionsData.map((extension) => (
                        <PageCard key={extension.id} {...extension} />
                    ))}
                </div>
            </div>
        </LayoutPage>
    );
};

export default Extensions;
