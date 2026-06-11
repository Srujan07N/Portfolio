import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react'

const Education = () => (
  <section id="education" style={{ background: '#fff' }} className="section-wrap">
    <div className="site-container">
      <SectionHeading
        label="Education" center
        title={<>Academic <span className="gradient-text">Background</span></>}
        subtitle="My educational journey that has shaped my technical foundation and problem-solving mindset."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ maxWidth: 760, margin: '0 auto', position: 'relative', paddingLeft: '3rem' }}
      >
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 10, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(to bottom, #059669, #a7f3d0)', borderRadius: 2,
        }} />
        {/* Timeline dot */}
        <div style={{
          position: 'absolute', left: 0, top: 22, width: 22, height: 22,
          borderRadius: '50%', background: 'linear-gradient(135deg,#059669,#0d9488)',
          border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(5,150,105,0.2)',
        }} />

        <motion.div whileHover={{ y: -4 }}
          style={{
            background: '#fff', borderRadius: '1.5rem',
            border: '1px solid #d1fae5', overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(5,150,105,0.1)',
            transition: 'all 0.4s',
          }}
        >
          {/* Gradient header */}
          <div style={{
            background: 'linear-gradient(135deg, #059669, #0d9488)',
            padding: '2rem 2.25rem', color: '#fff',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <GraduationCap size={18} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Post Graduate Degree
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>
                  Master of Computer Applications
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.25rem', fontSize: '0.9rem' }}>(MCA)</p>
              </div>

              {/* GPA Badge */}
              <div style={{
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: '1rem',
                padding: '1rem 1.5rem', textAlign: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.25rem' }}>
                  <Star size={13} color="#fde68a" fill="#fde68a" />
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>GPA</span>
                </div>
                <p className="font-display" style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, color: '#fff' }}>8.6</p>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)' }}>/10</p>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: '2rem 2.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
              {[
                { Icon: GraduationCap, color: '#d1fae5', accent: '#059669', label: 'Institution', value: 'Shree Devi Institute of Technology' },
                { Icon: Calendar,      color: '#ccfbf1', accent: '#0d9488', label: 'Duration',    value: '2024 – 2026' },
                { Icon: MapPin,        color: '#d1fae5', accent: '#059669', label: 'Location',    value: 'Mangalore, Karnataka' },
              ].map(({ Icon, color, accent, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 38, height: 38, borderRadius: '0.65rem', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} color={accent} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1c2b2b', lineHeight: 1.4 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #f0fdf4', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Key Subjects</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Data Structures & Algorithms', 'Database Management', 'Web Technologies', 'Software Engineering', 'Computer Networks', 'Cloud Computing'].map((s) => (
                  <span key={s} style={{ padding: '0.35rem 0.85rem', background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#059669', fontSize: '0.78rem', fontWeight: 600, borderRadius: '0.5rem' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default Education
