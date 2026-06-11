import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experience'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

const Experience = () => (
  <section id="experience" style={{ background: '#f0fdf4' }} className="section-wrap">
    <div className="site-container">
      <SectionHeading
        label="Experience" center
        title={<>Work <span className="gradient-text">Experience</span></>}
        subtitle="Professional experience building real-world applications in production environments."
      />

      <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: 22, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(to bottom, #059669, #0d9488, #a7f3d0)',
          borderRadius: 2,
        }} />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ paddingLeft: '3.5rem', paddingBottom: '2rem', position: 'relative' }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: 12, top: 22, width: 22, height: 22,
              borderRadius: '50%', background: 'linear-gradient(135deg,#059669,#0d9488)',
              border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(5,150,105,0.2)',
            }} />

            <motion.div
              whileHover={{ y: -3 }}
              style={{
                background: '#fff', borderRadius: '1.25rem', padding: '1.75rem',
                border: '1px solid #d1fae5', boxShadow: '0 2px 16px rgba(5,150,105,0.07)',
                transition: 'all 0.3s',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{
                    display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
                    color: '#059669', background: '#ecfdf5', border: '1px solid #a7f3d0',
                    padding: '0.2rem 0.6rem', borderRadius: 999, marginBottom: '0.5rem',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{exp.type}</span>
                  <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c2b2b' }}>{exp.role}</h3>
                  <p style={{ color: '#059669', fontWeight: 700, fontSize: '0.9rem' }}>{exp.company}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#64748b' }}>
                    <MapPin size={13} color="#059669" />{exp.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#64748b' }}>
                    <Calendar size={13} color="#059669" />{exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul style={{ margin: '0 0 1rem', padding: 0, listStyle: 'none' }}>
                {exp.responsibilities.map((item, ri) => (
                  <motion.li
                    key={ri}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: ri * 0.07 }}
                    style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.65rem' }}
                  >
                    <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.7 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.skills.map((s) => (
                  <span key={s} style={{
                    padding: '0.3rem 0.75rem', background: '#ecfdf5',
                    border: '1px solid #a7f3d0', color: '#059669',
                    fontSize: '0.75rem', fontWeight: 600, borderRadius: '0.5rem',
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
