export const CardSection = ({ cards }) => {
  return (
    <>
      <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02] overflow-hidden"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                  {/* Top Content */}
                  <div className="space-y-3">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                      {card.title}
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Shop Men
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Shop Women
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
