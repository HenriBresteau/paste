import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

const NavbarItem = ({ title }) => {
    return (
        <NavLink
            to={title}
            className={({ isActive }) =>
                clsx(
                    "bg-gradient-to-r text-white/75 font-inter_400 before:w-0 before:h-[1px] before:bg-gradient-to-r before:from-white before:to-orange-500 before:absolute relative before:bottom-0 before:translate-y-1 before:rounded-lg hover:text-white before:transition-all capitalize",
                    {
                        "!text-white before:w-full": isActive,
                    }
                )
            }
        >
            {title}
        </NavLink>
    );
};

export default NavbarItem;
