import React from 'react'
import Logo from '../assets/logo.png'
function LogoButton() {
  return (
    
    <a href="http://chaicode.com/">
        <img className='w-[150px]  h-[150px] rounded-lg hover:scale-90 transition-all' src={Logo} alt="" />
    </a>
    
  )
}

export default LogoButton