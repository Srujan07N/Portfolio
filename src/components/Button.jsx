import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  className = '',
  icon,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer'

  const variants = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-transparent text-emerald-700 hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </motion.button>
  )
}

export default Button
