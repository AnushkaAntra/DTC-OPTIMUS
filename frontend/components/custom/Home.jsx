"use client";
import Image from 'next/image';
import { faBus, faUser, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section>
      <div className='bg-primary'>
        <div className='flex flex-row bg-secondary p-4 gap-4'>
          <div className='w-2/3'>
            <h1 className='text-4xl font-bold p-4'>DTC-OPTIMUS</h1>
            <h3 className='text-3xl font-bold px-4'>An Automated Bus Scheduling and Route Management System</h3>
            <p className='p-4'>
              Our application is a comprehensive software solution designed to
              automate various aspects of bus scheduling and route management for
              the Delhi Transport Corporation (DTC). The system utilizes advanced
              algorithms, data analytics, and Geographic Information System (GIS)
              technologies to optimize operations, reduce errors, and enhance
              service reliability. The system will offer a user-friendly interface
              for schedulers, planners, and managers to interact with the system,
              manage schedules, plan routes, and access real-time data and
              reports.
            </p>
          </div>
          <div>
            <Image src="/bus-pic.png" width={500} height={500} alt="Bus image" />
          </div>
        </div>
        
        <div className='my-8 flex flex-wrap justify-center gap-6'>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faBus}
                className='text-8xl mb-4'
              />
              <p className="mt-4 font-bold text-2xl">BUS</p>
            </div>
          </div>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className='text-8xl mb-4'
              />
              <p className="mt-4 font-bold text-2xl">CREW</p>
            </div>
          </div>
          <div className="bg-[#F29680] p-6 rounded-lg shadow-lg max-w-sm mx-auto h-max">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faUser}
                className='text-8xl mb-4'
              />
              <p className="mt-4 font-bold text-2xl">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
