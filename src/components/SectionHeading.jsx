import { motion } from 'framer-motion'

const SectionHeading = ({ label, title, subtitle, center = false }) => (
  <div style={{ marginBottom: '3rem', textAlign: center ? 'center' : 'left' }}>
    <motion.span
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4 }}
      style={{
        display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#059669', background: '#ecfdf5',
        border: '1px solid #a7f3d0',
        padding: '0.3rem 0.85rem', borderRadius: 999, marginBottom: '0.9rem',
      }}
    >
      {label}
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
      className="font-display"
      style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1c2b2b', lineHeight: 1.15 }}
    >
      {title}
    </motion.h2>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          marginTop: '0.85rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.75,
          maxWidth: 580, ...(center ? { margin: '0.85rem auto 0' } : {}),
        }}
      >
        {subtitle}
      </motion.p>
    )}

    <motion.div
      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        marginTop: '1.1rem', height: 4, width: 56, borderRadius: 999,
        background: 'linear-gradient(90deg,#059669,#0d9488)',
        ...(center ? { margin: '1.1rem auto 0' } : {}),
        transformOrigin: 'left',
      }}
    />
  </div>
)

export default SectionHeading
