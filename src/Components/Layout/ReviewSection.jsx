import { useState } from 'react';
import reviewsData from '../../api/review.json';

const ReviewSection = () => {
  const { reviews, averageRating, totalReviews } = reviewsData;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('highest');
  const [filteredReviews, setFilteredReviews] = useState([...reviews]);

  const itemsPerPage = 1; // Show one review per page

  // Calculate pagination
  const indexOfLastReview = currentPage * itemsPerPage;
  const indexOfFirstReview = indexOfLastReview - itemsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleFilter = (query, type) => {
    let results = [...reviews];
    
    if (query.trim() !== '') {
      results = results.filter(review => 
        review.title.toLowerCase().includes(query.toLowerCase()) ||
        review.content.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    switch (type) {
      case 'highest':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'typical-size':
        results.sort((a, b) => a.typicalSize.localeCompare(b.typicalSize));
        break;
      case 'size-purchased':
        results.sort((a, b) => a.sizePurchased.localeCompare(b.sizePurchased));
        break;
      case 'activity-level':
        results.sort((a, b) => a.activityLevel.localeCompare(b.activityLevel));
        break;
      default:
        break;
    }
    
    setFilteredReviews(results);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Info Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 rounded-lg p-8 mb-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
          <p className="text-gray-600">on orders over $75</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Easy Returns</h3>
          <p className="text-gray-600">within 30 days</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
          <p className="text-gray-600">Find a store near you</p>
        </div>
      </div>

      {/* Reviews Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Men's Tree Runners Reviews</h2>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-gray-900">{averageRating}</span>
          <div>
            <p className="text-sm text-gray-600">{averageRating} out of 5 stars</p>
            <p className="text-sm text-gray-600">{totalReviews} total reviews</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search reviews"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              filterReviews(e.target.value, filterType);
            }}
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select 
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            filterReviews(searchQuery, e.target.value);
          }}
        >
          <option value="highest">Highest rating</option>
          <option value="typical-size">Typical Size</option>
          <option value="size-purchased">Size Purchased</option>
          <option value="activity-level">Activity Level</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {currentReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
              <p>Typical Size: {review.typicalSize}</p>
              <p>Size Purchased: {review.sizePurchased}</p>
              <p>Activity Level: {review.activityLevel}</p>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h4>
            <p className="text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${currentPage === page ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
