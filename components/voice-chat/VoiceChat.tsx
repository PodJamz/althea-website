'use client';

import { useState } from 'react';
import { VoiceVisualizer } from './VoiceVisualizer';
import { MessageBubble, ChatMessage } from './MessageBubble';
import { cn } from '@/lib/utils';
import { IconMicrophone, IconMicrophoneOff } from '@tabler/icons-react';

interface VoiceChatProps {
  className?: string;
}

export const VoiceChat: React.FC<VoiceChatProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [voiceState, setVoiceState] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');

  const handleMicrophoneClick = () => {
    setIsListening(!isListening);
    setVoiceState(isListening ? 'idle' : 'listening');
  };

  return (
    <div className={cn("flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-neutral-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-lg">AI</span>
          </div>
          <div>
            <h3 className="font-medium">AI Assistant</h3>
            <p className="text-sm text-gray-500">{voiceState}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Voice Controls */}
      <div className="p-4 border-t dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <VoiceVisualizer 
            state={voiceState}
            className="flex-1"
          />
          <button
            onClick={handleMicrophoneClick}
            className={cn(
              "ml-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors",
              isListening 
                ? "bg-red-500 hover:bg-red-600" 
                : "bg-blue-500 hover:bg-blue-600"
            )}
          >
            {isListening ? (
              <IconMicrophoneOff className="w-6 h-6 text-white" />
            ) : (
              <IconMicrophone className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}; 