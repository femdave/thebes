"use client";
import { useRouter, useParams } from "next/navigation";
import { FC } from "react";
import ConversationHeader from "@/components/ConversationHeader";
import ChatBubble from "@/components/ChatBubble";

const conversations = [
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

const Chat: FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) {
    return <div>Conversation not found</div>;
  }

  const conversationId = Number(id);
  const conversation = conversations.find((conv) => conv.id === id) || {
    participants: [],
    messages: [],
  };

  return (
    <div className="min-h-screen bg-[url('/bg.png')] text-white bg-cover bg-center p-4">
      <ConversationHeader conversation={conversation} />
      <div className="pt-20 p-4" />
      <div className="space-y-4">
        {conversation.messages.map((conv, index) => (
          <ChatBubble
            key={index}
            sender={conv.sender}
            message={conv.message}
            time={conv.time}
            isSender={conv.isSender}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
