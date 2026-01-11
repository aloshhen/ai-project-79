import { motion } from 'framer-motion'
import { Coffee, Thermometer, Bean, Leaf } from 'lucide-react'

export default function About() {
  const steps = [
    {
      icon: <Bean className="w-8 h-8 text-[#3B82F6]" />,
      title: "Select Your Beans",
      description: "Choose from our premium selection of coffee beans."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-[#3B82F6]" />,
      title: "Set Your Preferences",
      description: "Customize brewing temperature and strength."
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#3B82F6]" />,
      title: "Brew & Enjoy",
      description: "Let our smart system brew your perfect cup."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#3B82F6]" />,
      title: "Track Your Impact",
      description: "Monitor your eco-friendly coffee journey."
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#FAFAFA] text-center"
        >
          How It Works
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#141414] p-8 rounded-lg border border-[#27272A] hover:border-[#3B82F6] transition-colors"
            >
              <div className="flex items-center justify-center">{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#FAFAFA] text-center">{step.title}</h3>
              <p className="mt-2 text-[#A1A1AA] text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}