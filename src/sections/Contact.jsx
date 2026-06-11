import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionHeading from '../components/SectionHeading'
import { Mail, Phone, Globe, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'
import LinkedinIcon from '../components/LinkedinIcon'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'srujan.nagarajb@email.com', href: 'mailto:srujan.nagarajb@email.com', color: '#d1fae5', accent: '#059669' },
  { icon: Phone, label: 'Phone', value: '+91 8431635148', href: 'tel:+91XXXXXXXXXX', color: '#ccfbf1', accent: '#0d9488' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/SrujanN', href: 'https://linkedin.com/in/SrujanN', color: '#d1fae5', accent: '#059669' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/SrujanN', href: 'https://github.com/SrujanN', color: '#ccfbf1', accent: '#0d9488' },
  { icon: Globe, label: 'Portfolio', value: 'srujan.dev', href: '#', color: '#d1fae5', accent: '#059669' },
  { icon: MapPin, label: 'Location', value: 'Mangalore, Karnataka, India', href: null, color: '#ccfbf1', accent: '#0d9488' },
]

const inputStyle = {
  width: '100%', padding: '0.85rem 1rem',
  border: '1.5px solid #d1fae5', borderRadius: '0.75rem',
  fontSize: '0.9rem', color: '#1c2b2b', background: '#fff',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
}

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState('')

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const focusStyle = { borderColor: '#059669', boxShadow: '0 0 0 3px rgba(5,150,105,0.12)' }

  return (
    <section id="contact" style={{ background: '#fff' }} className="section-wrap">
      <div className="site-container">
        <SectionHeading
          label="Contact" center
          title={<>Let's <span className="gradient-text">Connect</span></>}
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', maxWidth: 1000, margin: '0 auto' }} className="contact-grid">

          {/* LEFT — Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1c2b2b', marginBottom: '1.5rem' }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactInfo.map((info) => (
                <motion.div key={info.label} whileHover={{ x: 5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '0.75rem',
                    background: info.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <info.icon size={19} color={info.accent} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1c2b2b', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.target.style.color = '#059669'}
                        onMouseLeave={(e) => e.target.style.color = '#1c2b2b'}
                      >{info.value}</a>
                    ) : (
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1c2b2b' }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Available badge */}
            <div style={{
              background: 'linear-gradient(135deg,#f0fdf4,#f0fdfa)',
              border: '1px solid #a7f3d0', borderRadius: '1rem', padding: '1.25rem 1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="pulse-glow" style={{ width: 10, height: 10, borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
                <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.9rem' }}>Available for Opportunities</span>
              </div>
              <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.7 }}>
                Open to full-time positions and freelance projects. Response time within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[{ id: 'contact-name', name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                { id: 'contact-email', name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' }
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>{f.label} *</label>
                    <input id={f.id} type={f.type} name={f.name} value={formData[f.name]} onChange={handleChange} required placeholder={f.placeholder}
                      style={{ ...inputStyle, ...(focused === f.name ? focusStyle : {}) }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused('')} />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>Subject *</label>
                <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  placeholder="Job Opportunity / Project Collaboration"
                  style={{ ...inputStyle, ...(focused === 'subject' ? focusStyle : {}) }}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused('')} />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>Message *</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: 'none', ...(focused === 'message' ? focusStyle : {}) }}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 1rem', background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '0.75rem', color: '#059669', fontSize: '0.875rem', fontWeight: 600 }}>
                  <CheckCircle size={17} /> Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 1rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.75rem', color: '#dc2626', fontSize: '0.875rem', fontWeight: 600 }}>
                  <AlertCircle size={17} /> Something went wrong. Please email me directly.
                </motion.div>
              )}

              <motion.button type="submit" disabled={status === 'loading'}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg,#059669,#0d9488)', color: '#fff',
                  fontWeight: 700, fontSize: '0.95rem', borderRadius: '0.875rem', border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 20px rgba(5,150,105,0.3)', opacity: status === 'loading' ? 0.75 : 1,
                  fontFamily: 'inherit',
                }}
                whileHover={status !== 'loading' ? { scale: 1.02, y: -1 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
              >
                {status === 'loading'
                  ? <><div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                  : <><Send size={17} /> Send Message</>
                }
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

export default Contact
