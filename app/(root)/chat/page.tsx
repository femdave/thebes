"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import SearchBar from "@/components/Searchbar";
import Conversation from "@/components/Conversation";

interface Message {
  sender: string;
  message: string;
  time: string;
  isSender: boolean;
}

interface Conversation {
  id: string;
  participants: string[];
  messages: Message[];
}

const dummyConversations: Conversation[] = [
  {
    id: "1",
    participants: ["IRE❤️", "You"],
    messages: [
      {
        sender: "IRE❤️",
        message: "Oya send my money back then😂",
        time: "11:19 AM",
        isSender: false,
      },
      { sender: "You", message: "Lmao", time: "11:19 AM", isSender: true },
      {
        sender: "You",
        message: "I go send am",
        time: "11:19 AM",
        isSender: true,
      },
      {
        sender: "IRE❤️",
        message: "Oh Oya na Thank youuu ❤️",
        time: "11:20 AM",
        isSender: false,
      },
    ],
  },
  {
    id: "2",
    participants: ["Alex", "You"],
    messages: [
      {
        sender: "Alex",
        message: "Hey, are you coming to the party?",
        time: "12:00 PM",
        isSender: false,
      },
      {
        sender: "You",
        message: "Yes, I will be there.",
        time: "12:05 PM",
        isSender: true,
      },
      {
        sender: "Alex",
        message: "Great! See you then.",
        time: "12:06 PM",
        isSender: false,
      },
    ],
  },
  {
    id: "3",
    participants: ["Mom", "You"],
    messages: [
      {
        sender: "Mom",
        message: "Did you eat lunch?",
        time: "1:00 PM",
        isSender: false,
      },
      {
        sender: "You",
        message: "Yes, I did.",
        time: "1:05 PM",
        isSender: true,
      },
      {
        sender: "Mom",
        message: "Good. Take care.",
        time: "1:10 PM",
        isSender: false,
      },
    ],
  },
  {
    id: "4",
    participants: ["Boss", "You"],
    messages: [
      {
        sender: "Boss",
        message: "Please send the report by EOD.",
        time: "2:00 PM",
        isSender: false,
      },
      {
        sender: "You",
        message: "Sure, I am working on it.",
        time: "2:05 PM",
        isSender: true,
      },
      { sender: "Boss", message: "Thanks.", time: "2:06 PM", isSender: false },
    ],
  },
  {
    id: "5",
    participants: ["John", "You"],
    messages: [
      {
        sender: "John",
        message: "Let's catch up this weekend.",
        time: "3:00 PM",
        isSender: false,
      },
      {
        sender: "You",
        message: "Sure, let's do that.",
        time: "3:05 PM",
        isSender: true,
      },
      {
        sender: "John",
        message: "See you then.",
        time: "3:10 PM",
        isSender: false,
      },
    ],
  },
];

const ChatList: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredConversations = dummyConversations.filter((conversation) =>
    conversation.participants[0]
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleClick = (id: string) => {
    router.push(`/chat/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Chats</h1>
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          placeholder="Search chat"
        />
        {filteredConversations.map((conversation) => {
          const lastMessage =
            conversation.messages[conversation.messages.length - 1];
          return (
            <Conversation
              key={conversation.id}
              conversation={{
                id: conversation.id,
                name: conversation.participants[0],
                lastMessage: lastMessage.message,
                time: lastMessage.time,
              }}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
