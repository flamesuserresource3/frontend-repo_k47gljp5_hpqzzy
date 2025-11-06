import { motion } from 'framer-motion';
import { Shield, BookOpen, UserCheck, Trash2, Edit3, PlusCircle, Upload, CheckCircle2, Eye, BarChart3 } from 'lucide-react';

function Panel({ title, subtitle, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-yellow-400" />
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-gray-400 text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm text-gray-200">{children}</div>
    </div>
  );
}

export default function DemoPanels() {
  return (
    <section id="demo" className="relative py-20 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Role‑based Demo
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Panel title="Administrator" subtitle="Manage the ecosystem" icon={Shield}>
              <div className="flex items-center gap-2"><PlusCircle className="h-4 w-4 text-yellow-400" /> Add user and assign roles</div>
              <div className="flex items-center gap-2"><Edit3 className="h-4 w-4 text-yellow-400" /> Edit course structure</div>
              <div className="flex items-center gap-2"><Trash2 className="h-4 w-4 text-yellow-400" /> Remove archived programs</div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-yellow-400" /> View analytics dashboard</div>
            </Panel>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Panel title="Instructor" subtitle="Craft learning content" icon={BookOpen}>
              <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-yellow-400" /> Upload PDFs and videos</div>
              <div className="flex items-center gap-2"><Edit3 className="h-4 w-4 text-yellow-400" /> Build quizzes and question banks</div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-yellow-400" /> Review student submissions</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-400" /> Grade assignments</div>
            </Panel>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Panel title="Student" subtitle="Learn and achieve" icon={UserCheck}>
              <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-yellow-400" /> Study materials</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-400" /> Take tests</div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-yellow-400" /> Track progress</div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-yellow-400" /> View achievements</div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
