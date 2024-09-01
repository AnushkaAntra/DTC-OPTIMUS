"use client";
import React from "react";
import Image from 'next/image';
import busImage from '@/public/images/bus-pic.png'; // Adjust the path as necessary

const Home = () => {
  return (
    <section className="bg-red-600 text-white py-8">
      <div className="container mx-auto flex flex-row items-center">
        <div className="w-1/2">
          <Image src={busImage} alt="Bus" />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-4xl font-bold mb-4">DTC-OPTIMUS</h1>
          <h3 className="text-2xl font-semibold mb-4">An Automated Bus Scheduling and Route Management System</h3>
          <p className="text-lg leading-relaxed">
            Our application is a comprehensive software solution designed to
            automate various aspects of bus scheduling and route management for
            the Delhi Transport Corporation (DTC). The system utilizes advanced
            algorithms, data analytics, and Geographic Information System (GIS)
            technologies to optimize operations, reduce errors, and enhance
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
