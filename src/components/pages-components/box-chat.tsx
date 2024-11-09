import { useState } from "react";

import { Input, Button, Title } from "../custom-components";
import { PaperAirplaneIcon, HeartIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

const CURRENT_USER = "JHector";

interface IMessage {
    id: number,
    text: string,
    user: IUser
}

interface IUser {
    id: number,
    name: string
}

export default function BoxChat({
    currentUser
}: {
    currentUser?: { id: number, name: string }
}) {
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState<IMessage[]>([]);
    // const [newMessage, setNewMessage] = useState("");

    const sendNewMessage = () => {
        if (!inputMessage) return;

        // const newMessage = {
        //     id: 1,
        //     text: message,
        //     user: {
        //         id: 1,
        //         name: CURRENT_USER
        //     }
        // };

        // setMessages([...messages, newMessage]);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-2/3 flex flex-col gap-4">

            {!currentUser ? (
                <div className="flex flex-col items-center justify-center h-96">
                    <p className="text-gray-500">No hay usuario seleccionado</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between">
                        <Title title={`Chat con ${currentUser.name || "..."}`} />
                        <HeartIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                    </div>

                    <AnimatePresence>
                        <motion.div
                            key="chat-box"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0, rotate: -10 }}
                            transition={{ duration: 0.5 }}
                            className="flex-grow h-96 overflow-y-auto bg-gray-50 rounded-lg p-4"
                        >
                            {messages.length === 0 ? (
                                <p className="text-gray-500 text-center">No hay mensajes</p>
                            ) : (
                                messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: message.user.name === CURRENT_USER ? 30 : -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`py-2 px-4 mb-2 rounded-lg shadow-sm ${message.user.name === CURRENT_USER ? "bg-blue-100 text-blue-900 self-end" : "bg-white text-gray-700 self-start"}`}
                                    >
                                        <span className="font-medium">{message.user.name}:</span> {message.text}
                                    </motion.div>
                                ))
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center space-x-2">
                        <Input
                            id="new-message"
                            name="new-message"
                            value={inputMessage}
                            placeholder="Escribe un mensaje..."
                            onKeyUp={(event) => event.key === "Enter" && sendNewMessage()}
                            className="w-full"
                        />
                        <Button
                            size="small"
                            icon={PaperAirplaneIcon}
                            handle={sendNewMessage()}
                            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
                            aria-label="Enviar mensaje"
                        />
                    </div>
                </div>
            )}
        </div>

    )
}


