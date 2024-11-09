import { useState } from "react";
import { Typography } from "../custom-components";
import { UserIcon, UsersIcon } from "@heroicons/react/20/solid";


export default function ChatOnline({
    userOnline,
    onUserSelect
}: {
    userOnline: { id: number, name: string }[],
    onUserSelect: (user: { id: number, name: string }) => void
}) {
    const [selectedUser, setSelectedUser] = useState<{ id: number, name: string } | null>(null);

    const handleContactChange = (user: { id: number, name: string }) => {
        if (selectedUser === user) return;

        setSelectedUser(user);
        onUserSelect(user);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-1/3 flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <UserIcon className="w-10 h-10 text-gray-500" />
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Usuario</h2>
                    <p className="text-gray-500">user@example.com</p>
                </div>
            </div>

            <Typography variant="h5" title="Contactos" textAlign="left" padding="0" />
            <hr className="my-2" />

            <article className="flex flex-col gap-2">
                {userOnline.map((user) => (
                    <button
                        key={user.id}
                        onClick={() => handleContactChange(user)}
                        className={`flex items-center py-2 px-4 rounded-lg ${selectedUser === user ? "bg-gray-200" : ""} hover:bg-gray-100 transition`}>
                        <UsersIcon className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{user.name}</span>
                    </button>
                ))}
            </article>
        </div>
    )
}
