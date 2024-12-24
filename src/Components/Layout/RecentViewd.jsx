import recentViewedData from '../../api/recentViewd.json'

export const RecentViewed = () => {
    return (
        <>
            <section className="bg-white w-full py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12">
                        Recently Viewed
                    </h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {recentViewedData.map((item) => (
                            <div 
                                key={item.id}
                                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                
                                <div className="p-4">
                                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 line-clamp-2 group-hover:text-gray-700">
                                        {item.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-red-600 font-medium text-sm sm:text-base">
                                            {item.price}
                                        </span>
                                        <span className="line-through text-gray-400 text-xs sm:text-sm">
                                            {item.originalPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}