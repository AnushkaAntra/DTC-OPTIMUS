
import "@/components/styles/output.css";
import Image from 'next/image';
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-[#1a1a1a] shadow-smt text-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Image src="/dtc-optimus-logo.jpg" width={50} height={50} alt="Bus image" />
          <nav className="hidden md:flex gap-4">
            <Link
              href="/manager"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Manager
            </Link>
            <Link
              href="/planner"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Planner
            </Link>
            <Link
              href="/crew-details"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Crew
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
