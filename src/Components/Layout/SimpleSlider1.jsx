import Slider from "react-slick";
import { useRef } from "react";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

export default function SimpleSlider1() {
  const sliderRef = useRef(null); // Create a reference for the slider

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4, // Only show 1 image at a time
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Adjust for medium screens
        },
      },
    ],
  };

  const images = [
    { id: 1, src: "/Images/shoe (1).avif", alt: "Image 1", text: "Women's Wool Runner Go - Fluff Stonybeing$77", link: "#" },
    { id: 2, src: "/Images/shoe (2).avif", alt: "Image 2", text: "Women's Tree Gliders $100", link: "#" },
    { id: 3, src: "/Images/shoe (3).avif", alt: "Image 3", text: "Women's Tree Breezers $70", link: "#" },
    { id: 4, src: "/Images/shoe (4).avif", alt: "Image 4", text: "Men's Tree Runners brezzy $88", link: "#" },
    { id: 5, src: "/Images/shoe (5).avif", alt: "Image 5", text: "Summer Cool &76", link: "#" },
    { id: 6, src: "/Images/shoe (6).avif", alt: "Image 6", text: "Casual Look $98", link: "#" },
    { id: 7, src: "/Images/shoe (7).avif", alt: "Image 7", text: "Office Ready $76", link: "#" },
    { id: 8, src: "/Images/shoe (8).avif", alt: "Image 8", text: "Classic Wear $87", link: "#" },
  ];

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index); // Navigate to the specific slide
  };

  return (
    <div className="w-full">
      {/* Links for each slide */}
      <div className="text-center mb-6 space-x-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className="text-black underline font-bold"
          >
            
          </button>
        ))}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={image.id} className="relative">
            {/* Each image appears in its own slide */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[300px] object-cover rounded-md"
            />
            {/* Add text and link for each image */}
            <div className="absolute bottom-6 left-6 text-black mt-2">
              <h2 className="font-bold text-xl">{image.text}</h2>
              <a href={image.link} className="underline text-sm">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
