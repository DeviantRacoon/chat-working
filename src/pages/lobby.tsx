import { useState } from "react";
import { Section } from "../components/custom-components";
import { BoxChat, ChatOnline } from "../components/pages-components";

const userOnline = [
    {
        id: 1,
        name: "Juan",
    },
    {
        id: 2,
        name: "Maria",
    },
    {
        id: 3,
        name: "Pedro",
    },
    {
        id: 4,
        name: "Ana",
    },
    {
        id: 5,
        name: "Luis",
    },
];

export default function Lobby() {
    const [userChat, setUserChat] = useState<{ id: number, name: string } | undefined>(undefined);

    const onUserSelect = (user: { id: number, name: string }) => {
        setUserChat(user);
    }

    return (
        <Section id="lobby" minHeight="screen">
            <article id="lobby" className="flex flex-col lg:flex-row p-4 gap-4 h-screen w-full">

                <ChatOnline userOnline={userOnline} onUserSelect={onUserSelect} />

                <BoxChat currentUser={userChat} />

            </article>
        </Section>
    );
}
