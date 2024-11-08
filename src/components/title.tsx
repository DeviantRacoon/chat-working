export default function Title(
    {
        title,
        subtitle,
        padding = "2",
    }: {
        title: string,
        subtitle?: string,
        padding?: string
    }
) {
    return (
        <span aria-label="title" className={`p-${padding}`}>
            <h2 className="text-3xl font-extrabold text-center text-gray-800">
                {title}
            </h2>

            {subtitle && (
                <p className="text-center text-gray-400">
                    {subtitle}
                </p>
            )}
        </span>
    )
}


