const Navbar = () => {
  return (
    <header className='flex justify-between items-center w-4/5  bg-white shadow-md py-3 px-4 lg:px-8 rounded-3xl sticky top-2'>

      <div className='flex gap-3 items-center justify-center'>
        <img className='w-10 h-10' src='/logo.svg' alt='' />
        <h3 className='text-xl text-gray-800 font-bold font-text'>Vansh Gupta</h3>
      </div>

      <ul className='hidden lg:flex gap-7 font-text items-center text-gray-600 list-none'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>DSA</li>
      </ul>

      <div className='flex gap-2 items-center'>
        <button className='bg-transparent rounded-full px-4 py-2 text-gray-900  border border-gray-300'>Resume</button>
        <button className='bg-black rounded-full px-4 py-2 text-white border border-black'>Contact Me</button>
      </div>

    </header>
  )
}

export default Navbar