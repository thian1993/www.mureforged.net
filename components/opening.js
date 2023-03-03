import Timer from "./timer";
import Image from 'next/image';
import logo from '/public/images/logo.png';

export default function Opening() {
    return (
        <div className="w-full h-screen mx-auto bg-center-center bg-cover bg-no-repeat bg-opening relative">
            <div className="absolute header-opening">
                <div className="bg-black/50 border border-yellow-200 p-4 inline-block align-text-bottom rounded-lg">
                    <h1 className='text-white text-2xl text-center font-bold pb-4 '>
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500">
                            MU REFORGED GRAN OPENING
                        </span>
                    </h1>
                    <h2 className='text-white text-5xl text-center font-semibold'>
                        <Timer  duration={28 * 24 * 60 * 60 * 1000} />
                    </h2>
                    <p className="text-center text-white pt-4 text-1xl font-semibold">Periodo de apertura: 31 de Marzo 2023.</p>
                </div>
            </div>
        </div>
        
    );
}