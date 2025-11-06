import { motion } from 'framer-motion';
import { LayoutDashboard, Layers, Library, ClipboardList, Users, Settings } from 'lucide-react';

const features = [
  {
    title: 'Program & Course Builder',
    desc: 'Design programs with courses, sections, and materials using a modular structure.',
    icon: Layers,
  },
  {
    title: 'Content Library',
    desc: 'Upload videos, PDFs, and interactive assets with versioning and previews.',
    icon: Library,
  },
  {
    title: 'Assignments & Tests',
    desc: 'Create quizzes with question banks, auto‑grading, and manual review.',
    icon: ClipboardList,
  },
  {
    title: 'Role‑based Access',
    desc: 'Granular permissions for Administrators, Instructors, and Students.',
    icon: Users,
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Track enrollments, completion rates, and performance over time.',
    icon: LayoutDashboard,
  },
  {
    title: 'Settings & Integrations',
    desc: 'Single sign‑on, webhooks, and external data sources ready.',
    icon: Settings,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Powerful Features for Every Role
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-800 bg-gray-900/70 p-6 hover:border-yellow-500/40 transition group"
            >
              <div className="flex items-center gap-3">
                <f.icon className="h-6 w-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-gray-300 text-sm">{f.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
              <div className="mt-4 text-yellow-300 text-sm opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
