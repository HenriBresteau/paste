import logo from "../assets/logo.svg";
import Separator from "./Separator";
import NavbarItem from "./NavbarItem";
import { MenuIcon, Search, User, X } from "lucide-react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AvatarMobile from "./AvatarMobile";
import SeparatorDashed from "./SeparatorDashed";

const Navbar = () => {
    const [showAvatar, setShowAvatar] = useState(false);
    const avatarRef = useRef(null);

    const toogleAvatar = () => {
        console.log("Avatar");
        setShowAvatar((prevShowAvatar) => !prevShowAvatar);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                avatarRef.current &&
                !avatarRef.current.contains(event.target)
            ) {
                setShowAvatar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showAvatar]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <div className="flex flex-wrap  md:flex-nowrap  gap-8 p-8 items-center justify-between relative">
            <Link to="/">
                <img
                    src={logo}
                    alt="Paste Logo"
                    className="min-w-24 hover:saturate-200 hover:drop-shadow-[0_14px_8px_rgba(254,75,0,0.50)]  transition-all "
                />
            </Link>
            <div className="hidden md:flex">
                <Separator width="w-[1px]" heigth="h-6" />
            </div>
            <div className="hidden md:flex gap-6">
                <NavbarItem title="library" />
                <NavbarItem title="extensions" />
                <NavbarItem title="community" />
                <NavbarItem title="membership" />
            </div>

            <div className="flex md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute z-10 top-20 left-0 w-full bg-zinc-800 px-6 py-8 flex  gap-4 md:hidden justify-between items-center">
                    <div className="flex  flex-col gap-4">
                        <NavbarItem title="Library" />
                        <NavbarItem title="Extensions" />
                        <NavbarItem title="Community" />
                        <NavbarItem title="Membership" />
                    </div>
                    <div className="flex">
                        <AvatarMobile />
                    </div>
                </div>
            )}
            <div className="hidden md:flex">
                <Separator width="w-[1px]" heigth="h-6" />
            </div>
            <div className="relative w-full">
                <input
                    type="text"
                    className="bg-neutral-900 border border-stone-900 py-2.5 pl-11 pr-4 rounded-lg placeholder:text-zinc-500 text-white/75 font-inter_400 text-xs w-full focus:outline-dashed focus:outline-white/75 group"
                    placeholder="Search for specific components, sections, wireframes, and more..."
                />
                <div className="absolute inset-0 pl-4 flex items-center pointer-events-none text-zinc-500 ">
                    <Search size={16} />
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center border bg-neutral-900 border-stone-900 p-2.5 rounded-md hover:bg-neutral-700 cursor-pointer">
                <User color="white" size={16} onClick={() => toogleAvatar()} />
            </div>
            {showAvatar && (
                <div ref={avatarRef}>
                    <Avatar />
                </div>
            )}
        </div>
    );
};

export default Navbar;
