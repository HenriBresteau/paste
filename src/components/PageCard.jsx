const PageCard = ({ title, subtitle, icon: Icon }) => {
    return (
        <div className="flex flex-col gap-4 group border border-zinc-500 rounded-xl px-4 py-6 relative min-h-48 cursor-pointer hover:border-zinc-300 hover:shadow-[0_14px_14px_-15px_rgba(255,255,255,0.15)] transition-all">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-white ">
                    <Icon width={24} />
                    <h3 className="text-xl font-inter_500 ">{title}</h3>
                </div>
                <p className="text-zinc-500 font-inter_400 max-w-56 group-hover:text-white/75 transition-colors ">
                    {subtitle}
                </p>
            </div>
            <div className="absolute bottom-0 right-0 m-2 text-white opacity-10 w-24 h-24 pointer-events-none group-hover:rotate-6 transition-transform">
                <Icon className="w-full h-full" />
            </div>
        </div>
    );
};

export default PageCard;
