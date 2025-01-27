"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GlowEffect } from "@/components/ui/glow-effect";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  github: z.string().url().or(z.literal('')).optional(),
  x: z.string().url().or(z.literal('')).optional(),
  resume: z.instanceof(FileList).optional(),
  portfolio: z.string().url().optional()
}).superRefine((data, ctx) => {
  if (!data.resume?.length && !data.portfolio) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Either resume or portfolio link is required",
      path: ["portfolio"]
    });
  }
});

type FormValues = z.infer<typeof formSchema>;

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      github: "",
      x: "",
      portfolio: ""
    }
  });

  const resumeFile = form.watch("resume");

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Application submitted!", {
      description: "We'll review your information and be in touch soon."
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
          className="relative space-y-8 p-12 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Thank you!</h2>
            <p className="text-gray-400">
              We've received your application and will be in touch soon.
            </p>
            <Link href="/careers">
              <Button variant="outline" className="border-white/20">
                Back to Careers
              </Button>
            </Link>
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
        className="relative space-y-8 p-12 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl         border border-white/20 dark:border-white/10"
      >
        <div className="flex justify-between items-center absolute top-4 left-4 right-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-[hsl(var(--text-primary))] hover:bg-white/10 dark:hover:bg-black/20"
            onClick={() => router.push('/careers')}
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[hsl(var(--text-primary))]">Application Form</h2>
            <p className="text-[hsl(var(--text-primary))] opacity-70">
              Show us what you're made of
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* GitHub Profile */}
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">GitHub Profile (optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="url" 
                        placeholder="https://github.com/yourusername" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* X/Twitter Profile */}
              <FormField
                control={form.control}
                name="x"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">X/Twitter Profile (optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="url" 
                        placeholder="https://x.com/yourhandle" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Resume Upload */}
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">
                      Resume (PDF, max 5MB)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => field.onChange(e.target.files)}
                        className="h-12 file:h-12 file:px-4 file:mr-4 file:bg-white/10 file:border-0 file:text-[hsl(var(--text-primary))] hover:file:bg-white/20 cursor-pointer"
                      />
                    </FormControl>
                    {resumeFile?.length > 0 && (
                      <p className="text-sm text-gray-400">
                        Selected: {resumeFile[0].name}
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Portfolio URL */}
              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[hsl(var(--text-primary))] font-medium">
                      Portfolio URL (if not submitting resume)
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="url" 
                        placeholder="https://yourportfolio.com" 
                        {...field} 
                        className="h-12 bg-white/5 dark:bg-black/10 border-white/10 dark:border-white/5 text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-primary))/40] focus:border-white/30 dark:focus:border-white/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-12 bg-[hsl(var(--text-primary))] text-[hsl(var(--hero-bg))] hover:opacity-90 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}