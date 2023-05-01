import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Button from './Button';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 px-8 py-5 flex justify-between items-center bg-white ">
        <span className="text-2xl font-burtons">
          SB
        </span>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true" onClick={() => setToggle(!toggle)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <ul className="hidden md:flex md:items-center text-gray-700 font-medium">
          <li className="mr-6">
            <span className=" text-teal-600 font-semibold">01.</span>
            <a className=" hover:underline decoration-gray-400" href="#about"> About</a>
          </li>
          <li className="mr-6">
            <span className=" text-teal-600 font-semibold">02.</span>
            <a className="hover:underline decoration-gray-400" href="#skills"> Skills</a>
          </li>
          <li className="mr-6">
            <span className=" text-teal-600 font-semibold">03.</span>
            <a className="hover:underline decoration-gray-400" href="#experience"> Experience</a>
          </li>
          <li className="mr-6">
            <span className=" text-teal-600 font-semibold">04.</span>
            <a className="hover:underline decoration-gray-400" href="#contact"> Contact</a>
          </li>
          <li>
            <Button title="Resume" link="files/Sandeep_Bajracharya_CV.pdf" download={true}/>
          </li>
          {/* <li>
            <button>
              <BsFillMoonStarsFill 
                className=" text-xl ml-5"
              />
            </button>
          </li> */}
        </ul>

        <div className={toggle ? "md:hidden w-full sm:block md:w-auto absolute top-14 right-0" : "hidden"} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 bg-white dark:bg-gray-800 shadow-sm dark:border-gray-700">
            <li>
              <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 hover:underline decoration-teal-600 rounded dark:bg-blue-600 md:dark:bg-transparent" onClick={() => setToggle(false)}>
                <span className=" text-teal-600 font-semibold mr-2">01.</span>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-900 hover:underline decoration-teal-600 rounded dark:bg-blue-600 md:dark:bg-transparent" onClick={() => setToggle(false)}>
                <span className=" text-teal-600 font-semibold mr-2">02.</span>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 pl-3 pr-4 text-gray-900 hover:underline decoration-teal-600 rounded dark:bg-blue-600 md:dark:bg-transparent" onClick={() => setToggle(false)}>
                <span className=" text-teal-600 font-semibold mr-2">03.</span>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 hover:underline decoration-teal-600 rounded dark:bg-blue-600 md:dark:bg-transparent" onClick={() => setToggle(false)}>
                <span className=" text-teal-600 font-semibold mr-2">04.</span>
                Contact
              </a>
            </li>
            <li>
              <Button title="Resume" link="files/Sandeep_Bajracharya_CV.pdf" download={true} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;