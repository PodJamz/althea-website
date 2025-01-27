"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TypingAnimationProps {
  children: string
  duration?: number
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ children, duration = 40 }) => {
  const [text, setText] = useState("")

  useEffect(() => {
    let index = 0
    setText("")

    const intervalId = setInterval(() => {
      setText((prev) => prev + children[index])
      index++

      if (index === children.length) {
        clearInterval(intervalId)
      }
    }, duration)

    return () => clearInterval(intervalId)
  }, [children, duration])

  return <span>{text}</span>
}

