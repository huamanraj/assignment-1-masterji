import React from 'react'
import CourseListComponent from '../components/DragAndDropCard/DragAndDrop'
import LogoButton from '../components/LogoButton'

function CourseList() {
  return (
    <>
    
    <div className='bg-[#D2E3C8] h-screen'>
      <CourseListComponent />
      </div>
    <div className='fixed bottom-10 right-10'>
    <LogoButton/>
     </div> </>
  )
}

export default CourseList