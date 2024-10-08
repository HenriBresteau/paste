import { Bookmark } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardOther = ({ title, date, image, badgePro, slug }) => {
    console.log("🚀 ~ CardOther ~ slug:", slug);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };
    return (
        <Link to={`/${slug}`} className="flex flex-col gap-4 group">
            <div className="border relative border-zinc-500 rounded-lg before:inset-0 before:absolute before:bg-black/35 before:rounded-lg bg-zinc-900 group-hover:before:bg-black/20 before:z-10">
                <img
                    src={`./componsants/${image}`}
                    alt={title}
                    className="rounded-lg group-hover:scale-95 transition-all"
                />
            </div>
            <div className="flex flex-col gap-2 transition-all">
                <div className="flex items-center justify-between">
                    <h3 className="uppercase text-white font-inter_500 flex gap-2">
                        {title}{" "}
                        {badgePro && (
                            <span className="from-[#FF7A00] to-[#FF2900] text-base capitalize inline-block text-transparent bg-clip-text bg-gradient-to-r">
                                Pro
                            </span>
                        )}
                    </h3>
                    <div className="cursor-pointer" onClick={toggleBookmark}>
                        {isBookmarked ? (
                            <div className="">
                                <Bookmark
                                    size={16}
                                    style={{
                                        stroke: "url(#linear-gradient)",
                                        fill: "url(#linear-gradient)",
                                    }}
                                />
                            </div>
                        ) : (
                            <>
                                <Bookmark size={16} color="#7E7F81" />
                                <svg width="0" height="0">
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="100%"
                                        y1="100%"
                                        x2="0%"
                                        y2="0%"
                                    >
                                        <stop stopColor="#FF7A00" offset="0%" />
                                        <stop
                                            stopColor="#FF2900"
                                            offset="100%"
                                        />
                                    </linearGradient>
                                </svg>
                            </>
                        )}
                    </div>
                </div>
                <p className="text-zinc-500 group-hover:text-white/75 font-inter_400 transition-colors">
                    — Added {date}
                </p>
            </div>
        </Link>
    );
};

export default CardOther;
