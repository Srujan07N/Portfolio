import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { GraduationCap, Target, User, Zap, BookOpen, Award } from 'lucide-react'

const strengths = [
  { icon: Zap,      label: 'Problem Solver',  desc: 'Analytical approach to complex technical challenges' },
  { icon: BookOpen, label: 'Quick Learner',    desc: 'Rapidly adapt to new technologies and frameworks' },
  { icon: User,     label: 'Team Player',      desc: 'Collaborative mindset in agile environments' },
  { icon: Award,    label: 'Quality Driven',   desc: 'Committed to clean, maintainable code standards' },
]

const card = {
  background: '#fff',
  borderRadius: '1rem',
  padding: '1.25rem',
  border: '1px solid #d1fae5',
  boxShadow: '0 1px 8px rgba(5,150,105,0.06)',
}

const About = () => {
  return (
    <section id="about" style={{ background: '#f0fdf4' }} className="section-wrap">
      <div className="site-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="about-grid">

          {/* LEFT — Bio */}
          <div>
            <SectionHeading label="About Me" title={<>Who I <span className="gradient-text">Am</span></>} />

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1rem' }}>
                Full Stack Developer specializing in <strong style={{ color: '#059669' }}>MERN Stack development</strong> with hands-on experience building scalable web and mobile applications using React.js, React Native, Node.js, Express.js, and MongoDB.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1.75rem' }}>
                Skilled in <strong style={{ color: '#059669' }}>REST APIs, JWT Authentication, Role-Based Access Control, Database Design</strong>, and Agile Development.
              </p>

              {/* Info cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <motion.div style={card} whileHover={{ y: -3 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '0.5rem', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <GraduationCap size={16} color="#059669" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#1c2b2b' }}>Education</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.82rem' }}>MCA — Shree Devi Institute of Technology</p>
                  <p style={{ color: '#059669', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 600 }}>GPA: 8.6/10 · 2024–2026</p>
                </motion.div>

                <motion.div style={card} whileHover={{ y: -3 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '0.5rem', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Target size={16} color="#0d9488" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#1c2b2b' }}>Current Status</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.82rem' }}>MCA Final Year Student</p>
                  <p style={{ color: '#059669', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 600 }}>Open to Full-Time Roles</p>
                </motion.div>
              </div>

              {/* Career goal banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.4 }}
                style={{
                  background: 'linear-gradient(135deg, #059669, #0d9488)',
                  borderRadius: '1rem', padding: '1.25rem 1.5rem', color: '#fff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Target size={16} />
                  <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>Career Goal</span>
                </div>
                <p style={{ color: '#d1fae5', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Seeking a challenging Full Stack Developer role at a product-based company where I can leverage my MERN Stack expertise to build impactful, scalable digital products.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1c2b2b', marginBottom: '1.5rem' }}>
              Personal <span className="gradient-text">Strengths</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              {strengths.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: '#fff', borderRadius: '1rem', padding: '1.25rem',
                    border: '1px solid #d1fae5', boxShadow: '0 1px 8px rgba(5,150,105,0.06)',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '0.75rem',
                    background: 'linear-gradient(135deg,#d1fae5,#ccfbf1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem',
                  }}>
                    <item.icon size={20} color="#059669" />
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#1c2b2b', fontSize: '0.85rem', marginBottom: '0.3rem' }}>{item.label}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
              {[{ number: '20+', label: 'Projects' }, { number: '1+', label: 'Yrs Exp.' }, { number: '8.6', label: 'GPA' }].map((s) => (
                <div key={s.label} style={{
                  background: '#fff', borderRadius: '1rem', padding: '1rem',
                  textAlign: 'center', border: '1px solid #d1fae5',
                }}>
                  <p className="gradient-text font-display" style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{s.number}</p>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.3rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default About
