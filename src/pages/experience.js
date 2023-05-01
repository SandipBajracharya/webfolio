import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import litg from '../../public/images/litg.png';
import ctslogo from '../../public/images/ctslogo.svg';

export default function Experience() {
  return (
    <>
      <section className="container max-w-4xl mx-auto text-xl font-semibold text-gray-700 mt-12" id="experience">
        <span className=" text-teal-600">03 </span>
        Experience
        <hr />
        <div className="text-lg text-gray-500 font-normal py-10">
          <table className="mb-4">
            <tbody>
              {/* cloudtechservice */}
              <tr className="flex items-center mb-3">
                <td className="mr-8 hidden sm:block">
                  <span>
                    <Image src={ctslogo} className="logos" alt="CTS logo" />
                  </span>
                </td>
                <td className="text-gray-700 font-semibold">
                  CloudTech Services
                </td>
              </tr>
              <tr className="flex items-center mb-2">
                <td className="hidden sm:flex justify-center self-start mr-8">
                  <BsDot className=" text-2xl text-gray-600" />
                </td>
                <td className="xs:pl-4">
                  <div className="text-gray-700 font-normal">
                    Software Engineer
                  </div>
                  <div className="text-base font-normal">
                    Full-time
                  </div>
                  <div className="text-sm font-light">
                    From May 2022 to Present
                  </div>
                </td>
              </tr>
              <tr className="flex items-center mb-2">
                <td className="hidden sm:flex justify-center self-start mr-8">
                  <BsDot className=" text-2xl text-gray-600" />
                </td>
                <td>
                  <div className="text-gray-700 font-normal">
                    Associate Software Engineer
                  </div>
                  <div className="text-base font-normal">
                    Full-time
                  </div>
                  <div className="text-sm font-light">
                    From July 2021 to May 2022
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          {/* cloudtechservice */}
          <table className="mt-4">
            <tbody>
              <tr className="flex items-center">
                <td className="mr-8 hidden sm:block">
                  <span className="flex justify-center">
                    <Image src={litg} className="logos" alt="Let IT Grow Logo"/>
                  </span>
                </td>
                <td className="text-gray-700 font-semibold">
                  Junior Software Developer
                </td>
              </tr>
              <tr className="flex items-center mb-2 ">
                <td className="mr-8 hidden sm:block">
                </td>
                <td>
                  <div className="text-gray-700 font-normal">
                    Let IT Grow <span className="text-gray-500 text-sm font-normal">(Full-time)</span>
                  </div>
                  <div className="text-sm font-light">
                    From August 2020 to July 2021
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}