import { handleSendCode, handleSendSMS } from '@/app/utils/sms-api';
import React, { useEffect, useRef, useState } from 'react'
export const WhatsApp = ({setSelectedStep}: {setSelectedStep: React.Dispatch<React.SetStateAction<string>>}) => {
    const [inputValue, setInputValue] = useState<any>('');
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [sending, setSending]= useState<boolean>(false)
    const [remainingTime, setRemainingTime] = useState(0);
    
    const [codeValue, setCodeValue] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<any>([]);
    const [fullCode, setFullCode]=useState('')

    const handleInputChange = (e: any, index: number) => {
        const inputValue = e.target.value.replace(/\D/g, ''); 
        const newCodeValue = [...codeValue];
        newCodeValue[index] = inputValue;
        setCodeValue(newCodeValue);

        if (index < 5 && inputValue !== '') {

          inputRefs.current[index + 1].focus();
        }else if (inputValue === '' && index > 0) {

            inputRefs.current[index - 1].focus();
          }
          if (newCodeValue.every((value) => value !== '')) {
            
            const fullCode = newCodeValue.join('');
            setFullCode(fullCode)
          }
          else{
            setFullCode("")
          }
      };

    const handleRepeatCodeClick = () => {
        if (remainingTime === 0) {

    
          const isValidNumber = /^\d{10,}$/.test(inputValue);
    
          if (!isValidNumber) {
            setIsInvalid(true);
          } else {
            setIsInvalid(false);
            if(sending !==true){
            setSending(true)
            }
            setRemainingTime(60);
            handleSendSMS(inputValue)

            const timerInterval = setInterval(() => {
              setRemainingTime((prevTime) => prevTime - 1);
    
              if (remainingTime <= 0) {
                clearInterval(timerInterval); 
              }
            }, 1000);
          }
        }
      };
      const handleCheck=()=>{
        if(fullCode !== ''){
        handleSendCode(inputValue).then((response: any)=> response===fullCode ? alert("auth") : alert("wrongCode"))
        }
      }
    
      useEffect(() => {

        if (remainingTime > 0) {
          const timerTimeout = setTimeout(() => {
            setRemainingTime((prevTime) => prevTime - 1);
    
            if (remainingTime <= 0) {
              clearTimeout(timerTimeout); 
            }
          }, 1000);
        }
      }, [remainingTime]);
      
    return (
      <div className="my-16 flex flex-col justify-center items-center space-y-4">
        {!sending? (
        <div className="space-y-4 flex flex-col">

          <input
            className={`h-12 px-6 border-2 rounded-full transition duration-300 ${
              isInvalid ? 'border-red-500' : 'border-green-300'
            }`}
            placeholder="WhatsApp"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className='flex justify-between'>
          <span
          className={`shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${
            remainingTime > 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleRepeatCodeClick}
        >
          {remainingTime > 0 ? `Retry in ${remainingTime}s` : 'Get code'}
        </span>
          <span
            className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={()=> setSelectedStep("select")}
          >
            Back
          </span>
          </div>
        </div>
        ):(
        <>
         <div className="flex space-x-1">
      {codeValue.map((value, index) => (
        <input
          key={index}
          className={`h-9 w-9 text-center border-2 rounded-full transition duration-300 ${
            isInvalid ? 'border-red-500' : 'border-green-300'
          }`}
          placeholder="0"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          maxLength={1} 
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
           <div className='flex justify-between'>
            <span
          className={`font-bold py-2 px-4 rounded ${
            remainingTime > 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleRepeatCodeClick}
        >
          {remainingTime > 0 ? `Retry in ${remainingTime}s` : 'Get code'}
        </span>
          <span
            className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleCheck}
          >
            Confirm
          </span>
          </div>
        </>)}
      </div>
    );
  };