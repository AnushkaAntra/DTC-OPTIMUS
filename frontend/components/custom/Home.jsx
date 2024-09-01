"use client";
import React from "react";
import Image from 'next/image';

const Home = () => {
  return (
    <section>
      <div className="border flex flex-row">
        <div>
          <h1>DTC-OPTIMUS</h1>
          <h3>An Automated Bus Scheduling and Route Management System</h3>
          <p>
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
          <Image src="  /assests/Logo.jpg" width={500} height={500} alt={""} />
        </div>
      </div>
    </section>
  );
};

export default Home;
