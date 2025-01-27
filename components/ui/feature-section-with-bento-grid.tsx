'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { VoiceChat } from '../voice-chat/VoiceChat';
import Iphone15Pro from './iphone-15-pro';
import { Globe as GlobeIcon } from "lucide-react";
import { ConversationDemo } from '../ConversationDemo';

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Our Vision",
      description:
        "Medical Superintelligence will enable 360° evidence-based health decisions for everyone. Your medical history and realtime data provide a snapshot of your body, matched with the highest ranked research informing triage and diagnosis alongside your doctors.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-zinc-200",
    },
    {
      title: "Althea Chat",
      description:
        "Secure, encrypted messaging system that enables seamless communication between you, Althea, and your healthcare providers for coordinated care.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-zinc-200",
    },
    {
      title: "Our Mission",
      description:
        "Every single person on earth should have the best possible understanding of their health.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-zinc-200",
    },
    {
      title: "Your Privacy, Our Priority",
      description:
        "At Althea (headquartered in Japan, serving patients in the U.S. and worldwide), we understand that health data is deeply personal. We use cutting-edge encryption to protect your information from the moment you enter it. We also follow strict standards like HIPAA (U.S.) and APPI (Japan) to ensure our platform remains a safe space for you to explore better health insights.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md border-zinc-200">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[350px] max-h-[700px] mx-auto bg-white shadow-2xl group">
        <div className="flex flex-1 w-full h-full flex-col">
          <Image
            src="/medical-ai.jpg"
            alt="Medical AI Vision"
            width={500}
            height={500}
            className="w-full aspect-square object-cover object-center rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};


export const SkeletonTwo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[300px]">
        <Iphone15Pro>
          <div className="h-full w-full overflow-hidden bg-white">
            <ConversationDemo />
          </div>
        </Iphone15Pro>
      </div>
    </div>
  );
};


export const SkeletonThree = () => {
  return (
    <Link
      href="#"
      target="__blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="Our Mission"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};


export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <GlobeComponent className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const GlobeComponent = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 }, // LA
        { location: [40.7128, -74.006], size: 0.03 }, // NYC
        { location: [53.3498, -6.2603], size: 0.03 }, // Dublin
        { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
        { location: [40.7608, -111.8910], size: 0.03 }, // Utah (Salt Lake City)
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
}; 