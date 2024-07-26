import React from 'react'
import OtpComponent from '../components/OTPForm/OTPForm'
import LogoButton from '../components/LogoButton'
function Otp({length}) {
  return (

    <>
    <div className=''><OtpComponent length={4} /></div>
    <div className='fixed bottom-10 right-10'>
    <LogoButton/>
     </div>
    </>
    

  )
}

export default Otp