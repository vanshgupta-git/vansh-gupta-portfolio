import Button from "../ui/Button";

const Navbar = () => {


  // 2. Define the click handler to toggle the state
  const resume = () => {
    window.location.href = 'https://drive.google.com/file/d/1GFWxi6btyMEXcnGvyPeneTrK4seHi0u3/view?usp=sharing';
  };

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
        <Button
         title="Resume" 
         className="text-black px-4 py-2" 
         onClick={resume}
          />
        <button
         className='bg-black rounded-full px-4 py-2 text-white border border-black cursor-pointer'>Contact Me</button>
      </div>

    </header>
  )
}

export default Navbar