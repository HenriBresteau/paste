import React from "react";
import MainPresentation from "./MainPresentation";
import MainOther from "./MainOther";
import LayoutPage from "./LayoutPage";

const Main = ({ title, description, badgePro, image }) => {
    return (
        <LayoutPage>
            <MainPresentation
                title={title}
                descprition={description}
                badgePro={badgePro}
                image={image}
            />
            <MainOther />
        </LayoutPage>
    );
};

export default Main;
