import PageHeader from "../components/PageHeader";
import LayoutPage from "../components/LayoutPage";
import Button from "../components/Button";
import thumbnail from "../assets/thumbnail_notfound.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <LayoutPage>
            <PageHeader
                title="404 - Page Not Found"
                description="Oops! The page you are looking for does not exist. It might have been moved or deleted."
                thumb={thumbnail}
            >
                <div className="mt-8">
                    <Link to="/library">
                        <Button title="Go back to the homepage" size="home" />
                    </Link>
                </div>
            </PageHeader>
        </LayoutPage>
    );
};

export default PageNotFound;
