import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IMessage } from "../../../../interfaces/message.interface";

import Message from "./message";

export default function Box({
  messages,
  isCurrentUser,
}: {
  messages: IMessage[];
  isCurrentUser: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-sm w-full h-full p-4 overflow-y-scroll"
    >
      {messages.map((message, index) => (
        <Message key={index} message={message} isCurrentUser={isCurrentUser} />
      ))}

      <div ref={bottomRef} />
    </motion.div>
  );
}


