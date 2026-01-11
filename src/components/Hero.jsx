import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent"
        >
          Revolutionize Your Coffee Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[#A1A1AA] text-xl max-w-2xl mx-auto"
        >
          Discover the future of coffee with our smart ecosystem - from bean to cup, all in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button className="bg-[#3B82F6] text-[#FAFAFA] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#60A5FA] transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-[#27272A] text-[#FAFAFA] px-6 py-3 rounded-lg hover:bg-[#141414] transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}