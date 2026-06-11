import { motion } from 'framer-motion'
import { Code2, Mail, Phone, ArrowUp, Heart } from 'lucide-react'
import LinkedinIcon from './LinkedinIcon'
import GithubIcon from './GithubIcon'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { Icon: GithubIcon, href: 'https://github.com/SrujanN', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/in/SrujanN', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:srujan.nagarajb@email.com', label: 'Email' },
]

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

const Footer = () => (
  <footer style={{ background: '#0d1f1a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
    {/* Decorative blobs */}
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: 0, left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,0.18) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: '15%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)' }} />
    </div>

    <div className="site-container" style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '2rem' }}>
      {/* Top grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'linear-gradient(135deg,#059669,#0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={20} color="#fff" />
            </div>
            <span className="font-display" style={{ fontWeight: 800, fontSize: '1.35rem' }}>
              Srujan<span style={{ color: '#34d399' }}>.</span>
            </span>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.75, maxWidth: 260 }}>
            Full Stack Developer specializing in MERN Stack. Building scalable web and mobile applications.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
            {socials.map(({ Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: '0.6rem',
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9ca3af', textDecoration: 'none', transition: 'all 0.2s',
                }}
                whileHover={{ scale: 1.12, y: -2, backgroundColor: 'rgba(5,150,105,0.25)', borderColor: '#059669', color: '#34d399' }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display" style={{ fontWeight: 700, color: '#fff', marginBottom: '1rem', fontSize: '0.95rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#34d399' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#059669', display: 'inline-block', flexShrink: 0 }} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display" style={{ fontWeight: 700, color: '#fff', marginBottom: '1rem', fontSize: '0.95rem' }}>Get In Touch</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { Icon: Mail, href: 'mailto:srujan.nagarajb@email.com', value: 'srujan.nagarajb@email.com' },
              { Icon: Phone, href: 'tel:+91XXXXXXXXXX', value: '+91 8431635148' },
              { Icon: LinkedinIcon, href: 'https://linkedin.com/in/SrujanN', value: 'linkedin.com/in/SrujanN' },
            ].map(({ Icon, href, value }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#34d399' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
              >
                <Icon size={14} /> {value}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#6b7280', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          © 2026 Srujan N. Crafted with <Heart size={13} color="#34d399" fill="#34d399" style={{ margin: '0 1px' }} /> and clean code.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: '#34d399', fontSize: '0.82rem', fontWeight: 700,
            background: 'none', border: 'none', cursor: 'pointer',
          }}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
        >
          Back to Top
          <div style={{ width: 28, height: 28, borderRadius: '0.5rem', background: 'rgba(5,150,105,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowUp size={14} />
          </div>
        </motion.button>
      </div>
    </div>
  </footer>
)

export default Footer
