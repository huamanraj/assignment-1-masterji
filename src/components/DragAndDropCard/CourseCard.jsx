import React from 'react';
import { useDrag } from 'react-dnd';
import ThreeDotMenu from './ToggleMenu';

function CourseCard({ course, index, moveCard }) {
  const defaultCourse = {
    thumbnail: 'https://via.placeholder.com/150',
    title: 'Default Course Title',
    price: 'Rs. 012',
    type: 'Default Type',
    free: false,
  };

  const courseData = course || defaultCourse;

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="card-container">
      <div className="card shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-row p-5 my-5 justify-between w-[75vw]">
        <div className="flex flex-row items-center">
          <svg
            className="cursor-grab"
            width="40"
            height="28"
            viewBox="0 0 18 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33329 24C7.33329 25.8333 5.83329 27.3333 3.99996 27.3333C2.16663 27.3333 0.666626 25.8333 0.666626 24C0.666626 22.1666 2.16663 20.6666 3.99996 20.6666C5.83329 20.6666 7.33329 22.1666 7.33329 24ZM3.99996 10.6666C2.16663 10.6666 0.666626 12.1666 0.666626 14C0.666626 15.8333 2.16663 17.3333 3.99996 17.3333C5.83329 17.3333 7.33329 15.8333 7.33329 14C7.33329 12.1666 5.83329 10.6666 3.99996 10.6666ZM3.99996 0.666626C2.16663 0.666626 0.666626 2.16663 0.666626 3.99996C0.666626 5.83329 2.16663 7.33329 3.99996 7.33329C5.83329 7.33329 7.33329 5.83329 7.33329 3.99996C7.33329 2.16663 5.83329 0.666626 3.99996 0.666626ZM14 7.33329C15.8333 7.33329 17.3333 5.83329 17.3333 3.99996C17.3333 2.16663 15.8333 0.666626 14 0.666626C12.1666 0.666626 10.6666 2.16663 10.6666 3.99996C10.6666 5.83329 12.1666 7.33329 14 7.33329ZM14 10.6666C12.1666 10.6666 10.6666 12.1666 10.6666 14C10.6666 15.8333 12.1666 17.3333 14 17.3333C15.8333 17.3333 17.3333 15.8333 17.3333 14C17.3333 12.1666 15.8333 10.6666 14 10.6666ZM14 20.6666C12.1666 20.6666 10.6666 22.1666 10.6666 24C10.6666 25.8333 12.1666 27.3333 14 27.3333C15.8333 27.3333 17.3333 25.8333 17.3333 24C17.3333 22.1666 15.8333 20.6666 14 20.6666Z"
              fill="#7F7F7F"
            />
          </svg>
          <img className="w-[133px] rounded-lg mx-4" src={courseData.thumbnail} alt={courseData.title} />
          <h2>{courseData.title}</h2>
        </div>
        <div className="flex flex-row items-center">
          <p className="price">{courseData.price}</p>
          <p className="mx-3 px-3 border rounded-md border-black bg-[#DBFFCE]">{courseData.type}</p>
          <div className="flex justify-center items-center">
            <ThreeDotMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
