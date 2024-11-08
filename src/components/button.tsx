import { SVGProps, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/20/solid";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  handle?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  hoverEffect?: boolean;
  animateIcon?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  label,
  handle,
  size = "medium",
  icon: Icon,
  hoverEffect = false,
  animateIcon = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const transformLabel = (label: string): string => {
    return label
      .toLowerCase()
      .replace(/\s/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const newLabel = transformLabel(label || "icon`");

  const sizes = {
    small: "text-sm py-2 px-4",
    medium: "text-base py-3 px-6",
    large: "text-lg py-4 px-8",
  };

  const hoverClass = hoverEffect ? "hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50" : "";
  const iconAnimation = animateIcon ? "animate-pulse" : "";
  const clickAnimation = "active:scale-95 active:shadow-inner active:shadow-blue-500/50";

  return (
    <motion.button
      onClick={handle}
      type={type}
      whileHover={hoverEffect && !loading && !disabled ? { scale: 1.05 } : {}}
      whileTap={!loading && !disabled ? { scale: 0.95, boxShadow: "inset 0 0 0 2px #3B82F6" } : {}}
      disabled={disabled || loading}
      className={`bg-blue-800 text-gray-200 transition duration-300 ease-in-out rounded inline-flex items-center justify-center font-semibold shadow-md ${sizes[size]} ${hoverClass} ${clickAnimation} ${fullWidth ? "w-full" : ""
        } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label={newLabel}
      aria-live="polite"
    >
      <span className="flex items-center gap-1">
        {loading ? (
          <PlusIcon className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          <>
            {label}
            {Icon && (
              <Icon
                className={`w-${size === "small" ? 5 : size === "medium" ? 6 : 8} h-${size === "small" ? 4 : size === "medium" ? 6 : 8} ${iconAnimation}`}
                aria-hidden="true"
              />
            )}
          </>
        )}
      </span>
    </motion.button>
  );
}

