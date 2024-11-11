import { useState } from "react";

import { Input, Button, Title } from "../../custom-components";
import Box from "./components/box";

import { PaperAirplaneIcon, HeartIcon } from "@heroicons/react/20/solid";
import { IMessage } from "../../../interfaces/message.interface";

const CURRENT_USER = "JHector";

export default function BoxChat({
  currentUser,
}: {
  currentUser?: { id: number; name: string };
}) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const sendNewMessage = () => {
    if (!inputMessage) return;

    const newMessage = {
      id: 1,
      text: inputMessage,
      user: { id: 1, name: CURRENT_USER },
      createdAt: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <div className="bg-gray-700 shadow-lg rounded-lg w-full lg:w-2/3 flex flex-col gap-4">
      {!currentUser ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-gray-500">No hay usuario seleccionado</p>
        </div>
      ) : (

        <div className="flex flex-col gap-4 h-full">

          <div className="flex items-center justify-between bg-gray-800 rounded-t-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <img src="/path/to/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full bg-gray-600 object-cover" />
              <Title color="text-gray-300" title={`Chat con ${currentUser.name || "..."}`} />
            </div>
            <HeartIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
          </div>

          <Box
            messages={messages}
            isCurrentUser={true}
          />

          <div className="flex items-center space-x-2 px-4 py-2">
            <Input
              id="new-message"
              name="new-message"
              value={inputMessage}
              onChange={(event) => setInputMessage(event.target.value)}
              placeholder="Escribe un mensaje..."
              backgroundColor="bg-gray-800"
              borderColor="border-gray-600"
              color="text-gray-300"
              onKeyUp={(event) => event.key === "Enter" && sendNewMessage()}
              className="w-full"
            />
            <Button
              // size=""
              icon={PaperAirplaneIcon}
              handle={() => sendNewMessage()}
              hoverEffect
              color="blue"
              aria-label="Enviar mensaje"
            />
          </div>
          
        </div>
      )}
    </div>
  );
}
