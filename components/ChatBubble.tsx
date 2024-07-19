// components/ChatBubble.tsx
import React from "react";

interface ChatBubbleProps {
  sender: string;
  message: string;
  time: string;
  isSender: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  sender,
  message,
  time,
  isSender,
}) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isSender ? "bg-green-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        <div className="text-sm">{message}</div>
        <div className="text-xs text-right mt-1">{time}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
