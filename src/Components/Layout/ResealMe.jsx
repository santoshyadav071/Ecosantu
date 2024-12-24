import { NavLink } from "react-router-dom";

export const ResealMe = () => {
    return (
      <>
        <section className="h-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="flex justify-center">
              <img src="/Images/reseal.avif" alt="ReSeal Me" className="w-full h-auto max-w-md" />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Allbirds ReRun™ <br /> A New Way To Get Old Favorites
              </h2>
              <p className="text-base md:text-lg mb-4">
                Allbirds ReRun™ is a marketplace where you can shop slightly
                imperfect and gently used products, extending their life and
                lowering our impact on the planet. Allbirds has partnered with
                Trove, a company that specializes in circular commerce, to run
                Allbirds ReRun™ on our behalf.
              </p>
              <div className="mt-4">
                  <span className="font-bold">
                      <p>By clicking the link below, you will be leaving allbirds.com and heading to the ReRun marketplace site.</p>
                  </span>
              </div>
              <div className="py-4">
              <NavLink to="/Rerun">
                  <button className="border-2 border-black rounded bg-white text-black hover:bg-black hover:text-white transition-all duration-300 px-6 py-3">
                    START SHOPPING RETURN
                  </button>
              </NavLink>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };