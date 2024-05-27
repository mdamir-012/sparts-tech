import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `Asian School`,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/The_Indian_Public_School%2C_Erode_-_panoramio.jpg/1024px-The_Indian_Public_School%2C_Erode_-_panoramio.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Delhi Public School`,
    img: `https://www.sskunjpura.org/admin/logged/images/homeslider/c81e728d9d4c2f636f067f89cc14862c2-Academic-Block-(SS-Kunjpura)-(1).jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Sainik Kids School`,
    img: `https://thumbs.dreamstime.com/b/beautiful-school-building-off-india-indian-private-looking-play-ground-very-nice-movement-209691243.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Emerald School`,
    img: `https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/mainnational/IndiaTv316bc2_delhi.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Greenwood School`,
    img: `https://media.istockphoto.com/id/1166670975/photo/spencer-county-courthouse-2-2.jpg?s=612x612&w=0&k=20&c=lKUw9gHknAAGylzHomSNNxruDFbgQdFL3t07YDiahZg=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Academics = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[500px] bg-orange-300 p-8">
      <div className="w-[99%] m-auto mt-8">
        <h1 className="w-[220px] text-white font-sans text-3xl font-medium  mx-2 text-start">
          Explore Our Top Academies
        </h1>
        <div className="mt-4 ">
          <Slider  {...settings}>
            {data.map((elem) => (
              <div className="bg-white h-[33%] text-black rounded-xl">
                <div className="flex justify-center items-center rounded-t-xl">
                  <img
                    src={elem.img}
                    className="w-full h-72 object-cover  rounded-xl"
                    alt={elem.name}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Academics;
