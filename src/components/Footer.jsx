import { Link } from 'react-router-dom'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjaminhislop/' },
  { label: 'GitHub', href: 'https://github.com/Bphissles' },
  { label: 'Contact', href: '/contact', internal: true },
  { label: 'Resume', href: '/resume.pdf' },
]

function Footer() {

  return (
    <footer className="bg-black py-6 px-6 md:py-8 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-cream font-bold italic tracking-wide text-sm md:text-base">
          &copy; {new Date().getFullYear()} Ben Hislop
        </span>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              {link.internal ? (
                <Link
                  to={link.href}
                  className="btn btn-ghost text-cream border-0! px-0! py-0! hover:text-teal!"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-cream border-0! px-0! py-0! hover:text-teal!"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
