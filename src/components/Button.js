export default function Button({ title, link }) {
  return (
    <>
      <a href={link ? link : '#!'} target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-base px-4 py-2 border-none rounded-md mx-2">
        {title}
      </a>
    </>
  )
}