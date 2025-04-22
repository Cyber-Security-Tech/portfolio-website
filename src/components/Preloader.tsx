'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoIconAnimated from './LogoIconAnimated'

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [showGlow, setShowGlow] = useState(false)
  const [fadeGlow, setFadeGlow] = useState(false)

  useEffect(() => {
    const glowStart = setTimeout(() => setShowGlow(true), 1000)
    const glowFade = setTimeout(() => setFadeGlow(true), 2200)
    const end = setTimeout(() => {
      setIsVisible(false)
      onFinish()
    }, 3000)

    return () => {
      clearTimeout(glowStart)
      clearTimeout(glowFade)
      clearTimeout(end)
    }
  }, [onFinish])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 flex items-center justify-center bg-[#0a192f] z-[999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            layoutId="logo"
            className="w-14 h-14"
            animate={{
              filter: showGlow
                ? fadeGlow
                  ? 'drop-shadow(0 0 0px rgba(0,255,180,0))'
                  : 'drop-shadow(0 0 15px rgba(0,255,180,0.8))'
                : 'none',
              scale: showGlow ? 1.05 : 1
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="w-full h-full scale-[6] origin-center">
              <LogoIconAnimated />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
