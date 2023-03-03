import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo-white.png";
import { useState } from "react";
import { AiOutlineHome,AiOutlineForm,AiOutlineCloudDownload,AiOutlineQuestionCircle,AiOutlineSafetyCertificate,AiOutlineLogin } from 'react-icons/ai'


export default function Navbar() {

   const [show, setShow] = useState(false);
/* 
    const Menus = [
        { name: "", url: "/", icon: <AiOutlineHome /> },
        { name: "Registrate", url: "/register", icon: <AiOutlineForm /> },
        { name: "Descargas", url: "/downloads", icon: <AiOutlineCloudDownload /> },
        { name: "Información", url: "/information", icon: <AiOutlineQuestionCircle /> },
        { name: "Ranking", url: "/ranking", icon: <AiOutlineSafetyCertificate /> },
        { name: "Login", url: "/login", icon: <AiOutlineLogin /> },
    ];
*/    

    return (
        <nav className="bg-black/50 fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => {
                  setShow(!show);
                }}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
  
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
  
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
  
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    className="h-auto w-auto"
                    src={logo}
                    alt="Workflow"
                    width={120}
                  />
                </Link>
              </div>
            </div>
  
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
              {/*
               <ul className="flex space-x-4">
                    {Menus.map((menu) => (
                    <li 
                    key={menu.name}
                    className="px-3 py-2 text-gray-100 rounded-md text-base font-medium ">
                        <Link 
                        href={menu.url}
                        className="flex items-center">
                            {menu.icon && <span className="mr-2 text-2xl">{menu.icon}</span>}
                            {menu.name}
                        </Link>
                    </li>
                    ))}
                </ul>
              */}
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </Link>
  
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </Link>
  
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>
  
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
}