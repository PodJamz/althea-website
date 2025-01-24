Product Requirements Document (PRD)

1. Overview

We aim to create an interactive, scrolling animation that simulates a text conversation between a user and “Althea” (an AI health assistant). The conversation is displayed inside a mocked iPhone 16 Pro component. As the visitor scrolls down the page, the conversation unfolds in real time with typing animations, “thinking” states, and short text messages relevant to ACL surgery preparation. This feature showcases how Althea provides step-by-step, hyper-personalized guidance in a visually appealing, story-like manner.

2. Objectives
	1.	Engage Users
	•	Offer an immersive user experience that draws visitors into a realistic AI chat scenario.
	2.	Demonstrate Althea’s Capabilities
	•	Highlight Althea’s ability to provide informed recommendations, personalizing surgical prep steps.
	3.	Simplify Complex Topics
	•	Show how medical information (e.g., ACL surgery) can be broken down into user-friendly text messages.
	4.	Strengthen Brand Perception
	•	Present Althea as an intuitive, supportive, and interactive healthcare solution.

3. Scope & Features
	1.	iPhone 16 Pro Mockup
	•	Use the Iphone15Pro component (or a renamed version for “16 Pro”) from MagicUI to embed the conversation inside an iPhone frame.
	•	The phone should be large enough on the page so the text is legible and visually striking.
	2.	Scrolling Animation
	•	As the user scrolls down the page, new messages appear in the iPhone mockup.
	•	The user sees a simulated exchange: “User” (patient) messages and “Althea” replies.
	•	The conversation should look like a real chat interface with short, consecutive messages.
	3.	Typing Animations
	•	Implement “typing” states for both user and Althea’s messages.
	•	For Althea, display a brief “thinking/wheel loading” or “Typing…” indicator before the text fully appears.
	•	For the user, the text can appear as if it’s being typed in real time (also short typed-out effect, or immediate pop).
	4.	Conversation Script
	•	Keep messages short, ensuring they fit in the iPhone screen without overflow.
	•	Example (ACL Surgery context):
	1.	User: “Hey Althea, I’m scheduled for ACL surgery soon. Any tips?”
	2.	Althea: “First, let’s check your activity level and goals. Are you aiming for a quick recovery or a more cautious rehab plan?”
	3.	User: “I’d love a quicker recovery but I’m worried about pain and re-injury.”
	4.	Althea: “Totally understandable. A structured pre-op routine can speed healing. Would you prefer daily exercises or supervised physical therapy sessions?”
	5.	User: “Daily exercises sound good. Let’s do that.”
	6.	Althea: “Great choice! I’ll send you step-by-step routines focusing on strengthening and flexibility. Let’s confirm your current fitness level first…”
	•	The conversation continues, highlighting how Althea personalizes guidance.
	5.	TypingAnimation Component
	•	Integrate the provided TypingAnimation from MagicUI.
	•	Display the typed text letter-by-letter for Althea’s responses. Optionally, do the same for user messages.
	•	Include a short delay or “thinking” state (like a loading wheel or dots) before Althea’s message displays.
	6.	Responsive Design
	•	The iPhone mockup + conversation must scale for various screen sizes.
	•	Ensure the conversation is still readable on desktop, tablet, and mobile.

4. Technical Requirements & Implementation Details
	1.	Dependencies
	•	@/components/magicui/iphone-15-pro (or renamed for iPhone 16 Pro).
	•	@/components/magicui/typing-animation.
	•	motion (via motion/react) for animating text, transitions, or scroll-based triggers.
	2.	File Structure & Imports

// npx shadcn@latest add "https://magicui.design/r/iphone-15-pro"
// npx shadcn@latest add "https://magicui.design/r/typing-animation"

import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from "motion/react";


	3.	Main Component (Example)

"use client";

import { useRef, useState } from "react";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export function ConversationDemo() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // We'll track page scroll in a useEffect, then decide which messages to show
  // based on the user’s scroll progress.

  return (
    <div
      ref={containerRef}
      onScroll={() => {/* track position, or use intersection observer */}}
      className="relative overflow-auto h-[2000px]" // page is tall for demonstration
    >
      <section className="sticky top-0 flex items-center justify-center h-screen">
        <Iphone15Pro className="w-[400px] h-auto">
          {/* Inside iPhone content: The conversation UI */}
          <div className="p-4 space-y-4">
            {/* Example message 1 (User) */}
            <div className="bg-gray-200 rounded-xl p-2 text-sm">
              <TypingAnimation duration={40}>
                Hey Althea, I’m scheduled for ACL surgery soon. Any tips?
              </TypingAnimation>
            </div>

            {/* Althea's typing/loading indicator */}
            <div className="text-right text-xs text-gray-500">
              ...Althea is thinking
            </div>

            {/* Example message 2 (Althea) */}
            <div className="bg-blue-100 rounded-xl p-2 text-sm text-right">
              <TypingAnimation duration={40}>
                First, let’s check your activity level. Are you aiming for a
                quick recovery or a more cautious rehab plan?
              </TypingAnimation>
            </div>
            {/* More messages as user scrolls or after timeouts */}
          </div>
        </Iphone15Pro>
      </section>

      {/* Additional content below to encourage scrolling... */}
      <section className="h-[1000px] bg-white text-center p-8">
        <h2>Scroll for more</h2>
      </section>
    </div>
  );
}

	•	Note: The logic above is an illustration. In production, you could use an IntersectionObserver or a scroll-based library (e.g., react-scroll, framer-motion) to reveal each message chunk-by-chunk as the user scrolls.

	4.	Scroll-Trigger Implementation
	•	Option A: Show one or two messages at a time. As the user scrolls, the next set of messages is revealed with a typing animation.
	•	Option B: Use timed delays after each message to simulate real chat flow.
	5.	Performance Considerations
	•	Ensure the typed text logic (TypingAnimation) does not degrade performance. For many short messages, it should be fine.
	•	The iPhone mockup uses an image or vector—make sure to optimize the size to avoid slow loads.
	6.	Styling & Customization
	•	Tailwind classes can style chat bubbles, background colors, fonts, etc.
	•	Use a consistent color scheme matching your brand.

5. Content & Script Requirements
	•	Conversation: Roughly 6–8 short messages (3–4 from the user, 3–4 from Althea).
	•	Tone: Friendly, supportive, and informative.
	•	Topic: ACL surgery prep (e.g., pre-op therapy, cost coverage, rehab timeline).
	•	Length: ~1–2 lines per message to avoid overflow on the iPhone screen.
	•	Typing Delays: 1–2 seconds (or show “…thinking”) for Althea’s responses.

6. Success Criteria / Acceptance Criteria
	1.	Scrolling Interaction
	•	As the user scrolls, at least 3 pairs of messages appear, simulating a real chat.
	2.	Typing Animation
	•	Each Althea reply uses TypingAnimation to type out text.
	•	A short “loading” or “thinking” icon appears before Althea’s message.
	3.	Responsive & Polished
	•	The iPhone mockup looks good on desktop and reasonably scales on smaller screens.
	•	The chat text is readable and does not overflow the device edges.
	4.	Performance
	•	Animations run smoothly without noticeable lag.
	•	Images and assets load quickly.
	5.	Brand Alignment
	•	Tone is supportive, helpful, and user-friendly.
	•	Code and design follow brand style guidelines (colors, typography, messaging).

7. Timeline & Next Steps
	1.	Design Sign-Off
	•	Confirm final chat bubble styles, fonts, and colors.
	•	Approve conversation script (messages, tone).
	2.	Development
	•	Implement the scrollytelling mechanism (or timed reveal).
	•	Integrate TypingAnimation for each new Althea message.
	•	Test on various devices and browsers.
	3.	QA & Review
	•	Check responsiveness, performance, and correctness of the conversation flow.
	•	Fix any visual or functional bugs.
	4.	Launch / Merge
	•	Once validated, merge into the main branch or deploy to the staging/production environment.

Final Summary

This feature provides a dynamic, storytelling-style interaction inside a stylish iPhone 16 Pro mockup. The user sees how Althea can respond with empathy, detail, and clarity about a medical procedure (ACL surgery). The scrolling animation, typing effects, and short chat bubbles enhance immersion, demonstrating Althea’s potential to deliver hyper-personalized healthcare guidance in a friendly, approachable way.