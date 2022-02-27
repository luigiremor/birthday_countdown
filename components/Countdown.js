import React, { useEffect, useState } from 'react'

function Countdown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [currentYear, setCurrentYear] = useState()

  // const [difference, setDifference] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date(`12/09/${currentYear} 23:59:59`)
      const currentDate = new Date()

      const difference = target.getTime() - currentDate.getTime()

      if (difference > 0) {
        setCurrentYear(new Date().getFullYear())
        console.log(target)
        console.log(`Acima ${difference}`)
      } else {
        setCurrentYear(new Date().getFullYear() + 1)
        console.log(target)
        console.log(`Abaixo ${difference}`)
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24)) // miliseconds, seconds, minutes, hours => a day
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ) // miliseconds, seconds, minutes => an hour
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) // miliseconds, seconds => a minute
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000) // miliseconds => a second
      setSeconds(s)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currentYear])

  return (
    <div className="items flex w-full flex-col justify-center">
      <div className="flex flex-row justify-center py-10 text-4xl font-medium ">
        <div className="h-12 bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text text-transparent">
          Luigi's birthday
        </div>
        <span className="">🎉</span>
      </div>
      <div className="flex flex-row text-4xl">
        <div className="w-1/4 flex-col text-center">
          <div className="font-bold">{days}</div>
          <div className="md: text-2xl">days</div>
        </div>
        <div className="w-1/4 flex-col text-center">
          <div className="font-bold">{hours}</div>
          <div className="md: text-2xl">hours</div>
        </div>
        <div className="w-1/4 flex-col text-center">
          <div className="font-bold">{minutes}</div>
          <div className="md: text-2xl">minutes</div>
        </div>
        <div className="w-1/4 flex-col text-center">
          <div className="font-bold">{seconds}</div>
          <div className="md: text-2xl">seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
