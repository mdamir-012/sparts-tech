import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `Oliver williams`,
    img: `https://media.istockphoto.com/id/171588713/photo/team-of-middle-school-students-working-on-project-together.jpg?s=612x612&w=0&k=20&c=Nvr0WMIzcnKLqauO694_J5e49RTX9DaC8m9Fs9CF9QA=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Jack Henry`,
    img: `https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163710566-stock-photo-children-looking-at-book.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Jacob Smith`,
    img: `https://media.istockphoto.com/id/175419950/photo/classroom-in-school-children-working-together.jpg?s=612x612&w=0&k=20&c=xacFfTC1vWQldJMcC1mzU3yTX5O1nS0oL9IZ_pQh6dM=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Charlie tuffy`,
    img: `https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/430x261_4/public/image/RS7924_ThinkstockPhotos-499343582-hig.jpg?itok=KwJoUCmJ`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Jacob lewis`,
    img: `https://media.istockphoto.com/id/1569382652/photo/portrait-of-teacher-and-students-during-lesson.jpg?s=612x612&w=0&k=20&c=eibFgFgdaclo8fKzJfRWv3D3MTQsZ6h2KsmcUFJ2_4k=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplayspeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-96 p-8 bg-gray-300">
      <div>
        <h1 className="text-yellow-500 text-4xl font-semibold text-right">
          Happy Kids, <br /> <span>Satisfied Parents!</span>
        </h1>
      </div>

      <div className="mt-4">
        <Slider {...settings}>
          {data.map((elem) => (
            <div className=" h-[30%] text-black rounded-xl">
              <div className="h-[100%] items-center rounded-t-xl">
                {" "}
                <img
                  src={elem.img}
                  className="width-[100%] h-52 object-cover rounded-xl"
                  alt={elem.name}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
