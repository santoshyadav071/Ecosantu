import { useParams, useNavigate } from 'react-router-dom';
import mensData from '../../api/mensData.json'

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mensData.products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    navigate(`/order/${id}`, { 
      state: { 
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
