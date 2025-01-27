'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'transcribing' | 'processing' | 'speaking';
}

interface MessageBubbleProps {
  message: ChatMessage;
  className?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  className
}) => {
  const isUser = message.type === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex flex-col max-w-[75%] mb-4",
        isUser ? "ml-auto" : "mr-auto",
        className
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-2",
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        )}
      >
        {message.content}
      </div>
      {message.status && (
        <span className="text-xs text-gray-500 mt-1">
          {message.status}
        </span>
      )}
    </motion.div>
  );
}; 