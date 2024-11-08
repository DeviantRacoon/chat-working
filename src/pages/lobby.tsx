import { useState } from "react";
import { Section, Container, Input, Button, Title, Typography } from "../components";
import { PaperAirplaneIcon, UserIcon, HeartIcon, UsersIcon } from "@heroicons/react/20/solid";

export default function Lobby() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);

    const sendNewMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, author: "Tu" }]);
            setNewMessage("");
        }
    };

    const contacts = ["Juan", "Maria", "Pedro"];

    return (
        <Section id="lobby" minHeight="screen" className="flex">
            <article className="flex justify-center items-center w-full">

                {/* <div className="bg-white shadow-lg rounded-lg p-4 ml-4 grid grid-rows-[auto,1fr] space-y-4 min-h-full">
                    <Typography variant="h3" title="Perfil" />
                    <div className="flex items-center space-x-4">
                        <UserIcon className="w-10 h-10 text-gray-500" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Usuario</h2>
                            <p className="text-gray-500">user@example.com</p>
                        </div>
                    </div>
                    <hr />

                    <Typography variant="h5" title="Contactos" />
                    <div className="flex-grow overflow-y-auto">
                        {contacts.map((contact, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedContact(contact)}
                                className={`w-full py-2 px-4 rounded-lg text-left ${selectedContact === contact ? "bg-gray-200" : ""
                                    } hover:bg-gray-100`}
                            >
                                <UsersIcon className="w-5 h-5 inline-block mr-2 text-gray-500" />
                                {contact}
                            </button>
                        ))}
                    </div>
                </div> */}

                <div className="bg-white shadow-lg rounded-lg p-4 ml-4 grid grid-cols-1 gap-4">

                    <div className="flex items-center justify-between col-span-1">
                        <div className="flex items-center space-x-4">
                            <UserIcon className="w-10 h-10 text-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Usuario</h2>
                                <p className="text-gray-500">user@example.com</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className="relative flex-grow h-96 overflow-y-auto rounded-lg col-span-1">
                        <Typography variant="h5" title="Contactos" textAlign="left" padding="0"/>
                        <hr className="my-2" />
                        <div className="flex-grow overflow-y-auto">
                            {contacts.map((contact, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedContact(contact)}
                                    className={`w-full py-2 px-4 rounded-lg text-left ${selectedContact === contact ? "bg-gray-200" : ""
                                        } hover:bg-gray-100`}
                                >
                                    <UsersIcon className="w-5 h-5 inline-block mr-2 text-gray-500" />
                                    {contact}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-2 col-span-1">
                        <Input
                            id="new-message"
                            name="new-message"
                            placeholder="Escribe un mensaje"
                            value={newMessage}
                            onChange={(event) => setNewMessage(event.target.value)}
                            onKeyUp={(event) => event.key === "Enter" && sendNewMessage()}
                            className="w-full"
                        />
                        <Button size="small" icon={PaperAirplaneIcon} handle={sendNewMessage} className="ml-2" />
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 ml-4 grid grid-cols-1 gap-4 w-full">
                    {/* Título del Chat */}
                    <div className="flex items-center justify-between col-span-1">
                        <Title title={`Chat con ${selectedContact || "..."}`} />
                        <HeartIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Mensajes */}
                    <div className="relative flex-grow h-96 overflow-y-auto bg-gray-100 rounded-lg p-4 col-span-1">
                        {messages.length === 0 && <p className="text-gray-500 text-center">No hay mensajes</p>}
                        {messages.map((message, index) => (
                            <p key={index} className="py-2 px-4 bg-white rounded-lg mb-2 shadow-sm border border-gray-200">
                                <span className="text-gray-600 font-medium">{message.author}:</span>
                                <span className="ml-2">{message.text}</span>
                            </p>
                        ))}
                    </div>

                    {/* Input para enviar mensajes */}
                    <div className="flex space-x-2 col-span-1">
                        <Input
                            id="new-message"
                            name="new-message"
                            placeholder="Escribe un mensaje"
                            value={newMessage}
                            onChange={(event) => setNewMessage(event.target.value)}
                            onKeyUp={(event) => event.key === "Enter" && sendNewMessage()}
                            className="w-full"
                        />
                        <Button size="small" icon={PaperAirplaneIcon} handle={sendNewMessage} className="ml-2" />
                    </div>
                </div>

            </article>
        </Section>
    );
}
