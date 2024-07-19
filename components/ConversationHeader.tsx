// // components/ConversationHeader.tsx
// import { FC } from "react";
// import { useRouter } from "next/navigation";
// import { ChevronLeft, Phone } from "lucide-react";

// interface Message {
//   sender: string;
//   message: string;
//   time: string;
// }

// interface ConversationHeaderProps {
//   conversation: Message[];
// }

// const ConversationHeader: FC<ConversationHeaderProps> = ({ conversation }) => {
//   const router = useRouter();

//   return (
//     <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-900 text-white z-10 border-b border-gray-500 border-solid">
//       <div className="flex items-center gap-4">
//         <button className="text-white" onClick={() => router.back()}>
//           <ChevronLeft />
//         </button>
//         <div className="flex items-center gap-2">
//           <div className="border border-gray-900 overflow-visible w-12 h-12">
//             <img
//               src="/placeholder.png"
//               alt={conversation[0]?.sender}
//               className="object-cover rounded-full w-full h-full"
//             />
//           </div>
//           <h1 className="text-2xl font-bold">{conversation[0]?.sender}</h1>
//         </div>
//       </div>
//       <Phone className="text-white" />
//     </div>
//   );
// };

// export default ConversationHeader;

// components/ConversationHeader.tsx
import { FC } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Phone } from "lucide-react";

interface Message {
  sender: string;
  message: string;
  time: string;
  isSender: boolean;
}

interface Conversation {
  participants: string[];
  messages: Message[];
}

interface ConversationHeaderProps {
  conversation: Conversation;
}

const ConversationHeader: FC<ConversationHeaderProps> = ({ conversation }) => {
  const router = useRouter();
  const otherParticipant = conversation.participants.find(
    (participant) => participant !== "You"
  );

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-900 text-white z-10 border-b border-gray-500 border-solid">
      <div className="flex items-center gap-4">
        <button className="text-white" onClick={() => router.back()}>
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          <div className="border border-gray-900 overflow-visible w-12 h-12">
            <img
              src="/placeholder.png"
              alt={otherParticipant}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold">{otherParticipant}</h1>
        </div>
      </div>
      <Phone className="text-white" />
    </div>
  );
};

export default ConversationHeader;
