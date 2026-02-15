import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Projects', to: '/projects' },
    { label: 'Work', to: '/work' },
    { label: 'Education', to: '/education' },
    { label: 'About', to: '/about' },
    { label: 'Letters', to: '/recommendations' },
  ]

  return (
    <nav className="bg-black py-4 px-6 md:py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-cream font-bold italic text-xl tracking-wide">
          BEN HISLOP
        </Link>

        <button
          className="md:hidden text-cream text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="btn btn-ghost border-0! px-0! py-0! text-cream hover:text-teal!"
                  style={isActive ? { color: 'var(--color-teal)' } : undefined}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-cream/20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="btn btn-ghost border-0! px-0! py-0! text-cream hover:text-teal! text-lg"
                  style={isActive ? { color: 'var(--color-teal)' } : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default Navigation