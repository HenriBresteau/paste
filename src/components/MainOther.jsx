import TitlePresentation from "./TitlePresentation";
import Button from "./Button";
import CardOther from "./CardOther";

const cardsData = [
    {
        title: "Button Component",
        date: "02 Aug 2024",
        image: "Boutton.jpeg",
    },
    {
        title: "Modal Overlay",
        date: "10 Jul 2024",
        image: "Modal.jpeg",
    },
    {
        title: "Dropdown Menu",
        date: "23 Jun 2024",
        image: "Dropdown.jpeg",
    },
    {
        title: "Responsive Grid",
        date: "15 May 2024",
        image: "Grid.jpeg",
    },
    {
        title: "Input Field",
        date: "30 Apr 2024",
        image: "Input.jpeg",
    },
    {
        title: "Card Layout",
        date: "12 Mar 2024",
        image: "Layout.jpeg",
    },
    {
        title: "Tooltip",
        date: "01 Feb 2024",
        image: "Tooltip.jpeg",
    },
    {
        title: "Pagination",
        date: "19 Jan 2024",
        image: "Pagination.jpeg",
    },
    {
        title: "Avatar Badge",
        date: "03 Dec 2023",
        image: "Avatar.jpeg",
    },
];

const MainOther = () => {
    return (
        <div className="flex flex-col gap-10 mb-32">
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <TitlePresentation title="Other sections you might like" />
                <Button title="Browse all" size="fit" variant="secondary" />
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
                {[...cardsData]
                    .sort(() => Math.random() - 0.5)
                    .map((card, index) => (
                        <CardOther
                            key={index}
                            title={card.title}
                            date={card.date}
                            image={card.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default MainOther;
