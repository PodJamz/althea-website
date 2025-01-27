Voice Chat Interface PRD

Below is the same PRD with an additional Implementation Step for iPhone mockup usage via MagicUI’s Iphone15Pro component. This includes the command for installation (npx shadcn@latest add "https://magicui.design/r/iphone-15-pro") and example usage code. Everything else from the original PRD remains intact.

Voice Chat Interface PRD

1. Product Overview

Purpose

A sophisticated AI-powered voice chat interface enabling real-time audio conversations between users and an AI assistant, leveraging LiveKit’s WebRTC capabilities combined with ChatGPT and voice synthesis.

Core Features
	•	Real-time voice input/output
	•	AI conversation processing
	•	Voice synthesis for AI responses
	•	Visual feedback during interactions

2. Technical Stack

graph TD
    A[Frontend Interface] --> B[LiveKit WebRTC]
    B --> C[Audio Processing]
    C --> D[DeepGram Speech-to-Text]
    D --> E[ChatGPT Processing]
    E --> F[ElevenLabs Voice Synthesis]
    F --> G[Audio Output]

Components

LiveKit Integration
	•	WebRTC for real-time audio streaming
	•	Room management
	•	Connection handling

Voice Processing
	•	DeepGram for real-time transcription
	•	ElevenLabs for voice synthesis
	•	ChatGPT for conversation processing

3. User Interface

Mobile Chat Interface

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'transcribing' | 'processing' | 'speaking';
}

interface MobileChatUI {
  layout: {
    container: {
      width: "100%";
      maxWidth: "430px"; // iPhone-like width
      height: "100vh";
      background: "bg-gray-100";
    };
    header: {
      height: "60px";
      avatar: string;
      title: string;
      actions: string[];
    };
    messageList: {
      height: "calc(100vh - 140px)";
      padding: "16px";
      overflow: "auto";
    };
    footer: {
      height: "80px";
      voiceVisualizerHeight: "40px";
    };
  };
}

Voice Visualizer Component

interface VoiceVisualizerProps {
  // Animation configuration
  bars: {
    count: number;        // Number of bars in visualizer
    minHeight: number;    // Minimum height of bars (px)
    maxHeight: number;    // Maximum height of bars (px)
    width: number;        // Width of each bar (px)
    gap: number;          // Gap between bars (px)
    color: string;        // Bar color (default: #00C6BC - LiveKit teal)
  };
  
  // Animation states
  states: {
    idle: {
      amplitude: number;
      frequency: number;
    };
    listening: {
      amplitude: number;
      frequency: number;
      reactToVolume: boolean;
    };
    speaking: {
      amplitude: number;
      frequency: number;
      pattern: 'wave' | 'pulse';
    };
  };
}

interface VoiceVisualizerImplementation {
  // Bar animation using CSS transforms
  barAnimation: {
    transform: "scaleY";
    transition: "transform 100ms ease-in-out";
    transformOrigin: "bottom";
  };
  
  // Volume reaction
  volumeProcessor: {
    fftSize: 256;
    smoothingTimeConstant: 0.8;
    minDecibels: -80;
    maxDecibels: -10;
  };
}

Message Bubble Component

interface MessageBubbleProps {
  message: ChatMessage;
  isUser: boolean;
  
  style: {
    user: {
      background: "bg-blue-500";
      text: "text-white";
      alignment: "ml-auto";
    };
    ai: {
      background: "bg-gray-200";
      text: "text-gray-800";
      alignment: "mr-auto";
    };
    maxWidth: "75%";
    borderRadius: "18px";
    padding: "12px 16px";
    margin: "4px 0";
  };
}

Implementation Example

const VoiceChat: React.FC = () => {
  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="chat-header">
        <img src={aiAvatar} alt="AI Assistant" className="w-10 h-10 rounded-full" />
        <h1 className="text-xl font-semibold">AI Assistant</h1>
      </header>

      {/* Message List */}
      <div className="message-list">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isUser={message.type === 'user'}
          />
        ))}
      </div>

      {/* Footer with Voice Visualizer */}
      <footer className="chat-footer">
        <VoiceVisualizer
          bars={{
            count: 5,
            minHeight: 15,
            maxHeight: 40,
            width: 8,
            gap: 4,
            color: "#00C6BC"
          }}
          state={voiceState}
        />
        
        {/* Microphone Button */}
        <button 
          className="mic-button"
          onClick={toggleMicrophone}
          aria-label="Toggle microphone"
        >
          {isListening ? <MicActiveIcon /> : <MicIcon />}
        </button>
      </footer>
    </div>
  );
};

Voice State Management

interface VoiceState {
  currentState: 'idle' | 'listening' | 'processing' | 'speaking';
  volume: number;
  isProcessing: boolean;
  error?: string;
}

class VoiceStateManager {
  private audioContext: AudioContext;
  private analyzer: AnalyserNode;
  private mediaStream: MediaStream | null;
  
  constructor() {
    this.audioContext = new AudioContext();
    this.analyzer = this.audioContext.createAnalyser();
    this.setupAnalyzer();
  }

  private setupAnalyzer() {
    this.analyzer.fftSize = 256;
    this.analyzer.smoothingTimeConstant = 0.8;
    this.analyzer.minDecibels = -80;
    this.analyzer.maxDecibels = -10;
  }

  public async startListening(): Promise<void> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000
        }
      });
      
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      source.connect(this.analyzer);
      
      this.startVisualization();
    } catch (error) {
      throw new Error('Microphone access denied');
    }
  }

  private startVisualization() {
    const dataArray = new Uint8Array(this.analyzer.frequencyBinCount);
    
    const animate = () => {
      this.analyzer.getByteFrequencyData(dataArray);
      const volume = this.calculateVolume(dataArray);
      this.updateVisualization(volume);
      requestAnimationFrame(animate);
    };
    
    animate();
  }
}

Styles

.mobile-container {
  @apply relative max-w-[430px] h-[100vh] mx-auto bg-gray-50 overflow-hidden;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
}

.chat-header {
  @apply flex items-center gap-3 px-6 py-4 bg-white border-b;
}

.message-list {
  @apply flex flex-col p-4 h-[calc(100vh-140px)] overflow-y-auto;
  scroll-behavior: smooth;
}

.chat-footer {
  @apply fixed bottom-0 w-full max-w-[430px] bg-white border-t px-4 py-2;
  height: 80px;
}

.voice-visualizer {
  @apply flex items-center justify-center gap-1 h-10;
}

.visualizer-bar {
  @apply rounded-full bg-[#00C6BC];
  transform-origin: bottom;
  transition: transform 100ms ease-in-out;
}

.mic-button {
  @apply absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#00C6BC] 
         flex items-center justify-center text-white shadow-lg;
  transition: all 200ms ease-in-out;
}

.mic-button:active {
  @apply transform scale-95;
}

4. Technical Requirements

Frontend Implementation

// Core Room Configuration
interface VoiceChatProps {
  roomName: string;
  userId: string;
  aiModel: "gpt-4" | "gpt-3.5-turbo";
  voiceId: string; // ElevenLabs voice ID
}

// Room Configuration Options
interface RoomConfig {
  adaptiveStream: boolean;  // auto-manage video quality
  dynacast: boolean;        // optimize publishing bandwidth
  logLevel: LogLevel;       // logging configuration
  videoCaptureDefaults?: {
    resolution: VideoResolution;
  };
}

// Event Handling Implementation
class VoiceChatRoom {
  private room: Room;
  private eventHandlers: Map<RoomEvent, Function>;

  constructor(config: RoomConfig) {
    this.room = new Room(config);
    this.setupEventHandlers();
  }

  private setupEventHandlers() {
    this.room
      .on(RoomEvent.Connected, this.handleConnect)
      .on(RoomEvent.Disconnected, this.handleDisconnect)
      .on(RoomEvent.TrackSubscribed, this.handleTrackSubscribed)
      .on(RoomEvent.TrackUnsubscribed, this.handleTrackUnsubscribed)
      .on(RoomEvent.AudioPlaybackStatusChanged, this.handleAudioPlaybackStatus)
      .on(RoomEvent.MediaDevicesError, this.handleDeviceError)
      .on(RoomEvent.ConnectionStateChanged, this.handleConnectionState);
  }

  async initializeRoom(url: string, token: string) {
    try {
      // Pre-warm connection
      await this.room.prepareConnection(url, token);
      
      // Connect to room
      await this.room.connect(url, token);
      
      // Enable local tracks
      await this.room.localParticipant.enableCameraAndMicrophone();
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleAudioPlaybackStatus = () => {
    if (!this.room.canPlaybackAudio) {
      // Implement UI for user interaction
      this.requestUserInteraction();
    }
  }

  private handleDeviceError = (error: Error) => {
    const failure = MediaDeviceFailure.getFailure(error);
    switch (failure) {
      case 'PermissionDenied':
        // Handle permission denied
        break;
      case 'NotFound':
        // Handle device not found
        break;
      case 'DeviceInUse':
        // Handle device in use
        break;
    }
  }
}

Error Handling Specifications

Connection Errors

enum ConnectionError {
  TokenExpired = 'token-expired',
  RoomFull = 'room-full',
  ServerUnreachable = 'server-unreachable',
  WebSocketError = 'websocket-error'
}

interface ErrorHandler {
  handleConnectionError: (error: ConnectionError) => void;
  handleDeviceError: (error: MediaDeviceFailure) => void;
  handleRPCError: (error: RpcError) => void;
}

Error Recovery Strategies
	•	Connection Issues
	•	Implement exponential backoff for reconnection
	•	Cache local state for recovery
	•	Maintain heartbeat monitoring
	•	Device Errors
	•	Fallback device selection
	•	Clear user messaging for permissions
	•	Automatic device switching on failure
	•	RPC Failures
	•	Request timeout handling
	•	Response validation
	•	Error message propagation

Event Handling Details

Core Events

enum VoiceChatEvent {
  // Room Events
  RoomJoined = 'room-joined',
  RoomLeft = 'room-left',
  
  // Audio Events
  AudioStarted = 'audio-started',
  AudioStopped = 'audio-stopped',
  
  // AI Events
  AIProcessingStarted = 'ai-processing-started',
  AIProcessingComplete = 'ai-processing-complete',
  
  // Error Events
  ErrorOccurred = 'error-occurred'
}

Event Flow
	1.	Room Connection

room.on(RoomEvent.Connected, async () => {
  await setupLocalTracks();
  registerAIHandler();
  initializeAudioProcessing();
});


	2.	Audio Processing

room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
  if (track.kind === Track.Kind.Audio) {
    handleIncomingAudio(track);
  }
});


	3.	AI Integration

room.localParticipant?.registerRpcMethod(
  'processAudio',
  async (data: RpcInvocationData) => {
    try {
      const response = await processAudioWithAI(data.payload);
      return response;
    } catch (error) {
      throw new RpcError('AI_PROCESSING_FAILED', error.message);
    }
  }
);



LiveKit Integration Requirements

Core Setup
	•	Install via npm install livekit-client
	•	Initialize room connection with WebRTC support check
	•	Implement audio playback permission handling
	•	Setup room event listeners

Audio Management
	•	Implement audio stream handling
	•	Setup microphone permissions
	•	Configure audio quality (16kHz sampling)
	•	Handle audio playback states

RPC Implementation
	•	Register AI communication methods
	•	Handle response timeouts
	•	Implement error handling for failed calls

Browser Compatibility

Browser	Desktop OS	Mobile OS
Chrome	Windows, macOS, Linux	Android
Firefox	Windows, macOS, Linux	Android
Safari	macOS	iOS
Edge (Chromium)	Windows, macOS	-

Required Polyfills
	•	ResizeObserver for legacy browsers
	•	IntersectionObserver for legacy browsers

Backend Services

LiveKit Server
	•	Room creation/management
	•	WebRTC connection handling
	•	Audio streaming

AI Processing
	•	Speech-to-text conversion
	•	ChatGPT integration
	•	Text-to-speech synthesis

5. Performance Requirements
	•	Latency: < 200ms for audio processing
	•	Response time: < 2s for AI processing
	•	Audio quality: 16kHz sampling rate
	•	Browser support: Chrome, Firefox, Safari, Edge

6. Security & Privacy
	•	End-to-end encryption for audio streams
	•	User consent for microphone access
	•	Data retention policies
	•	GDPR compliance measures

7. Development Phases

Phase 1: Basic Implementation
	•	LiveKit WebRTC setup
	•	Basic audio streaming
	•	Simple UI implementation

Phase 2: AI Integration
	•	ChatGPT integration
	•	Voice synthesis
	•	Real-time transcription

Phase 3: Enhancement
	•	UI polish
	•	Performance optimization
	•	Error handling
	•	Analytics integration

8. Success Metrics
	•	Voice recognition accuracy > 95%
	•	AI response relevance > 90%
	•	Average conversation duration
	•	User engagement metrics
	•	Error rate < 1%

9. Future Considerations
	•	Multiple AI voice options
	•	Conversation history
	•	Custom AI personality
	•	Multi-language support
	•	Voice emotion detection

10. Implementation Guide

Step 1: Package Installation

# LiveKit Core Dependencies
npm install livekit-client @livekit/components-react

# Audio Processing
npm install deepgram-sdk
npm install @elevenlabs/sdk

# UI Components (already in your stack)
# - Using existing @radix-ui components
# - Using existing tailwindcss-animate
# - Using existing framer-motion

# Types
npm install --save-dev @types/webrtc

Step 2: Project Structure

// Add these directories and files
src/
  components/
    voice-chat/
      VoiceChat.tsx              // Main component
      VoiceVisualizer.tsx        // Audio visualization
      MessageBubble.tsx          // Chat messages
      PhoneFrame.tsx             // iPhone container
      hooks/
        useVoiceState.ts         // Voice state management
        useAudioProcessing.ts    // Audio processing
        useLiveKit.ts            // LiveKit integration
      types/
        voice-chat.d.ts          // Type definitions

Step 3: Implementation Order
	1.	UI Layer (Week 1)

// 1. Create iPhone frame container
const PhoneFrame: React.FC = () => (
  <div className="relative max-w-[375px] h-[812px] mx-auto bg-white rounded-[60px] shadow-xl overflow-hidden">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[40%] bg-black rounded-b-[20px]" />
    {/* Content */}
    <div className="h-full pt-[30px] pb-[20px]">
      {children}
    </div>
  </div>
);


	2.	Chat Interface (Week 1)

// 2. Add message components
const MessageList: React.FC = () => (
  <ScrollArea className="h-[calc(100%-120px)] px-4">
    {messages.map((message) => (
      <MessageBubble key={message.id} {...message} />
    ))}
  </ScrollArea>
);


	3.	Voice Visualizer (Week 1-2)

// 3. Implement voice visualization
const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({
  bars,
  state
}) => (
  <div className="flex items-center gap-1 h-10">
    {Array.from({ length: bars.count }).map((_, i) => (
      <Bar key={i} {...bars} state={state} />
    ))}
  </div>
);


	4.	LiveKit Integration (Week 2)

// 4. Setup LiveKit room
const useLiveKit = () => {
  const room = useMemo(() => new Room(), []);
  
  const connect = useCallback(async () => {
    await room.connect('wss://your-livekit-url', token);
    await room.localParticipant.enableAudio();
  }, [room]);

  return { room, connect };
};


	5.	Audio Processing (Week 2-3)

// 5. Implement audio processing
const useAudioProcessing = () => {
  const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
  const elevenlabs = new ElevenLabs(process.env.ELEVENLABS_API_KEY);
  
  // Audio processing logic
};


	6.	State Management (Week 3)

// 6. Implement state management
const useVoiceState = () => {
  const [state, setState] = useState<VoiceState>({
    currentState: 'idle',
    volume: 0,
    isProcessing: false
  });
  
  // State management logic
};



Step 4: Environment Setup

# Add to .env.local
NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
NEXT_PUBLIC_DEEPGRAM_API_KEY=your_deepgram_key
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_elevenlabs_key

Step 5: Component Integration

Replace the team section in your main page:

// app/page.tsx
import { VoiceChat } from '@/components/voice-chat/VoiceChat';

export default function Page() {
  return (
    <section className="relative py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10">Chat with Our AI Assistant</h2>
        <VoiceChat />
      </div>
    </section>
  );
}

Step 6: iPhone Mockup Installation & Usage

To further enhance the UI with an iPhone frame:
	1.	Install the iPhone 15 Pro component from MagicUI:

npx shadcn@latest add "https://magicui.design/r/iphone-15-pro"

This adds a component named Iphone15Pro to your codebase (e.g., @/components/magicui/iphone-15-pro).

	2.	Use the Iphone15Pro component in your chat or demo component. For example:

import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative">
      <Iphone15Pro className="size-full" />
    </div>
  );
}

Or pass in an image src to show on the screen:

import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative">
      <Iphone15Pro
        className="size-full"
        src="https://via.placeholder.com/430x880"
      />
    </div>
  );
}

	•	You can wrap your voice chat inside this Iphone15Pro mockup to simulate a real iPhone interface.

Compatibility Notes

Your current tech stack is well-suited for this implementation:
	•	✅ Next.js 14.2.16
	•	✅ React 18
	•	✅ Tailwind CSS
	•	✅ Radix UI components
	•	✅ Framer Motion for animations

Testing Steps
	1.	UI Testing (Week 1)
	•	Verify iPhone frame rendering (if using Iphone15Pro)
	•	Test message bubble layouts
	•	Validate voice visualizer animations
	2.	Integration Testing (Week 2)
	•	Test LiveKit connection
	•	Verify audio permissions
	•	Check WebRTC compatibility
	3.	End-to-End Testing (Week 3)
	•	Full conversation flow
	•	Error handling
	•	Performance metrics

Performance Optimization
	1.	Code Splitting

// Lazy load the voice chat component
const VoiceChat = dynamic(() => import('@/components/voice-chat/VoiceChat'), {
  loading: () => <VoiceChatSkeleton />,
  ssr: false
});


	2.	Asset Optimization
	•	Use WebP format for images
	•	Optimize audio processing
	•	Implement proper cleanup

Error Handling

Add error boundaries and fallbacks:

const VoiceChatErrorBoundary: React.FC = () => (
  <ErrorBoundary
    fallback={
      <div className="p-4 text-center">
        <p>Unable to load voice chat. Please try again.</p>
        <Button onClick={reset}>Retry</Button>
      </div>
    }
  >
    <VoiceChat />
  </ErrorBoundary>
);

End of PRD. The added iPhone 15 Pro steps show how to integrate a phone-frame mockup. This completes the instructions for creating a polished, immersive voice chat experience within a simulated mobile environment.