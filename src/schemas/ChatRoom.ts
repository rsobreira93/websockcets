import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";
import { v4 as uuidV4 } from "uuid";

type ChatRoom = Document & {
  id_Users: User[];
  id_chat_room: string;
};

const ChatRoomSchema = new Schema({
  id_Users: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  id_chat_room: {
    type: String,
    default: uuidV4(),
  },
});

const ChatRoom = mongoose.model<ChatRoom>("ChatRoom", ChatRoomSchema);

export { ChatRoom };
