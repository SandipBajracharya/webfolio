export default function Button({ title, link, download }) {
  return (
    <>
      <a href={link ? link : '#!'} target="_blank" className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-base px-4 py-2 border-none rounded-md mx-2" download={download ? true : false}>
        {title}
      </a>
    </>
  )
}