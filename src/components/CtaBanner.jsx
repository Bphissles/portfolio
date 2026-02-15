import { Link } from 'react-router-dom'

function CtaBanner({ heading, description, buttonText, buttonTo, color = 'teal' }) {
  return (
    <div className="mt-12 md:mt-16 py-8 md:py-10 px-6 md:px-10 bg-black/5 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="text-lg md:text-xl font-bold text-black italic">{heading}</p>
        {description && <p className="text-black/70 mt-1">{description}</p>}
      </div>
      <Link to={buttonTo} className={`btn btn-${color} text-sm shrink-0 self-start sm:self-auto`}>
        {buttonText}
      </Link>
    </div>
  )
}

export default CtaBanner
