import clsx from "clsx";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                clsx("flex gap-2.5 items-center pl-6", {
                    "[&_.btn]:from-[#FF7A00] [&_.btn]:to-[#FF2900] [&_.btn]:w-1.5 [&_.text]:text-white":
                        isActive,
                })
            }
        >
            {icon && <img src={icon} />}
            <div className="flex items-center gap-1.5">
                <span className="btn rounded-full flex-none bg-gradient-to-r from-transparent to-transparent transition-all h-1.5 w-0 "></span>
                <p className="text font-inter_400 text-sm tracking-tight text-zinc-500  hover:text-white/75 cursor-pointer">
                    {title}
                </p>
            </div>
        </NavLink>
    );
};

export default SidebarItem;
