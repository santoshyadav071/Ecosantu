export const MensR1 = () => {
    return (
        <>
            <section className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4">
                        {/* Size Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-bold text-black">Size</h2>
                            <p className="text-xs mb-2">Most of our shoes only come in full sizes. If <br />you&apos;re a half size, select your nearest whole size too.</p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {[7,8,9,10,11,12,13,14].map((size) => (
                                    <button key={size} className="border border-gray-300 rounded-md py-1 px-2 hover:border-black text-sm">
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-2">
                                <button className="text-xs text-gray-600 underline">Size Guide</button>
                            </div>
                        </div>

                        {/* Filter Sections */}
                        <div className="space-y-6">
                            {/* Best For Section */}
                            <div>
                                <h2 className="text-lg font-bold text-black mb-4">Best For</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Everyday', 'Warm Weather', 'Wet Weather', 'Cool Weather', 'Active'].map((item) => (
                                        <label key={item} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-black rounded border-gray-300" />
                                            <span className="text-sm">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Material Section */}
                            <div>
                                <h2 className="text-lg font-bold text-black mb-4">Material</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Tree Fiber Blend', 'Corduroy', 'Wool', 'Luxe Collection', 'Fluff Collection', 'Canvas', 'Cozy & Durable Cotton Blend'].map((material) => (
                                        <label key={material} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-black rounded border-gray-300" />
                                            <span className="text-sm">{material}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Color Section */}
                            <div>
                                <h2 className="text-lg font-bold text-black mb-4">Hue</h2>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Blue', 'White', 'Grey', 'Beige', 'Black', 'Green', 'Brown', 'Red', 'Purple'].map((color) => (
                                        <label key={color} className="flex items-center space-x-2 cursor-pointer">
                                            <div className={`w-4 h-4 rounded-full`} style={{
                                                backgroundColor: color.toLowerCase() === 'white' ? '#fff' : color.toLowerCase(),
                                                border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : 'none'
                                            }}></div>
                                            <span className="text-sm">{color}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Featured Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/Images/wool.webp" 
                                alt="Wool Runner"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">Wool Runner</h3>
                                <p className="text-gray-600 text-sm mb-4">Classic comfort with natural temperature regulation</p>
                                <span className="text-green-600 font-bold">$98</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/Images/Tree.webp" 
                                alt="Tree Runner"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">Tree Runner</h3>
                                <p className="text-gray-600 text-sm mb-4">Breathable eucalyptus fiber for everyday wear</p>
                                <span className="text-green-600 font-bold">$105</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/Images/Mizzel.webp" 
                                alt="Mizzle Runner"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">Mizzle Runner</h3>
                                <p className="text-gray-600 text-sm mb-4">Water-repellent protection for wet weather</p>
                                <span className="text-green-600 font-bold">$115</span>
                            </div>
                        </div>
                        {/* Additional Cards */}
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img 
                                    src={`/Images/1 (${index}).avif`} 
                                    alt="Mizzle Runner"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2">Mizzle Runner</h3>
                                    <div className="relative group">
                                        <button className="text-gray-600 text-sm mb-4">Quick Add</button>
                                        <div className="absolute hidden group-hover:block bg-white border border-gray-200 p-2 rounded shadow-lg">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="text-center text-sm">S: 6-7</div>
                                                <div className="text-center text-sm">M: 8-9</div>
                                                <div className="text-center text-sm">L: 10-11</div>
                                                <div className="text-center text-sm">XL: 12-13</div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-green-600 font-bold">$115</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}