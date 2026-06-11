import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.4s ease',
          padding: scrolled ? '0.65rem 0' : '1.1rem 0',
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(5,150,105,0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(5,150,105,0.06)' : 'none',
        }}
      >
        <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero" onClick={(e) => handleClick(e, '#hero')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', textDecoration: 'none' }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{
              width: 38, height: 38, borderRadius: '0.65rem',
              background: 'linear-gradient(135deg, #059669, #0d9488)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(5,150,105,0.25)',
            }}>
              <Code2 size={18} color="#fff" />
            </div>
            <span className="font-display" style={{ fontWeight: 800, fontSize: '1.25rem', color: '#1c2b2b', letterSpacing: '-0.02em' }}>
              Srujan<span className="gradient-text">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <motion.a
                key={link.href} href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  position: 'relative', padding: '0.5rem 1rem',
                  fontSize: '0.875rem', fontWeight: 500,
                  color: active === link.href ? '#059669' : '#475569',
                  borderRadius: '0.65rem', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-dot"
                    style={{
                      position: 'absolute', bottom: 3, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 16, height: 2, borderRadius: 2,
                      background: '#059669', display: 'block',
                    }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="#contact" onClick={(e) => handleClick(e, '#contact')}
              style={{
                marginLeft: '0.75rem', padding: '0.65rem 1.4rem',
                fontSize: '0.875rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                color: '#fff', borderRadius: '0.75rem', textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(5,150,105,0.3)',
              }}
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', padding: '0.4rem', borderRadius: '0.5rem',
              color: '#475569', background: 'none', border: 'none', cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
          @media (max-width: 767px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          >
            <div
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: 280,
                background: '#fff', boxShadow: '-8px 0 40px rgba(0,0,0,0.1)',
                display: 'flex', flexDirection: 'column', paddingTop: '5rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href} href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    padding: '0.85rem 1rem', fontSize: '0.95rem', fontWeight: 500,
                    color: '#475569', borderRadius: '0.75rem', textDecoration: 'none',
                    marginBottom: '0.25rem', transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { e.target.style.background = '#f0fdf4'; e.target.style.color = '#059669' }}
                  onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#475569' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact" onClick={(e) => handleClick(e, '#contact')}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                style={{
                  marginTop: '1rem', padding: '0.85rem 1rem', textAlign: 'center',
                  fontSize: '0.95rem', fontWeight: 700,
                  background: 'linear-gradient(135deg,#059669,#0d9488)',
                  color: '#fff', borderRadius: '0.75rem', textDecoration: 'none',
                }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
