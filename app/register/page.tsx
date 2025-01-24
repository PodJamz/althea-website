"use client";

import { RegisterForm } from "@/components/register-form";
import { Navigation } from "@/components/navigation";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--hero-bg))] text-[hsl(var(--text-primary))] flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-100 pointer-events-none will-change-transform"
            style={{
              backgroundImage: 'var(--aurora-gradient)',
              backgroundSize: '400% 400%',
              backgroundPosition: '50% 50%',
              filter: 'blur(80px)',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'var(--aurora-gradient)',
                backgroundSize: '200% 200%',
                backgroundAttachment: 'fixed',
                animation: 'aurora 60s linear infinite',
                mixBlendMode: 'color-dodge',
              }}
            />
          </div>
        </div>
        
        <div className="relative z-10">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
} 