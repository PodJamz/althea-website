"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GlowEffect } from "@/components/ui/glow-effect";
import Link from "next/link";

interface FormValues {
  type: "investor" | "user";
  name: string;
  email: string;
  company?: string;
}

export function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userType, setUserType] = useState<"investor" | "user" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Thank you for your interest!", {
      description: "We'll be in touch soon.",
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative space-y-8 p-12 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 text-center"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 opacity-50" />
          <div className="relative space-y-4">
            <h2 className="text-3xl font-bold text-[hsl(var(--text-primary))]">Thank you!</h2>
            <p className="text-[hsl(var(--text-primary))] opacity-80 max-w-sm mx-auto">
              We'll be in touch soon with next steps.
            </p>
            <Link href="/blog" className="inline-block mt-6">
              <Button variant="outline" size="lg" className="text-[hsl(var(--text-primary))] border-white/20">
                Explore Our Blog
                <ChevronLeft className="ml-2 rotate-180" size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!userType) {
    return (
      <div className="w-full max-w-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative space-y-8 p-12 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10"
        >
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-4 left-4 text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20"
            onClick={() => router.push('/')}
          >
            <X size={20} />
          </Button>
          
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[hsl(var(--text-primary))]">Welcome to λLTHEλ</h2>
            <p className="text-[hsl(var(--text-primary))] opacity-80 max-w-md mx-auto">
              Join us in revolutionizing healthcare through medical superintelligence
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={() => setUserType("investor")}
                variant="outline"
                className="w-full h-40 flex flex-col gap-3 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20 hover:border-white/20"
              >
                <div className="text-2xl mb-2">💼</div>
                <div className="text-lg font-medium">Investor</div>
                
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={() => setUserType("user")}
                variant="outline"
                className="w-full h-40 flex flex-col gap-3 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20 hover:border-white/20"
              >
                <div className="text-2xl mb-2">👤</div>
                <div className="text-lg font-medium">User</div>
                
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto relative">
      {isSubmitting && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GlowEffect
            colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
            mode="colorShift"
            blur="medium"
            duration={4}
          />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative space-y-8 p-12 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10"
      >
        <div className="flex justify-between items-center absolute top-4 left-4 right-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20"
            onClick={() => router.push('/')}
          >
            <X size={20} />
          </Button>
          <Button 
            variant="ghost"
            className="text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20"
            onClick={() => setUserType(null)}
          >
            <ChevronLeft className="mr-2" size={16} strokeWidth={2} aria-hidden="true" />
            Back
          </Button>
        </div>

        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[hsl(var(--text-primary))]">Register Interest</h2>
            <p className="text-[hsl(var(--text-primary))] opacity-70">
              {userType === "investor" 
                ? "Join us in revolutionizing healthcare" 
                : "Be among the first to experience the future"}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {userType === "investor" && (
                <FormField
                  control={form.control}
                  name="company"
                  rules={{ required: "Company name is required for investors" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--text-primary))] font-medium">Company</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company Name" 
                          {...field} 
                          className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-12 bg-[hsl(var(--text-primary))] text-[hsl(var(--hero-bg))] hover:opacity-90 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
} 