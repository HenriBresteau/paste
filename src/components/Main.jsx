import React from "react";
import MainPresentation from "./MainPresentation";
import MainOther from "./MainOther";
import LayoutPage from "./LayoutPage";

const Main = ({ title, description, badge }) => {
    return (
        <LayoutPage>
            <MainPresentation
                title={title}
                descprition={description}
                badge={badge}
            />
            <MainOther />
        </LayoutPage>
    );
};

export default Main;
