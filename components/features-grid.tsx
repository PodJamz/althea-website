"use client"

import { motion } from "framer-motion"
import { Brain, Shield, Stethoscope, Clock, Heart, UserCheck } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Smart Triage",
    description: "Evidence-based diagnosis powered by your data",
    color: "from-blue-500/20 to-blue-500/0", 
    textColor: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Secure Data",
    description: "HIPAA-compliant encryption for all medical records",
    color: "from-green-500/20 to-green-500/0",
    textColor: "text-green-500",
  },
  {
    icon: Stethoscope,
    title: "Expert Care",
    description: "Connect with certified healthcare professionals",
    color: "from-purple-500/20 to-purple-500/0",
    textColor: "text-purple-500",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Round-the-clock availability for urgent concerns",
    color: "from-orange-500/20 to-orange-500/0",
    textColor: "text-orange-500",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Proactive health monitoring and recommendations",
    color: "from-pink-500/20 to-pink-500/0",
    textColor: "text-pink-500",
  },
  {
    icon: UserCheck,
    title: "Easy Access",
    description: "Simplified healthcare management for everyone",
    color: "from-teal-500/20 to-teal-500/0",
    textColor: "text-teal-500",
  },
]

export function FeaturesGrid() {
  return (
    <section className="container py-24">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Everything you need for better health
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          Proactive health monitoring is the gateway to lifelong improvement. Small steps each day can compound into major health transformations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 bg-gradient-to-b from-muted/50 to-muted border rounded-lg space-y-4">
              <div className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-b ${feature.color}`}>
                <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

