import { motion } from "framer-motion";
import React, { ReactNode, ReactElement, cloneElement, isValidElement, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

interface FormProps {
    children: ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    rules?: { key: string, condition: (value: string) => string | null }[];
    fullWidth?: boolean;
    animateOnLoad?: boolean;
    loading?: boolean;
    className?: string;
}

export default function Form({
    children,
    onSubmit,
    rules = [],
    fullWidth = false,
    animateOnLoad = true,
    loading = false,
    className = "",
}: FormProps) {
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

    const handleChildChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const errorMessage = validateInput(name, value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const validateInput = (name: string, value: string): string | null => {
        const rule = rules.find((r) => r.key === name);
        return rule ? rule.condition(value) : null;
    };

    const enhancedChildren = React.Children.map(children, (child) => {
        if (isValidElement(child) && child.props.name) {
            const childName = child.props.name;
            return cloneElement(child as ReactElement, {
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChildChange(event);
                    if (child.props.onChange) {
                        child.props.onChange(event);
                    }
                },
                error: errors[childName] || null, 
            });
        }
        return child;
    });

    return (
        <motion.form
            onSubmit={onSubmit}
            className={`relative p-4 space-y-4 ${fullWidth ? "w-full" : "w-auto"} ${className}`}
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
                enhancedChildren
            )}
        </motion.form>
    );
}
