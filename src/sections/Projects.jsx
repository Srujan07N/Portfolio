import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      style={{
        background: '#fff', borderRadius: '1.5rem',
        border: '1px solid #d1fae5', overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(5,150,105,0.07)',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.4s',
      }}
    >
      {/* Gradient image header */}
      <div style={{
        height: 180, position: 'relative', overflow: 'hidden',
        background: project.id === 1
          ? 'linear-gradient(135deg, #059669, #0d9488)'
          : 'linear-gradient(135deg, #0d9488, #059669)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.15,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        <div style={{ textAlign: 'center', color: '#fff', position: 'relative', zIndex: 1 }}>
          <Layers size={44} style={{ margin: '0 auto 8px', opacity: 0.9 }} />
          <p style={{ fontWeight: 700, fontSize: '0.9rem', opacity: 0.9 }}>{project.title}</p>
        </div>

        {/* Hover overlay */}
        <div className="card-overlay" style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
          opacity: 0, transition: 'opacity 0.3s',
        }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{
              width: 44, height: 44, background: '#fff', borderRadius: '0.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c2b2b',
              textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
            <GithubIcon size={19} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{
              width: 44, height: 44, background: '#fff', borderRadius: '0.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c2b2b',
              textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
            <ExternalLink size={19} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1c2b2b', marginBottom: 2 }}>{project.title}</h3>
        <p style={{ color: '#059669', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.subtitle}</p>
        <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem' }}>{project.description}</p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '0.28rem 0.65rem', background: '#ecfdf5',
              border: '1px solid #a7f3d0', color: '#059669',
              fontSize: '0.72rem', fontWeight: 600, borderRadius: '0.45rem',
            }}>{t}</span>
          ))}
        </div>

        {/* Achievement */}
        <div style={{
          background: 'linear-gradient(135deg,#f0fdf4,#f0fdfa)',
          border: '1px solid #a7f3d0', borderRadius: '0.75rem',
          padding: '0.65rem 0.85rem', marginBottom: '0.85rem',
        }}>
          <p style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>⚡ {project.achievement}</p>
        </div>

        {/* Expandable features */}
        <button onClick={() => setExpanded(!expanded)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.82rem', fontWeight: 700, color: '#059669',
            background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 0.5rem',
          }}>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Hide' : 'Show'} Key Features
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', marginBottom: '0.75rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', paddingBottom: '0.5rem' }}>
                {project.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#475569' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.7rem', border: '2px solid #059669', color: '#059669',
              fontSize: '0.82rem', fontWeight: 700, borderRadius: '0.75rem',
              textDecoration: 'none', transition: 'background 0.2s',
            }}>
            <GithubIcon size={15} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.7rem',
              background: 'linear-gradient(135deg,#059669,#0d9488)', color: '#fff',
              fontSize: '0.82rem', fontWeight: 700, borderRadius: '0.75rem',
              textDecoration: 'none', boxShadow: '0 3px 12px rgba(5,150,105,0.25)',
            }}>
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>

      <style>{`.card-overlay { opacity: 0; }
        div:hover > .card-overlay { opacity: 1 !important; }`}</style>
    </motion.div>
  )
}

const Projects = () => (
  <section id="projects" style={{ background: '#fff' }} className="section-wrap">
    <div className="site-container">
      <SectionHeading
        label="Portfolio" center
        title={<>Featured <span className="gradient-text">Projects</span></>}
        subtitle="Production-grade applications built with the MERN stack, featuring authentication, role-based access, and real-world functionality."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
        {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
    </div>
  </section>
)

export default Projects
