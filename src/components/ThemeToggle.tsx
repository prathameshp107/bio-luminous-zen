"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 group"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <motion.div
          initial={{ rotate: 0, opacity: 1, scale: 1 }}
          animate={{
            rotate: theme === "dark" ? -180 : 0,
            opacity: theme === "dark" ? 0 : 1,
            scale: theme === "dark" ? 0.5 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-foreground" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-foreground" />
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{
          background: theme === "light" 
            ? "linear-gradient(to right, rgb(251 191 36 / 0.2), rgb(168 85 247 / 0.2))"
            : "linear-gradient(to right, rgb(251 191 36 / 0.1), rgb(168 85 247 / 0.1))"
        }}
      />
    </button>
  )
}
