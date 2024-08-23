import Hero from "../components/Hero";
import icon from "../assets/logo-icon.svg";
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 relative h-[calc(100vh-102px)] w-full z-0">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0c0a09_50%,#9c9c9c_100%)]"></div>
            <div className="absolute inset-0 -z-10 bg-[url('/src/assets/logo-icon.svg')] bg-center opacity-5 "></div>
            <Hero />
        </div>
    );
};

export default Home;
