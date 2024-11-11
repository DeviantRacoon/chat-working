import { useState } from "react";
import { UserIcon, UsersIcon } from "@heroicons/react/20/solid";

export default function ChatOnline({
  userOnline,
  onUserSelect,
}: {
  userOnline: { id: number; name: string }[];
  onUserSelect: (user: { id: number; name: string }) => void;
}) {
  const [selectedUser, setSelectedUser] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const handleContactChange = (user: { id: number; name: string }) => {
    if (selectedUser === user) return;

    setSelectedUser(user);
    onUserSelect(user);
  };

  return (
    <div className="bg-gray-700 shadow-lg rounded-lg p-4 w-full lg:w-1/3 flex flex-col gap-4">
      <div className="flex items-center gap-4 text-gray-300">
        <UserIcon className="w-10 h-10" />
        <div>
          <h2 className="text-xl font-semibold">Usuario</h2>
          <p>user@example.com</p>
        </div>
      </div>

      <h5 className="text-lg font-semibold text-gray-300 mt-4">
        Contactos
        <hr className="my-2 border-gray-600" />
      </h5>

      <article className="flex flex-col gap-2">
        {userOnline.map((user) => (
          <button
            key={user.id}
            onClick={() => handleContactChange(user)}
            className={`flex items-center py-2 px-4 rounded-lg ${
              selectedUser === user ? "bg-gray-500" : ""
            } hover:bg-gray-600 transition`}
          >
            <UsersIcon className="w-5 h-5 text-gray-300 mr-2" />
            <span className="text-gray-300">{user.name}</span>
          </button>
        ))}
      </article>
    </div>
  );
}
