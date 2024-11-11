import { IUser } from "./user.interface";

export interface IMessage {
    id: number;
    text: string;
    user: IUser;
    createdAt: Date;
}
