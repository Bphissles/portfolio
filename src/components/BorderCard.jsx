function BorderCard({ color = 'teal', children }) {
  const colorMap = {
    teal: 'border-teal',
    coral: 'border-coral',
    black: 'border-black',
  }

  return (
    <div className={`border-l-4 ${colorMap[color]} pl-4 md:pl-6`}>
      {children}
    </div>
  )
}

export default BorderCard
