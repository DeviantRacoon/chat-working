import { ISectionProps } from "../../interfaces/section.interface";

export default function Section({
    id,
    fullWidth = false,
    marginTop,
    marginBottom,
    backgroundColor = "bg-transparent",
    minHeight = "screen",
    children,
}: ISectionProps) {

    const widthClass = fullWidth
        ? "w-screen"
        : "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl";

    const sectionClasses = [
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        `min-h-${minHeight}`,
        backgroundColor,
        widthClass,
        `mt-${marginTop}`,
        `mb-${marginBottom}`,
        "mx-auto",
    ].join(" ");

    return (
        <section id={id} className={sectionClasses} style={{ marginTop: marginTop, marginBottom: marginBottom }}>
            {children}
        </section>
    );
}
