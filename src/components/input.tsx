import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

type CustomInputProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  icon?: any;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  id?: string;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: string | null;  // Cambiamos a string | null para mostrar el mensaje
};

const sizeClasses = {
  small: "py-2 pl-10 pr-10 text-sm",
  medium: "py-3 pl-12 pr-12 text-base",
  large: "py-4 pl-14 pr-14 text-lg",
};

export default function Input({
  value,
  type = "text",
  placeholder = "",
  size = "medium",
  icon: Icon,
  required = false,
  disabled = false,
  className = "",
  onChange,
  onFocus,
  onBlur,
  name,
  label,
  id,
  autoComplete = "off",
  error,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <motion.div whileFocus={{ scale: 1.02 }} className={`relative ${className} space-y-1`}>
      {label && <label htmlFor={id} className="text-gray-500">{label}</label>}

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-6 w-6" />
        )}
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          name={name}
          id={id}
          autoComplete={autoComplete}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full border ${error ? "border-red-500" : "border-gray-200"} rounded-md shadow-sm focus:outline-none focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-indigo-400"} transition duration-300 ease-in-out ${sizeClasses[size]} ${Icon ? "pl-12" : "pl-4"} ${disabled ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
        />

        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </motion.div>
  );
}
