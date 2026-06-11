import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/skills'
import { Code2, Monitor, Server, Database, Wrench } from 'lucide-react'

const categories = [
  { key: 'languages', label: 'Languages',  icon: Code2,    grad: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', accent: '#059669' },
  { key: 'frontend',  label: 'Frontend',   icon: Monitor,  grad: 'linear-gradient(135deg,#ccfbf1,#a7f3d0)', accent: '#0d9488' },
  { key: 'backend',   label: 'Backend',    icon: Server,   grad: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', accent: '#059669' },
  { key: 'databases', label: 'Databases',  icon: Database, grad: 'linear-gradient(135deg,#ccfbf1,#a7f3d0)', accent: '#0d9488' },
  { key: 'tools',     label: 'Tools',      icon: Wrench,   grad: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', accent: '#059669' },
]

const SkillBar = ({ name, level, delay, accent }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.4, delay }}
    style={{ marginBottom: '0.85rem' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
      <span style={{ fontSize: '0.83rem', fontWeight: 600, color: '#1c2b2b' }}>{name}</span>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: accent }}>{level}%</span>
    </div>
    <div style={{ width: '100%', height: 7, background: '#f1f5f9', borderRadius: 999, overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
        viewport={{ once: true }} transition={{ duration: 0.9, delay: delay + 0.2, ease: 'easeOut' }}
        style={{
          height: '100%', borderRadius: 999,
          background: `linear-gradient(90deg, ${accent}, ${accent === '#059669' ? '#0d9488' : '#059669'})`,
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          width: 11, height: 11, borderRadius: '50%', background: '#fff',
          border: `2px solid ${accent}`, boxShadow: '0 0 0 2px rgba(5,150,105,0.15)',
        }} />
      </motion.div>
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" style={{ background: '#fff' }} className="section-wrap">
      <div className="site-container">
        <SectionHeading
          label="Expertise"
          title={<>Technical <span className="gradient-text">Skills</span></>}
          subtitle="A comprehensive toolkit of modern technologies I use to build scalable, production-grade applications."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                background: cat.grad, borderRadius: '1.25rem', padding: '1.5rem',
                border: '1px solid rgba(5,150,105,0.15)',
                boxShadow: '0 2px 12px rgba(5,150,105,0.06)',
                cursor: 'default', transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '0.75rem', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(5,150,105,0.15)',
                }}>
                  <cat.icon size={20} color={cat.accent} />
                </div>
                <h3 className="font-display" style={{ fontWeight: 700, color: '#1c2b2b', fontSize: '0.9rem' }}>{cat.label}</h3>
              </div>
              {skills[cat.key].map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level}
                  delay={ci * 0.08 + si * 0.05} accent={cat.accent} />
              ))}
            </motion.div>
          ))}

          {/* MERN summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              background: 'linear-gradient(135deg, #059669, #0d9488)',
              borderRadius: '1.25rem', padding: '1.75rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 200,
            }}
          >
            <div>
              <h3 className="font-display" style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.75rem' }}>Core Stack</h3>
              <p style={{ color: '#d1fae5', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Specialized in the MERN stack for full-stack web development and React Native for cross-platform mobile apps.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Native', 'JWT'].map((t) => (
                <span key={t} style={{
                  padding: '0.35rem 0.75rem', background: 'rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
