
// import Link from "next/link"
// import { JSX, SVGProps } from "react"
// // import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-14 items-center">
//           <Link href="#" className="flex items-center" prefetch={false}>
//             <MountainIcon className="h-6 w-6" />
//             <span className="sr-only">DTC-Optimus</span>
//           </Link>
//           <nav className="hidden md:flex gap-4">
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               About
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Services
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }
import type { NextPage } from "next";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbar1} />
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div className={styles.userOptions}>
        <div className={styles.authButtons}>
          <a className={styles.signinSignup}>SignIn / SignUp</a>
        </div>
        <img
          className={styles.doNotDisturbIos}
          loading="lazy"
          alt=""
          src="/do-not-disturb-ios@2x.png"
        />
        <div className={styles.mapMarkerWrapper}>
          <img
            className={styles.mapMarkerIcon}
            loading="lazy"
            alt=""
            src="/map-marker@2x.png"
          />
        </div>
        <div className={styles.managementWrapper}>
          <img
            className={styles.managementIcon}
            loading="lazy"
            alt=""
            src="/management@2x.png"
          />
        </div>
        <div className={styles.controlPanelWrapper}>
          <img
            className={styles.controlPanelIcon}
            loading="lazy"
            alt=""
            src="/control-panel@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
