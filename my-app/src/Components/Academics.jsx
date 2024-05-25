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
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTvn0GEuoflFsS21thot6ZoddshPQtlBoVvXmOieo2w&s`,
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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-96 bg-sky-500 p-8">
      <div className="w-[99%] m-auto mt-6">
        <h1 className="w-[220px] text-white font-sans text-3xl font-medium  mx-2">
          Explore Our Top Academies
        </h1>
        <div className="mt-4">
          <Slider {...settings}>
            {data.map((elem) => (
              <div className="bg-white h-[33%] text-black rounded-xl">
                <div className="flex justify-center items-center rounded-t-xl">
                  <img
                    src={elem.img}
                    className="w-full h-60 object-cover  rounded-xl"
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
