import Header from "../components/header";
import Notices from "../components/notices";

export default function Home() {
    return (
        <>
            <Header />
                <div className='h-screen bg-cover bg-no-repeat bg-body mx-auto relative overflow-hidden'>
                <div>
                    <span className='bg-top absolute z-10 bg-no-repeat'></span>
                </div>
                <div className='w-7/12 mx-auto h-auto pt-10 container'>
                    <img className='mx-auto' src="/images/title-home.png" alt="asset" />
                    <h2 className='text-7xl text-red-700 font-black text-center'>MU REFORGED SEASON 18</h2>
                </div>
                <Notices />
            </div>
        </>
    );
}