import { motion } from 'framer-motion'
import { Bean, Thermometer, Coffee, Leaf } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Bean className="w-8 h-8 text-[#3B82F6]" />,
      title: "Premium Beans",
      description: "Sourced from the finest coffee plantations worldwide."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-[#3B82F6]" />,
      title: "Precision Brewing",
      description: "Smart temperature control for the perfect cup every time."
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#3B82F6]" />,
      title: "Custom Recipes",
      description: "Create and share your own coffee recipes with our app."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#3B82F6]" />,
      title: "Eco-Friendly",
      description: "Sustainable practices from farm to your cup."
    }
  ]

  return (
    <section className="py-24 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#FAFAFA] text-center"
        >
          Why Choose Our Ecosystem?
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0A0A0A] p-8 rounded-lg border border-[#27272A] hover:border-[#3B82F6] transition-colors"
            >
              <div className="flex items-center justify-center">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#FAFAFA] text-center">{feature.title}</h3>
              <p className="mt-2 text-[#A1A1AA] text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}