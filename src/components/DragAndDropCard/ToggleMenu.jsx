import React, { useState, useRef, useEffect } from 'react';


const ThreeDotMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-black mt-[7px] hover:text-gray-700 focus:outline-none"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <a
            href="#"
            className=" flex px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <svg className='mt-1 mr-2' width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 13V1M5.5 1L1 5.5M5.5 1L10 5.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className=''>Move To Top </span>
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <svg className='mt-1 mr-2' width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 1L5.5 13M5.5 13L10 8.5M5.5 13L1 8.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            Move To Bottom
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <svg className='mt-1 mr-2' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 10.4C4.84348 10.4 5.01305 10.3315 5.13807 10.2096C5.2631 10.0877 5.33333 9.92239 5.33333 9.75V5.85C5.33333 5.67761 5.2631 5.51228 5.13807 5.39038C5.01305 5.26848 4.84348 5.2 4.66667 5.2C4.48986 5.2 4.32029 5.26848 4.19526 5.39038C4.07024 5.51228 4 5.67761 4 5.85V9.75C4 9.92239 4.07024 10.0877 4.19526 10.2096C4.32029 10.3315 4.48986 10.4 4.66667 10.4ZM11.3333 2.6H8.66667V1.95C8.66667 1.43283 8.45595 0.936838 8.08088 0.571142C7.70581 0.205446 7.1971 0 6.66667 0H5.33333C4.8029 0 4.29419 0.205446 3.91912 0.571142C3.54405 0.936838 3.33333 1.43283 3.33333 1.95V2.6H0.666667C0.489856 2.6 0.320286 2.66848 0.195262 2.79038C0.0702379 2.91228 0 3.07761 0 3.25C0 3.42239 0.0702379 3.58772 0.195262 3.70962C0.320286 3.83152 0.489856 3.9 0.666667 3.9H1.33333V11.05C1.33333 11.5672 1.54405 12.0632 1.91912 12.4289C2.29419 12.7946 2.8029 13 3.33333 13H8.66667C9.1971 13 9.70581 12.7946 10.0809 12.4289C10.456 12.0632 10.6667 11.5672 10.6667 11.05V3.9H11.3333C11.5101 3.9 11.6797 3.83152 11.8047 3.70962C11.9298 3.58772 12 3.42239 12 3.25C12 3.07761 11.9298 2.91228 11.8047 2.79038C11.6797 2.66848 11.5101 2.6 11.3333 2.6ZM4.66667 1.95C4.66667 1.77761 4.7369 1.61228 4.86193 1.49038C4.98695 1.36848 5.15652 1.3 5.33333 1.3H6.66667C6.84348 1.3 7.01305 1.36848 7.13807 1.49038C7.2631 1.61228 7.33333 1.77761 7.33333 1.95V2.6H4.66667V1.95ZM9.33333 11.05C9.33333 11.2224 9.2631 11.3877 9.13807 11.5096C9.01305 11.6315 8.84348 11.7 8.66667 11.7H3.33333C3.15652 11.7 2.98695 11.6315 2.86193 11.5096C2.7369 11.3877 2.66667 11.2224 2.66667 11.05V3.9H9.33333V11.05ZM7.33333 10.4C7.51014 10.4 7.67971 10.3315 7.80474 10.2096C7.92976 10.0877 8 9.92239 8 9.75V5.85C8 5.67761 7.92976 5.51228 7.80474 5.39038C7.67971 5.26848 7.51014 5.2 7.33333 5.2C7.15652 5.2 6.98695 5.26848 6.86193 5.39038C6.73691 5.51228 6.66667 5.67761 6.66667 5.85V9.75C6.66667 9.92239 6.73691 10.0877 6.86193 10.2096C6.98695 10.3315 7.15652 10.4 7.33333 10.4Z" fill="#FA2D2D" />
            </svg>


            Remove
          </a>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
