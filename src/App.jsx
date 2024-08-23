import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pageData } from "./data/pageData";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Community from "./pages/Community";
import Membership from "./pages/Membership";
import Extensions from "./pages/Extensions";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <Router>
            <div className="bg-stone-950 min-h-dvh">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/library"
                        element={
                            <div className="flex flex-col-reverse md:flex-row">
                                <Sidebar />
                                <Library />
                            </div>
                        }
                    />
                    <Route
                        path="/community"
                        element={
                            <div className="flex flex-col-reverse md:flex-row ">
                                <Sidebar />
                                <Community />
                            </div>
                        }
                    />
                    <Route
                        path="/membership"
                        element={
                            <div className="flex flex-col-reverse md:flex-row">
                                <Sidebar />
                                <Membership />
                            </div>
                        }
                    />
                    <Route
                        path="/extensions"
                        element={
                            <div className="flex flex-col-reverse md:flex-row">
                                <Sidebar />
                                <Extensions />
                            </div>
                        }
                    />
                    {Object.entries(pageData).map(([key, data]) => (
                        <Route
                            key={key}
                            path={`/${key}`}
                            element={
                                <div className="flex flex-col md:flex-row ">
                                    <Sidebar />
                                    <Main {...data} />
                                </div>
                            }
                        />
                    ))}
                    <Route
                        path="*"
                        element={
                            <div className="flex flex-col md:flex-row ">
                                <Sidebar />
                                <PageNotFound />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
