import { motion } from 'framer-motion';
import { Shield, BookOpen, UserCheck, BarChart3, FileCheck2, Medal } from 'lucide-react';

const roles = [
  {
    title: 'Administrator',
    icon: Shield,
    color: 'from-yellow-500/20 to-yellow-400/10',
    points: [
      'Manage users: add, edit, delete',
      'Create and organize programs and courses',
      'Define sections and learning materials',
      'Access analytics and system reports',
    ],
  },
  {
    title: 'Instructor',
    icon: BookOpen,
    color: 'from-yellow-500/20 to-yellow-400/10',
    points: [
      'Upload materials and multimedia',
      'Create and edit tests and assignments',
      'Evaluate student submissions',
      'Monitor cohort performance',
    ],
  },
  {
    title: 'Student',
    icon: UserCheck,
    color: 'from-yellow-500/20 to-yellow-400/10',
    points: [
      'Enroll and learn with beautiful UI',
      'Take tests and submit assignments',
      'Track progress and achievements',
      'View results and feedback',
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="relative py-20 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Three Roles. One Platform.
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 overflow-hidden"
            >
              <div className={`absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${role.color} blur-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <role.icon className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                </div>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {role.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900/60">
            <BarChart3 className="h-5 w-5 text-yellow-400" />
            Actionable analytics and reports
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900/60">
            <FileCheck2 className="h-5 w-5 text-yellow-400" />
            Rubrics and auto‑graded tests
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900/60">
            <Medal className="h-5 w-5 text-yellow-400" />
            Badges and achievement tracking
          </div>
        </div>
      </div>
    </section>
  );
}
