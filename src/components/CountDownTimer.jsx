import React, { useEffect, useState } from 'react'

function CountDownTimer() {
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)

   const deadline = new Date("Mar 21, 2027 23:59:59").getTime()
   
   const countTime = ()=>{

    const distance = deadline - new Date().getTime()     
    setDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, 0))
    setHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, 0))
    setMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, 0))
    setSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, 0))
   }

   useEffect(()=>{
    const intervalId = setInterval(()=> countTime(deadline), 1000)

    return ()=> clearInterval(intervalId)
    // if(distance < 0){
    //     clearInterval(intervalId)
    // }

   }, [])


  return (
    <div className='flex flex-col gap-5 md:flex-row'>
        <Days days={days}/>
        <Hours hours={hours}/>
        <Minutes minutes={minutes}/>
        <Seconds seconds={seconds}/>
    </div>
  )
}

export default CountDownTimer

function Days({days}){
    return(
        <div className='flex flex-col items-center gap-5 flex-1'>
            <p className='text-4xl font-bold md:text-6xl lg:text-8xl'>{days}</p>
            <div className='text-2xl md:text-4xl lg:text-6xl text-red-800 font-bold'>Days</div>
        </div>
    )
}

function Hours({hours}){
    return(
        <div className='flex flex-col items-center gap-5 flex-1'>
            <p className='text-4xl font-bold md:text-6xl lg:text-8xl'>{hours}</p>
            <div className='text-2xl md:text-4xl lg:text-6xl text-red-800 font-bold'>Hours</div>
        </div>
    )
}

function Minutes({minutes}){
    return(
        <div className='flex flex-col items-center gap-5 flex-1'>
            <p className='text-4xl font-bold md:text-6xl lg:text-8xl'>{minutes}</p>
            <div className='text-2xl md:text-4xl lg:text-6xl text-red-800 font-bold'>Minutes</div>
        </div>
    )
}

function Seconds({seconds}){
    return(
        <div className='flex flex-col items-center gap-5 flex-1'>
            <p className='text-4xl font-bold md:text-6xl lg:text-8xl'>{seconds}</p>
            <div className='text-2xl md:text-4xl lg:text-6xl text-red-800 font-bold'>Seconds</div>
        </div>
    )
}