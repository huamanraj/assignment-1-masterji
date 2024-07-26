// DragAndDrop.jsx
import React, { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import CourseCard from './CourseCard';

const ItemType = 'CARD';

function DragAndDrop() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = courses[dragIndex];
    setCourses(
      update(courses, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='w-[85vw] h-screen'>
        <h1 className='text-5xl font-bold text-center p-5'>Chai Aur Code</h1>
        <div className="flex flex-col items-start bg-white rounded-xl m-10 p-10">
          <h1 className='font-bold text-4xl'>Manage Bundle</h1>
          <h2>Change orders of the products based on priority</h2>
          <div className="products">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <DraggableCourseCard
                  key={course.id}
                  index={index}
                  id={course.id}
                  course={course}
                  moveCard={moveCard}
                />
              ))
            ) : (
              <p>Loading courses...</p>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

const DraggableCourseCard = ({ id, course, index, moveCard }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        
        backgroundColor: 'white',
        cursor: 'move',
      }}
    >
      <CourseCard course={course} />
    </div>
  );
};

export default DragAndDrop;
