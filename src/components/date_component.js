import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const DateTime = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const min = date.getMinutes()

  return (
    <DateCpWrapper>
      <DateCp>
        <div>
          <DateWrapper>
            {date.getHours()} : {min > 9 ? min : `0${min}`}
          </DateWrapper>
        </div>
        <div>
          <SpanWrapper>
            {getWeekDay(date.getDay())}, {getMonthName(date.getMonth())} {date.getDate()}
          </SpanWrapper>
        </div>
      </DateCp>
    </DateCpWrapper>
  )
}


const SpanWrapper = styled.span`
  color: white;
  font-weight: bold;
  font-size: 61px;
`

const DateWrapper = styled.span`
  color: white;
  font-weight: bold;
  font-size: 200px;
`

const DateCpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const DateCp = styled.div`
  width: 50%;
  height: 50%;
`

const getWeekDay = (dayNumber) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[dayNumber]
}

const getMonthName = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  return months[monthNumber]
}
