import * as layoutHelper from '@/helpers/layoutHelper';
// import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import profilePic from '../../public/images/newProfilePic.jpg'; 
import About from './about';
import Experience from './experience';
import Contact from './contact';
import Skills from './skills';
import { FaRegGrinTongueWink } from 'react-icons/fa';

import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <section className=" flex justify-center items-center min-h-screen">
        <div className="text-center sm:text-4xl text-2xl font-semibold mx-auto">
          <div className=" text-gray-700">
            Hi! my name is Sandeep Bajracharya.
          </div>
          <div className="mt-4 text-teal-600">
            I&apos;m a Software Engineer.
          </div>
          <div className="mx-auto rounded-full sm:w-60 sm:h-60 w-40 h-40 relative overflow-hidden my-8">
            <Image src={profilePic} layout="fill" objectFit="cover" alt="Profile picture" />
          </div>
          <div className="mx-auto text-lg font-normal text-gray-500 mb-4 max-w-xl">
            <div className="flex justify-center items-center">
              &quot;It works on my machine!!&quot;
              <FaRegGrinTongueWink className="ml-1"/>
            </div>
          </div>
          <div>
            <Button title="Let's Connect" link="https://www.linkedin.com/in/sandeep-bajracharya-242352194/" />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

Home.getLayout = layoutHelper.mainLayoutHelper();
