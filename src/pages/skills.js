import reactLogo from '../../public/images/reactLogo.png';
import nodeLogo from '../../public/images/nodeLogo.png';
import nextLogo from '../../public/images/nextLogo.png';
import laravelLogo from '../../public/images/laravelLogo.png';
import vueLogo from '../../public/images/vueLogo.png';
import jsLogo from '../../public/images/jsLogo.png';
import awsLogo from '../../public/images/awsLogo.png';
import mysqlLogo from '../../public/images/mysqlLogo.png';
import phpLogo from '../../public/images/phpLogo.png';
import htmlLogo from '../../public/images/htmlLogo.png';
import cssLogo from '../../public/images/cssLogo.png';
import gitLogo from '../../public/images/gitLogo.png';
import bootstrapLogo from '../../public/images/bootstrapLogo.png';
import tailwindLogo from '../../public/images/tailwindLogo.png';
import Image from 'next/image';

export default function Skills() {
  return (
    <>
      <section className="container max-w-4xl mx-auto text-xl font-semibold text-gray-700 mt-12 dark:text-slate-200" id="skills">
        <span className=" text-teal-600">02 </span>
        Skills
        <hr />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 font-normal text-base text-gray-700 pt-10 pb-2 skill dark:bg-slate-100 dark:rounded-es-lg dark:rounded-ee-lg">
          <div className="flex justify-center items-center mb-8">
            <Image src={reactLogo} className="skill-logo" title="React.js" alt="React.js" />
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={nodeLogo} className="skill-logo" title="Node.js" alt="Node.js"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={nextLogo} className="skill-logo" title="Next.js" alt="Next.js"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={vueLogo} className="skill-logo" title="Vue.js" alt="Vue .js"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={jsLogo} className="skill-logo" title="JavaScript" alt="JavaScript"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={phpLogo} className="skill-logo" title="PHP" alt="PHP"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={laravelLogo} className="skill-logo" title="Laravel" alt="Laravel"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={awsLogo} className="skill-logo" title="AWS" alt="AWS"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={mysqlLogo} className="skill-logo" title="MySQL" alt="MySQL"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={htmlLogo} className="skill-logo" title="HTML5" alt="HTML5"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={cssLogo} className="skill-logo" title="CSS" alt="CSS"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={gitLogo} className="skill-logo" title="GIT" alt="GIT"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={bootstrapLogo} className="skill-logo" title="Bootstrap" alt="Bootstrap"/>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image src={tailwindLogo} className="skill-logo" title="Tailwind CSS" alt="Tailwind CSS"/>
          </div>
        </div>
      </section>
    </>
  )
}