import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/achievements'
import { Code2, Layers, Briefcase, Smartphone } from 'lucide-react'

const iconMap = { Code2, Layers, Briefcase, Smartphone }

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const num = parseInt(target.replace('+', ''))

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let cur = 0
    const step = Math.max(1, Math.ceil(num / 60))
    const t = setInterval(() => {
      cur += step
      if (cur >= num) { setCount(num); clearInterval(t) }
      else setCount(cur)
    }, 18)
    return () => clearInterval(t)
  }, [started, num])

  return <span ref={ref}>{count}{target.includes('+') ? '+' : ''}</span>
}

const Achievements = () => (
  <section id="achievements" style={{ background: '#f0fdf4' }} className="section-wrap">
    <div className="site-container">
      <SectionHeading
        label="Achievements" center
        title={<>Key <span className="gradient-text">Milestones</span></>}
        subtitle="Numbers that reflect my dedication, consistency, and growth as a developer."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: '#fff', borderRadius: '1.25rem', padding: '1.75rem',
                border: '1px solid #d1fae5', textAlign: 'center',
                boxShadow: '0 2px 14px rgba(5,150,105,0.07)',
                transition: 'all 0.35s', cursor: 'default',
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: '1rem', margin: '0 auto 1rem',
                background: 'linear-gradient(135deg,#d1fae5,#ccfbf1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={26} color="#059669" />
              </div>
              <p className="gradient-text font-display" style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem' }}>
                <CountUp target={item.number} />
              </p>
              <h4 style={{ fontWeight: 700, color: '#1c2b2b', fontSize: '0.88rem', marginBottom: '0.4rem' }}>{item.label}</h4>
              <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.6 }}>{item.description}</p>
            </motion.div>
          )
        })}
      </div>

      {/* CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #047857 100%)',
          borderRadius: '1.5rem', padding: '3rem 2rem', textAlign: 'center', color: '#fff',
        }}
      >
        <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Ready to Build Something Great?
        </h3>
        <p style={{ color: '#d1fae5', fontSize: '0.95rem', marginBottom: '1.75rem', maxWidth: 500, margin: '0 auto 1.75rem' }}>
          I'm actively looking for Full Stack Developer opportunities. Let's create impactful digital products together.
        </p>
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.9rem 2rem', background: '#fff', color: '#059669',
            fontWeight: 700, fontSize: '0.9rem', borderRadius: '0.875rem',
            textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
          whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
        >
          Get In Touch →
        </motion.a>
      </motion.div>
    </div>
  </section>
)

export default Achievements
