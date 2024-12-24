export const High1 = () => {
    return (
        <>
            <section className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Filters Column */}
                    <div className="order-2 lg:order-1">
                        {/* Size Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-black mb-2">Size</h2>
                            <p className="text-sm mb-4">Most of our shoes only come in full sizes. If you're a half size, select your nearest whole size too.</p>
                            
                            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-2">
                                {[7,8,9,10,11,12,13,14].map((size) => (
                                    <button 
                                        key={size} 
                                        className="border border-gray-300 rounded-md py-2 px-3 hover:border-black hover:bg-gray-50 transition-all duration-200 text-sm"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <button className="mt-3 text-sm text-gray-600 hover:text-black underline transition-colors">
                                Size Guide
                            </button>
                        </div>

                        {/* Filter Sections */}
                        <div className="space-y-8">
                            {/* Best For Section */}
                            <div>
                                <h2 className="text-xl font-bold text-black mb-4">Best For</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                                    {['Everyday', 'Warm Weather', 'Wet Weather', 'Cool Weather', 'Active'].map((item) => (
                                        <label key={item} className="flex items-center space-x-3 cursor-pointer group">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox h-5 w-5 text-black rounded border-gray-300 focus:ring-black"
                                            />
                                            <span className="text-sm group-hover:text-black transition-colors">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Material Section */}
                            <div>
                                <h2 className="text-xl font-bold text-black mb-4">Material</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                                    {['Tree Fiber Blend', 'Corduroy', 'Wool', 'Luxe Collection', 'Fluff Collection', 'Canvas', 'Cozy & Durable Cotton Blend'].map((material) => (
                                        <label key={material} className="flex items-center space-x-3 cursor-pointer group">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox h-5 w-5 text-black rounded border-gray-300 focus:ring-black"
                                            />
                                            <span className="text-sm group-hover:text-black transition-colors">{material}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Color Section */}
                            <div>
                                <h2 className="text-xl font-bold text-black mb-4">Hue</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3">
                                    {['Blue', 'White', 'Grey', 'Beige', 'Black', 'Green', 'Brown', 'Red', 'Purple'].map((color) => (
                                        <label key={color} className="flex items-center space-x-3 cursor-pointer group">
                                            <div 
                                                className="w-5 h-5 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-gray-300 transition-all"
                                                style={{
                                                    backgroundColor: color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase(),
                                                    border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : 'none'
                                                }}
                                            ></div>
                                            <span className="text-sm group-hover:text-black transition-colors">{color}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {[
                                {name: 'Wool Runner', price: 98, image: '/Images/r.avif'},
                                {name: 'Tree Runner', price: 105, image: '/Images/rr.avif'},
                                {name: 'Mizzle Runner', price: 115, image: '/Images/rr.avif'},
                                {name: 'Trail Runner', price: 125, image: '/Images/p.avif'},
                                {name: 'Runner-up Mizzle', price: 135, image: '/Images/p1.avif'},
                                {name: 'Runner-up Mizzle', price: 135, image: '/Images/p2.avif'}
                            ].map((product, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                                        <div className="relative">
                                            <button className="text-gray-600 text-sm mb-2 hover:text-black transition-colors">
                                                Quick Add
                                            </button>
                                            <div className="absolute hidden group-hover:block bg-white border border-gray-200 p-3 rounded-lg shadow-lg z-10 w-full">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {['S: 6-7', 'M: 8-9', 'L: 10-11', 'XL: 12-13'].map((size) => (
                                                        <button 
                                                            key={size}
                                                            className="text-sm py-1 px-2 hover:bg-gray-50 rounded transition-colors"
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-green-600 font-bold">${product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}