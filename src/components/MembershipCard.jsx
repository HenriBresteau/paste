import React from "react";
import Button from "./Button";
import clsx from "clsx";

const MembershipCard = ({ title, price, children, amount, popular }) => {
    return (
        <div
            className={clsx(" ", {
                "bg-gradient-to-r from-[#FF7A00] to-[#FF2900] p-0.5 rounded-lg":
                    popular,
            })}
        >
            <div
                className={clsx(
                    "border border-zinc-500 rounded-lg py-6 px-6 flex flex-col gap-4 justify-between hover:bg-zinc-700 relative hover:shadow-[0_14px_14px_-15px_rgba(255,255,255,0.15)] transition-all",
                    {
                        "border-transparent h-full w-full bg-neutral-900 hover:bg-transparent/25 ":
                            popular,
                    }
                )}
            >
                {popular && (
                    <div className="absolute top-6 right-4  text-white bg-gradient-to-r from-[#FF7A00] to-[#FF2900] px-4 py-2  rounded-full font-aeonik">
                        Popular
                    </div>
                )}

                <h3 className=" text-3xl font-inter_500 text-white ">
                    {title}
                </h3>
                <ul className="list-disc list-inside  indent-0 space-y-4 text-white/75 mb-4 border-b border-t border-dashed border-white/75 py-6">
                    {children}
                </ul>
                {amount ? (
                    <div className="flex gap-4 items-center">
                        <p className="text-3xl font-inter_500 text-white/75 line-through ">
                            {Number(price) + 31}$
                        </p>
                        <p className="text-4xl font-inter_500 text-white  ">
                            - {price}$
                        </p>
                    </div>
                ) : (
                    <p className="text-4xl font-inter_500 text-white ">
                        {" "}
                        {price}${" "}
                    </p>
                )}
                <Button title="Choose a plan" />
            </div>
        </div>
    );
};

export default MembershipCard;
