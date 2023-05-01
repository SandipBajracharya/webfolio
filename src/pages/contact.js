import {  FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Button from '@/components/Button';

export default function Contact() {
  return (
    <>
      <section className="container max-w-4xl mx-auto text-xl font-semibold text-gray-700 mt-12" id="contact">
        <span className=" text-teal-600">04 </span>
        Contact
        <hr />
        <div className="py-10">
          <div className=" text-3xl text-teal-600 font-semibold pb-6 text-center">
            Let&apos;s stay in touch!
          </div>
          <div className="container mx-auto py-6">
            <div className="pb-9 flex justify-center">
              <a href="https://www.linkedin.com/in/sandeep-bajracharya-242352194/" target="_blank" className="mr-12 text-neutral-800 dark:text-neutral-200">
                <FaLinkedin className="text-2xl"/>
              </a>
              <a href="https://github.com/SandipBajracharya" target="_blank" className="mr-12 text-neutral-800 dark:text-neutral-200">
                <FaGithub className="text-2xl"/>
              </a>
              <a href="mailto:sndp106.sb@gmail.com" className=" text-neutral-800 dark:text-neutral-200">
                <SiGmail className="text-2xl"/>
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <Button title="Download Resume" link="api/resumeDownload" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}