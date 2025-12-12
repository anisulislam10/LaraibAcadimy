import { cn } from '../utils/cn'

const variantClasses = {
  primary:
    'bg-linear-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-100',
  outline:
    'border-2 border-purple-400/50 text-purple-200 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/15 hover:border-purple-400 hover:text-white',
  ghost: 'text-purple-200 hover:text-white hover:bg-white/5 border border-transparent',
}

function Button({ children, className = '', variant = 'primary', as: Component = 'button', ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

