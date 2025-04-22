'use client'

import { useState } from 'react'
import Preloader from './Preloader'
import Navbar from './Navbar'
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loadingDone, setLoadingDone] = useState(false)

  return (
    <LazyMotion features={domAnimation}>
      <>
        <AnimatePresence mode="wait">
          {!loadingDone && <Preloader onFinish={() => setLoadingDone(true)} />}
        </AnimatePresence>

        {/* Delay Navbar render until after Preloader exit */}
        {loadingDone && <Navbar />}

        <AnimatePresence>
          {loadingDone && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </LazyMotion>
  )
}
