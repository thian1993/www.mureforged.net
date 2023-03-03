import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-screen bg-center-center bg-cover bg-no-repeat bg-header overflow-hidden relative">
            <div className="">
                <span className="bg-cloud opacity-70 animate-spin-slow absolute z-10"></span>
                <span className="bg-asset absolute z-20"></span>
                <span className="bg-title bg-contain absolute bg-no-repeat bg-center inset-x-0 bottom-0 h-16 z-30"></span>
            </div>
        </div>
    );
}