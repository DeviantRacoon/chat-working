export default function Typography(
    {
        title,
        subtitle,
        padding = "2",
        variant = "h2",
        textAlign = "center",
    }: {
        title: string,
        subtitle?: string,
        padding?: string,
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "text" | "small"
        textAlign?: "left" | "center" | "right"
    }
) {
    return (
        <span aria-label="title" className={`p-${padding} text-${textAlign}`}>
            {variant === "h1" && <h1 className="text-4xl font-extrabold">{title}</h1>}
            {variant === "h2" && <h2 className="text-3xl font-extrabold">{title}</h2>}
            {variant === "h3" && <h3 className="text-2xl font-extrabold">{title}</h3>}
            {variant === "h4" && <h4 className="text-xl font-bold">{title}</h4>}
            {variant === "h5" && <h5 className="text-lg font-semibold">{title}</h5>}
            {variant === "h6" && <h6 className="text-base font-medium">{title}</h6>}
            {variant === "subtitle" && <p className="text-xl font-semibold">{title}</p>}
            {variant === "text" && <p className="text-base font-medium">{title}</p>}
            {variant === "small" && <p className="text-sm font-light">{title}</p>}

            {subtitle && (
                <p className={`text-${textAlign} text-gray-400`}>
                    {subtitle}
                </p>
            )}
        </span>
    )
}

