import Image from 'next/image';
import mapImage from '@/public/images/map.png';

const Footer = () => {
    return (
        <>
        <div className="pt-4">
            <Image src={mapImage} alt="Map" />
            <div className="text-center my-12"> {/* Increased margin here */}
                <h2 className="text-3xl font-bold">Features Provided</h2>
                <hr className="my-2" />
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3 p-6 border rounded-lg shadow-md m-2 bg-yellow-100">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Duty Scheduling</h3>
                    <p className="leading-relaxed text-lg text-gray-700"><strong>Linked Duty Scheduling:</strong> Assign crews to specific buses for their entire shifts.</p>
                    <p className="leading-relaxed text-lg text-gray-700"><strong>Unlinked Duty Scheduling:</strong> Allow crews to switch buses between trips and manage rest periods.</p>
                </div>
                <div className="w-1/3 p-6 border rounded-lg shadow-md m-2 bg-yellow-100">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Route Management</h3>
                    <p className="leading-relaxed text-lg text-gray-700">Map existing routes, and optimize for congestion and coverage.</p>
                </div>
                <div className="w-1/3 p-6 border rounded-lg shadow-md m-2 bg-yellow-100">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Optimized Routes</h3>
                    <p className="leading-relaxed text-lg text-gray-700">GIS mapping and route planning.</p>
                </div>
            </div>
            <footer className="bg-red-600 text-white py-8 mt-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    <p className="text-lg">1234 Street Name, City, State, 12345</p>
                    <p className="text-lg">Email: <a href="mailto:info@yourcompany.com" className="underline">info@yourcompany.com</a> | Phone: <a href="tel:+1234567890" className="underline">(123) 456-7890</a></p>
                    <div className="mt-4">
                        <a href="#" className="mx-2 text-2xl"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="mx-2 text-2xl"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="mx-2 text-2xl"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="mx-2 text-2xl"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
        </>
     );
}
 
export default Footer;