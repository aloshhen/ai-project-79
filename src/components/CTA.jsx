import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-[#141414]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#FAFAFA]"
        >
          Ready to Transform Your Coffee Experience?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[#A1A1AA] text-xl max-w-2xl mx-auto"
        >
          Join our ecosystem today and elevate your coffee game to new heights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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