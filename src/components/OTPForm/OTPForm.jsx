import React, { useRef, useState, useEffect } from 'react';

function OTPForm({ length = 4, onSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);
  const [isVerified, setVerified] = useState(null);
  const hardcodedOtp = '1234';

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === hardcodedOtp) {
      setVerified(true);
    } else {
      setVerified(false);
      setOtp(new Array(length).fill(''));
      inputRefs.current[0].focus();
      
    }
  };

  return (
    <div className='font-[DM Sans] flex justify-center items-center min-h-screen'>
      <div className='bg-white sm:w-[30%] p-5 rounded-xl shadow-lg text-center'>
        <h1 className='text-3xl font-bold text-center'>Mobile Phone Verification</h1>
        <h2 className='font-normal px-2 py-4 text-md text-[#b0b0b0] text-center'>
          Enter the 4-digit verification code that was sent to your phone number.
        </h2>
        <div>
          {otp.map((value, index) => (
            <input
              className='bg-[#DBE2EF] w-14 h-14 m-2 rounded-lg p-3 text-2xl font-semibold text-center'
              type="text"
              maxLength={1}
              key={index}
              value={value}
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <br />
        <button
          className={
            isVerified === null
              ? 'bg-[#112D4E] rounded-md py-2 px-20 mb-2 text-white'
              : isVerified
              ? 'bg-[#23CF9B] rounded-md py-2 px-20 mb-2 text-white'
              : 'bg-[#EB2D5B] rounded-md py-2 px-16 mb-2 text-white'
          }
          onClick={handleSubmit}
        >
          {isVerified === null
            ? 'Verify Account'
            : isVerified
            ? 'Account Verified'
            : 'Verification Failed'}
        </button>
        <div>
          <p className='text-[#a1a1a1]'>
            Didn’t receive code? <button className='text-[#112D4E] hover:font-medium p-[-3]'>Resend</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OTPForm;
