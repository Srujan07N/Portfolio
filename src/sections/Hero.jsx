import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, ArrowDown, MapPin } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'
import LinkedinIcon from '../components/LinkedinIcon'

const Hero = () => {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', background: '#ffffff', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}
    >
      {/* ── Animated background blobs ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute', top: '-8rem', right: '-8rem',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(5,150,105,0.09) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute', bottom: '-6rem', left: '-6rem',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* ── Main content ── */}
      <div className="site-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div className="hero-layout">

          {/* LEFT — Text */}
          <div style={{ maxWidth: 580 }}>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#ecfdf5', border: '1px solid #a7f3d0',
                color: '#065f46', fontSize: '0.72rem', fontWeight: 600,
                padding: '0.35rem 0.85rem', borderRadius: '999px', marginBottom: '1.5rem',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#059669', display: 'inline-block' }} className="pulse-glow" />
              Available for Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, color: '#1c2b2b', lineHeight: 1.05, marginBottom: '1rem' }}
            >
              Srujan <span className="gradient-text">N</span>
            </motion.h1>

            {/* Role typed animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#475569', marginBottom: '1.5rem', minHeight: '2.2rem' }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2200,
                  'MERN Stack Developer', 2200,
                  'React.js Developer',   2200,
                  'Node.js Developer',    2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '0.5rem', maxWidth: 480 }}
            >
              Building scalable web and mobile applications with modern technologies.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '2rem' }}
            >
              <MapPin size={14} color="#059669" />
              Mangalore, Karnataka, India
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}
            >
              <motion.a
                href="/MyResume.pdf" download="Srujan_N_Resume.pdf"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem',
                  background: 'linear-gradient(135deg, #059669, #0d9488)',
                  color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                  borderRadius: '0.875rem', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(5,150,105,0.3)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              >
                <Download size={17} /> Download Resume
              </motion.a>
              <motion.a
                href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem',
                  background: '#fff', color: '#059669', fontWeight: 700, fontSize: '0.9rem',
                  borderRadius: '0.875rem', border: '2px solid #059669', cursor: 'pointer',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.04, y: -2, background: '#f0fdf4' }} whileTap={{ scale: 0.97 }}
              >
                <Mail size={17} /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Find me on</span>
              {[
                { Icon: GithubIcon, href: 'https://github.com/SrujanN',        label: 'GitHub' },
                { Icon: LinkedinIcon, href: 'https://linkedin.com/in/SrujanN', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: '0.65rem',
                    border: '1.5px solid #a7f3d0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#64748b', textDecoration: 'none',
                  }}
                  whileHover={{ scale: 1.12, rotate: 5, borderColor: '#059669', color: '#059669' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile image */}
          <div className="hero-image-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              style={{ position: 'relative' }}
            >
              {/* Rotating ring */}
              <motion.div
                style={{
                  position: 'absolute', inset: -18, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #a7f3d0, #99f6e4, #a7f3d0)',
                  opacity: 0.5,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px dashed rgba(5,150,105,0.3)' }} />

              {/* Profile circle */}
              <motion.div
                style={{
                  width: 240, height: 240,
                  borderRadius: '50%',
                  border: '4px solid #fff',
                  boxShadow: '0 20px 60px rgba(5,150,105,0.2)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ecfdf5, #ccfbf1)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{
                  width: 96, height: 96, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #059669, #0d9488)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 10, boxShadow: '0 8px 24px rgba(5,150,105,0.4)',
                }}>
                  <span className="font-display" style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>SN</span>
                </div>
                <span style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 600 }}>Profile Photo</span>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                style={{
                  position: 'absolute', top: -12, right: -20,
                  background: '#fff', borderRadius: '0.875rem',
                  padding: '0.5rem 0.85rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #d1fae5', display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}
                animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }}
              >
                <span style={{ fontSize: '1.1rem' }}>🚀</span>
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1c2b2b', lineHeight: 1.2 }}>Full Stack</p>
                  <p style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 600 }}>Developer</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                style={{
                  position: 'absolute', bottom: -12, left: -20,
                  background: '#fff', borderRadius: '0.875rem',
                  padding: '0.5rem 0.85rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #d1fae5', display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}
                animate={{ y: [4, -4, 4] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <span style={{ fontSize: '1.1rem' }}>⚡</span>
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1c2b2b', lineHeight: 1.2 }}>MERN Stack</p>
                  <p style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 600 }}>Expert</p>
                </div>
              </motion.div>

              {/* Floating chip — right center */}
              <motion.div
                style={{
                  position: 'absolute', top: '50%', right: -36,
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(135deg,#059669,#0d9488)',
                  color: '#fff', borderRadius: '0.65rem',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.7rem', fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(5,150,105,0.35)',
                  whiteSpace: 'nowrap',
                }}
                animate={{ x: [-3, 3, -3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                20+ Projects
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('#about')}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
            marginTop: '3.5rem', cursor: 'pointer', background: 'none', border: 'none',
          }}
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span style={{ color: '#94a3b8', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <ArrowDown size={16} color="#059669" />
        </motion.button>
      </div>

      <style>{`
        .hero-layout {
          display: flex;
          flex-direction: column-reverse;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .hero-layout {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .hero-image-container {
            flex-shrink: 0;
            padding-left: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-layout {
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
