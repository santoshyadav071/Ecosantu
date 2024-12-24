import { Link } from 'react-router-dom';

export const HeroSectionRerun =()=>{
    return(
        <>
            <section className="w-full h-screen bg-cover bg-center bg-no-repeat "
            style={{backgroundImage:" url('/Images/rerun.webp')"}}
            >
            <div className="text-center text-white py-44">
                <h1 className="font-bold text-4xl">Allbirds ReRun</h1>
                <p>Old favorites. New closets. <br />
                Because your Allbirds, and the planet, deserve to keep running.</p>
                <div className="py-4">
                    <Link to="/rerunshopnow">
                        <button className="px-16 py-2 border-2 border-gray-800 bg-[#212A2F] hover:bg-white hover:text-black transition-all delay-300">Shop Now</button>
                    </Link>
                </div>
            </div>
            

            </section>

        </>
    )
}