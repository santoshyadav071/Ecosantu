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

export default function SimpleSlider() {
  const sliderRef = useRef(null); // Create a reference for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { id: 1, src: "/Images/card5.avif", alt: "Image 1", text: "Everyday Wear", link: "#" },
    { id: 2, src: "/Images/weather.avif", alt: "Image 2", text: "Weather Ready", link: "#" },
    { id: 3, src: "/Images/move.avif", alt: "Image 3", text: "On The Move", link: "#" },
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
            {image.text}
          </button>
        ))}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={image.id} className="px-4 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] object-cover object-bottom rounded-md"
            />
            {/* Add text and link for each image */}
            <div className="absolute bottom-6 left-6">
              <h2 className="text-white font-bold text-4xl  px-4 py-2">
                {image.text}
              </h2>
              <a
                href={image.link}
                className="text-white underline mt-2 block"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
