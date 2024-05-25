import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `John Morgan`,
    img: `https://media.istockphoto.com/id/538864120/photo/happy-schoolchildren.jpg?s=2048x2048&w=is&k=20&c=Vrr_3pqNIC4OjH-cuJ1mI9xyiVUc8Xv0As75cAYnZoo=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `https://media.istockphoto.com/id/1960721890/photo/child-students-running-outside-the-school.jpg?s=2048x2048&w=is&k=20&c=grE9ECU49wIJOj0D3U9HM3UWad_TEtrmet7JKiw76Nc=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `https://media.istockphoto.com/id/1417643346/photo/cheerful-ethnic-girl-solving-test-with-classmates.jpg?s=2048x2048&w=is&k=20&c=XEIEfVr8qYrw1uVcRaUjMby0LBkkQmO6ZukrD3ClsYE=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `https://media.istockphoto.com/id/134017246/photo/emotional-friends.jpg?s=2048x2048&w=is&k=20&c=SuLLWxh3AdWJ-NwecFYWRugOX9rykILWIS5YqPR4PAc=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `https://media.istockphoto.com/id/1569382652/photo/portrait-of-teacher-and-students-during-lesson.jpg?s=612x612&w=0&k=20&c=eibFgFgdaclo8fKzJfRWv3D3MTQsZ6h2KsmcUFJ2_4k=`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
