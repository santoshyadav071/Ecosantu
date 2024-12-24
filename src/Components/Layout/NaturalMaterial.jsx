export const NaturalMaterial = () => {
  return (
    <>
      <section className="h-auto bg-white py-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          Natural Materials. Supernatural Comfort.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
          <div className="flex flex-col items-center text-center">
            <img src="/Images/wool.webp" alt="Wool" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">Wool</h2>
            <p className="py-4 text-sm sm:text-base">
              With fibers that are 20% the diameter of human hair, our superfine
              merino wool is amazingly soft, temperature-regulating, and
              moisture-wicking, all without that irritating scratchiness.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/Images/Tree.webp" alt="Tree" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">TREE</h2>
            <p className="py-4 text-sm sm:text-base">
              Our eucalyptus fiber is a naturally-derived, renewable material
              that’s much easier on the environment than traditional fabrics.
              Did we mention it’s also comfortable, breathable, and
              silky-smooth?
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/Images/Mizzel.webp" alt="Mizzle" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">MIZZLE</h2>
            <p className="py-4 text-sm sm:text-base">
              A thicker, water repellent version of our soft and cozy merino
              wool material, designed to keep your feet warm and dry regardless
              of what curveballs the forecast decides to throw your way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
