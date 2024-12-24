export const Action1 = () => {
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
                                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4">
                                    {['Blue', 'White', 'Grey', 'Beige', 'Black', 'Green', 'Brown', 'Red', 'Purple'].map((color) => (
                                        <label key={color} className="flex items-center space-x-3 cursor-pointer group">
                                            <div 
                                                className={`w-5 h-5 rounded-full ring-2 ring-offset-2 ${color.toLowerCase() === 'white' ? 'ring-gray-200' : 'ring-transparent'}`}
                                                style={{
                                                    backgroundColor: color.toLowerCase(),
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

                    {/* Products Grid Column */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {[
                                {img: "/Images/act3.avif", name: "Wool Runner", price: "98"},
                                {img: "/Images/act2.avif", name: "Tree Runner", price: "105"},
                                {img: "/Images/ac1.avif", name: "Mizzle Runner", price: "115"},
                                {img: "/Images/p.avif", name: "Trail Runner", price: "125"},
                                {img: "/Images/p1.avif", name: "Runner-up Mizzle", price: "135"},
                                {img: "/Images/p2.avif", name: "Runner-up Mizzle", price: "135"}
                            ].map((product, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img 
                                            src={product.img} 
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-green-600 font-bold">${product.price}</span>
                                            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm">
                                                Quick Add
                                            </button>
                                        </div>
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