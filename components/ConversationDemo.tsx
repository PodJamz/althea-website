"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

const messages = [
  {
    role: "assistant",
    content: "Hi! I'm Althea, your AI health assistant. I understand you're preparing for ACL surgery. How can I help you today?",
  },
  {
    role: "user",
    content: "Yes, I'm scheduled for ACL surgery next month. What should I do to prepare?",
  },
  {
    role: "assistant",
    content: "I'll help you prepare for your ACL surgery. Here are some key steps:\n\n1. Pre-surgery physical therapy to strengthen your leg muscles\n2. Arrange post-surgery transportation and care\n3. Prepare your home for limited mobility\n4. Follow pre-surgery dietary guidelines\n\nWould you like me to elaborate on any of these?",
  },
  {
    role: "user",
    content: "Can you tell me more about the pre-surgery physical therapy?",
  },
  {
    role: "assistant",
    content: "Pre-surgery PT (prehab) is crucial for better outcomes. Focus on:\n\n• Quad strengthening exercises\n• Range of motion exercises\n• Balance training\n• Low-impact cardio\n\nI recommend working with a physical therapist 2-3 times per week for 4-6 weeks before surgery. Would you like specific exercise examples?",
  },
]

export function ConversationDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] flex items-start justify-center"
    >
      <div className="sticky top-[15vh] w-full max-w-2xl mx-auto">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="bg-white dark:bg-neutral-950 p-4 sm:p-6 space-y-4">
            {messages.map((message, i) => (
              <MessageItem
                key={i}
                message={message}
                progress={scrollYProgress}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MessageItem({
  message,
  progress,
  index,
}: {
  message: { role: string; content: string };
  progress: any;
  index: number;
}) {
  const opacity = useTransform(
    progress,
    [index * 0.15, index * 0.15 + 0.1],
    [0, 1]
  );

  const y = useTransform(
    progress,
    [index * 0.15, index * 0.15 + 0.1],
    [50, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className={`flex gap-3 ${
        message.role === "user" ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`rounded-lg p-4 max-w-[80%] ${
          message.role === "user"
            ? "bg-blue-500 text-white"
            : "bg-neutral-100 dark:bg-neutral-800"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </motion.div>
  );
}

