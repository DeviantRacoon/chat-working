import { useState } from "react";
import { motion } from "framer-motion";
import { XCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";

type FileInputProps = {
  label?: string;
  id?: string;
  name?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  onFileSelect?: (file: File | null) => void;
};

export default function FileInput({
  label,
  id,
  name,
  className = "",
  size = "medium",
  onFileSelect,
}: FileInputProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setPreview(selectedFile && selectedFile.type.startsWith("image/") ? URL.createObjectURL(selectedFile) : null);
    if (onFileSelect) onFileSelect(selectedFile);
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    if (onFileSelect) onFileSelect(null);
  };

  const sizeClasses = {
    small: "h-16 w-16",
    medium: "h-24 w-24",
    large: "h-32 w-32",
  };

  return (
    <div className={`relative ${className} space-y-2`}>
      <div className="flex flex-col items-center">
        <input type="file" id={id} name={name} onChange={handleFileChange} className="hidden" />
        <label
          htmlFor={id}
          className={`flex items-center justify-center bg-blue-100 text-blue-500 rounded-full cursor-pointer border-2 border-dashed border-blue-300 transition duration-300 ease-in-out hover:bg-blue-200 hover:text-blue-600 ${preview ? "hidden" : "flex"} ${sizeClasses[size]}`}
        >
          <PhotoIcon className="h-12 w-12" aria-hidden="true" />
          <span className="sr-only">Seleccionar archivo</span>
        </label>
        {preview && (
          <motion.div
            className="relative mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={preview} alt="Vista previa del archivo" className={`w-32 h-32 object-cover rounded-full border border-gray-300 ${sizeClasses[size]}`} />
            <button
              onClick={clearFile}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 text-red-500 hover:text-red-600 focus:outline-none"
              aria-label="Eliminar archivo"
            >
              <XCircleIcon className="h-6 w-6" />
            </button>
          </motion.div>
        )}
        {label && !preview && <label htmlFor={id} className="block text-gray-600 text-sm mt-2">{label}</label>}
      </div>
    </div>
  );
}



