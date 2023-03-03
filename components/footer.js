import Link from "next/link";

export default function Footer() {
    return (
        <>
        <div className="banner z-50 ">
            <Link href="https://chat.whatsapp.com/CiEAB3EmppgBo7wxsMtZH8" target="_blank" className="r-btn"></Link>
        </div>
        <footer className="bg-black backdrop-blur border-t border-slate-600/20 fixed inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="text-center text-sm">
                    <span className="text-gray-300">Reforged Mu Online Season 18. COPYRIGHT© Reforged Games. All Right Reserved.</span>
                </p>
            </div>
        </footer>
        </>
    );
}