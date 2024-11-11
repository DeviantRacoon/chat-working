import { motion } from "framer-motion";
import { IMessage } from "../../../../interfaces/message.interface";

export default function Message({
  message,
  isCurrentUser,
}: {
  message: IMessage;
  isCurrentUser: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isCurrentUser ? 20 : -20 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`flex flex-col items-${
        isCurrentUser ? "end" : "start"
      } mb-2 break-words`}
    >
      <div
        className={`relative py-2 px-3 rounded-lg max-w-xs ${
          isCurrentUser
            ? "bg-gray-800 text-white self-end rounded-br-md"
            : "bg-gray-600 text-white self-start rounded-bl-md"
        } font-inter`}
      >
        <span className="whitespace-pre-wrap flex flex-col">
          <p className="text-sm">{message.text}</p>

          <small className="text-right text-[10px] mt-1 block text-gray-300">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
          
        </span>
      </div>
    </motion.div>
  );
}
