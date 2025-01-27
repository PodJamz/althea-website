import type React from "react"

interface Iphone15ProProps {
  children: React.ReactNode
  className?: string
}

export function Iphone15Pro({ children, className = "" }: Iphone15ProProps) {
  return (
    <div
      className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}
    >
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="absolute top-0 inset-x-0">
          <div className="h-6 w-40 bg-gray-800 rounded-b-3xl mx-auto"></div>
        </div>
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  )
}

