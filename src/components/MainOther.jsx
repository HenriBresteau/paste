import TitlePresentation from "./TitlePresentation";
import Button from "./Button";
import CardOther from "./CardOther";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { componentsData } from "../data/pageData";

const MainOther = () => {
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
    const currentPage = location.pathname.split("/").pop();
    const filteredCards = componentsData.filter(
        (card) => card.slug.toLowerCase() !== currentPage
    );
    const displayCards = showAll ? filteredCards : filteredCards.slice(0, 3);
    return (
        <div className="flex flex-col gap-10 mb-32">
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <TitlePresentation title="Other sections you might like" />
                <div onClick={() => setShowAll(!showAll)}>
                    <Button
                        title={!showAll ? "Browse all" : "Reduce"}
                        size="fit"
                        variant="secondary"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
                {[...displayCards].map((card, index) => (
                    <CardOther
                        key={index}
                        title={card.title}
                        date={card.date}
                        image={card.image}
                        badgePro={card.badgePro}
                        slug={card.slug}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainOther;
