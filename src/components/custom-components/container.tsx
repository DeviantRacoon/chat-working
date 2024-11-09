import { motion } from "framer-motion";
import { ReactNode } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

interface FormProps {
    children: ReactNode;
    fullWidth?: boolean;
    animateOnLoad?: boolean;
    loading?: boolean;
    className?: string;
}

export default function Container({
    children,
    fullWidth = false,
    animateOnLoad = true,
    loading = false,
    className = "",
}: FormProps) {
    return (
        <motion.div
            className={`relative ${fullWidth ? "w-full" : "w-auto"} min-h-96 p-4 space-y-4 ${className}`}
            initial={animateOnLoad ? { opacity: 0, y: -50 } : {}}
            animate={animateOnLoad ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {loading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-lg"
                >
                    <PlusIcon className="w-6 h-6 animate-spin text-blue-600" aria-hidden="true" />
                </motion.div>
            ) : (
                children
            )}
        </motion.div>
    );
}
