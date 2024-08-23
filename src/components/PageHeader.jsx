const PageHeader = ({ title, description, icon: Icon, thumb, children }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 justify-between p-4">
            <div className="flex flex-col gap-4 max-w-lg">
                <h1 className="font-aeonik text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#FF2900]">
                    {title}
                </h1>
                <p className="text-white/75 font-inter_400">{description}</p>
                {children && children}
            </div>
            <div className="h-80 border bg-neutral-900 border-neutral-800 lg:w-1/2 rounded-lg overflow-hidden max-w-lg ">
                <img
                    src={thumb}
                    alt="preview"
                    className="opacity-75 w-full h-full  object-cover"
                />
            </div>
        </div>
    );
};

export default PageHeader;
