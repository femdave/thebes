import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
}

interface ConversationItemProps {
  conversation: Conversation;
  handleClick: (id: string) => void;
}

const FriendItem: FC<ConversationItemProps> = ({
  conversation,
  handleClick,
}) => {
  return (
    <>
      <div
        key={conversation.id}
        className="flex items-center p-4   rounded cursor-pointer hover:bg-gray-700 gap-3"
        onClick={() => handleClick(conversation.id)}
      >
        <Avatar className="border border-gray-900 overflow-visible w-12 h-12">
          <AvatarImage
            src="/placeholder.png"
            className="object-cover rounded-full"
          />
          <AvatarFallback>
            <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-grow border-b border-gray-500 border-solid">
          <div className="flex-grow">
            <div className="font-bold">{conversation.name}</div>
            <div className="text-gray-400">
              {conversation.lastMessage.length > 20 ? (
                <span>{conversation.lastMessage.slice(0, 15)}...</span>
              ) : (
                <span>{conversation.lastMessage}</span>
              )}
            </div>
          </div>
          <div className="ml-auto text-gray-100">{conversation.time}</div>
        </div>
      </div>
    </>
  );
};

export default FriendItem;
