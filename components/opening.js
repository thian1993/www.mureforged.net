import Timer from "./timer";

export default function Opening() {
    return (
        <div className="w-full h-screen mx-auto bg-center bg-cover bg-no-repeat bg-opening relative">
            <div className="absolute header-opening">
                <div className="bg-black/50 border border-yellow-200 p-4 inline-block align-text-bottom rounded-lg">
                    <h2 className='text-white lg:text-2xl md:text-base text-center font-bold'>
                        <Timer  duration={31 * 24 * 60 * 60 * 1000} />
                    </h2>
                </div>
            </div>
        </div>
        
    );
}