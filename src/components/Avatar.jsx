import { useEffect, useState } from "react";
import avatar from "../assets/c-moi.png";
import clsx from "clsx";
const Avatar = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Utilisez un effet pour déclencher l'animation
    useEffect(() => {
        setIsVisible(true); // Déclenche l'apparition lors du montage du composant
    }, [isVisible]);

    return (
        <div
            className={clsx(
                "absolute top-0 right-12 py-2 px-1 flex items-center flex-col gap-1.5 bg-zinc-800 drop-shadow-[0_1px_10px_rgba(0,0,0,0.10),inset_0_-15px_54px_rgba(14,16,11,1)] w-[178px] transform transition-transform duration-300  ",
                isVisible ? "translate-y-0" : "-translate-y-5"
            )}
        >
            <div className="py-5 px-12 border-dashed border-2 border-white/10 flex flex-col items-center gap-1 ">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-20 h-auto rounded-full"
                />
                <p className="font-inter_500 text-sm text-white ">Made by</p>
                <p className="underline underline-offset-4 text-sm text-white">
                    &copy;Henri B
                </p>
            </div>
        </div>
    );
};

export default Avatar;
