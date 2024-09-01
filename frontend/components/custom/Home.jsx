"use client";
import { faBus, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from "next/link";

const Home = () => {
  return (
    <section className="bg-red-600 text-white py-8">
      <div className="container mx-auto flex flex-row items-center">
        <div className="w-1/2">
          <Image src={busImage} alt="Bus" />
        </div>
        
        <div className='my-8 flex flex-wrap justify-center gap-6'>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <Link
              href="#"
              prefetch={false}
            >
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faBus}
                  className='text-8xl mb-4'
                />
                <p className="mt-4 font-bold text-2xl">BUS</p>
              </div>
            </Link>
          </div>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <Link
              href="/planner"
              prefetch={false}
            >
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className='text-8xl mb-4'
                />
                <p className="mt-4 font-bold text-2xl">Planner</p>
              </div>
            </Link>
          </div>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <Link
              href="/manager"
              prefetch={false}
            >
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className='text-8xl mb-4'
                />
                <p className="mt-4 font-bold text-2xl">Manager</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
