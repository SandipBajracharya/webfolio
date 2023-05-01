import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral-200 text-center text-gray-500 dark:bg-neutral-600">
        <div className="ltr:ml-3 rtl:mr-3 py-4">
          <div className="flex justify-center items-center">
            <AiOutlineCopyrightCircle className="mr-1" /> 2023 Sandeep Bajracharya. <span className="hidden sm:block ml-1"> All rights reserved.</span> 
          </div>
          <div className="sm:hidden">All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
