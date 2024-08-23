import { cva } from "class-variance-authority";

const buttonVariant = cva(
    "inline-flex items-center gap-2 justify-center font-inter_500 transition-all focus:outline-none cursor-pointer rounded-md",
    {
        variants: {
            size: {
                default: "py-3.5 px-4 text-sm w-full",
                fit: "py-2 px-2 text-xs w-fit ",
                home: "py-3.5 px-4 text-base w-fit ",
            },
            color: {
                primary:
                    "bg-zinc-900 text-white hover:bg-zinc-600 border border-zinc-800",
                secondary:
                    "bg-zinc-900 text-zinc-500 hover:text-white/75 hover:bg-zinc-600 border border-zinc-800 ml-auto",
                membership:
                    "bg-neutral-800 text-white hover:text-white border-2 border-zinc-700 hover:border-white hover:bg-neutral-900 ",
            },
        },
        defaultVariants: {
            size: "default",
            color: "primary",
        },
    }
);

const Button = ({ img, icon, title, size, variant }) => {
    return (
        <div className={buttonVariant({ size, color: variant })}>
            {img ? <img src={img} alt="title" className="w-6 h-6" /> : icon}
            <p className="font-inter_500">{title}</p>
        </div>
    );
};

export default Button;
