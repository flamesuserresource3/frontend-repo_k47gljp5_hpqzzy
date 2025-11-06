import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-yellow-300"
        >
          <Sparkles className="h-4 w-4" />
          Futuristic learning platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Elevate Education with Multi‑Role LMS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Administrators orchestrate programs, instructors craft engaging content, and students thrive with interactive courses, tests, and progress tracking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#demo" className="rounded-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 transition">
            Live Demo
          </a>
          <a href="#features" className="rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-6 py-3 transition">
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
