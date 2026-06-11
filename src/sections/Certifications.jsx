import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/certifications'
import { Award, Plus } from 'lucide-react'

const Certifications = () => (
  <section id="certifications" style={{ background: '#f0fdf4' }} className="section-wrap">
    <div className="site-container">
      <SectionHeading
        label="Credentials" center
        title={<>My <span className="gradient-text">Certifications</span></>}
        subtitle="Professional certifications validating expertise in modern web development technologies."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.25rem' }}>
        {certifications.map((cert, i) => (
          <motion.div key={cert.id}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            style={{
              background: '#fff', borderRadius: '1.25rem',
              border: '1px solid #d1fae5', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(5,150,105,0.07)',
              transition: 'all 0.35s',
            }}
          >
            {/* Gradient header */}
            <div style={{
              height: 130, position: 'relative', overflow: 'hidden',
              background: `linear-gradient(135deg, #059669, #0d9488)`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.1,
                backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }} />
              {/* Shimmer */}
              <div className="cert-shimmer" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                transform: 'translateX(-100%)', transition: 'transform 0.7s',
              }} />
              <Award size={38} color="#fff" style={{ opacity: 0.9, position: 'relative' }} />
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.68rem', fontWeight: 600, marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase', position: 'relative' }}>
                Certificate
              </p>
            </div>
            <div style={{ padding: '1.1rem 1.25rem' }}>
              <h3 className="font-display" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c2b2b', marginBottom: 4, lineHeight: 1.4 }}>{cert.title}</h3>
              <p style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 600, marginBottom: 2 }}>{cert.organization}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.73rem' }}>{cert.date}</p>
            </div>
          </motion.div>
        ))}

        {/* Add more card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: '#fff', borderRadius: '1.25rem',
            border: '2px dashed #a7f3d0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '2.5rem 1rem', textAlign: 'center', cursor: 'pointer',
            minHeight: 220, transition: 'all 0.3s',
          }}
          whileHover={{ borderColor: '#059669', background: '#f0fdf4' }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: '0.75rem',
            background: '#ecfdf5', border: '2px dashed #6ee7b7',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem',
          }}>
            <Plus size={22} color="#6ee7b7" />
          </div>
          <p style={{ color: '#059669', fontSize: '0.875rem', fontWeight: 600 }}>Add Certification</p>
          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.25rem' }}>Update your credentials</p>
        </motion.div>
      </div>
    </div>
    <style>{`div:hover > .cert-shimmer { transform: translateX(100%) !important; }`}</style>
  </section>
)

export default Certifications
