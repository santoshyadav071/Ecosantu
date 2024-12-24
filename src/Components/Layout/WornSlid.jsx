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
    slidesToShow: 4,
    slidesToScroll: 2,
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
    { id: 1, src: "/Images/ne.avif", alt: "Image 1",   },
    { id: 2, src: "/Images/ne1.avif", alt: "Image 2",  },
    { id: 3, src: "/Images/ne2.avif", alt: "Image 3", },
    { id: 4, src: "/Images/ne3.avif", alt: "Image 4", },
    { id: 5, src: "/Images/ne4.avif", alt: "Image 5", },
    { id: 6, src: "/Images/ne5.avif", alt: "Image 6", },
  ];

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index); // Navigate to the specific slide
  };

  return (
    <div className="w-full">
      {/* Links for each slide */}
      <div className="text-center mb-2">
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
              className="w-full h-[300px] object-cover object-bottom rounded-md"
            />
           
          </div>
        ))}
      </Slider>
    </div>
  );
}
