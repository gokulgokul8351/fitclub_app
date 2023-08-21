import React, { useState, useEffect } from 'react'

function CountdownTimer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)

  const deadline = ' August, 29, 2023 '

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMins(Math.floor((time / 1000 / 60) % 60))
    setSecs(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="set-timer">
      <div>
        <p style={{ color: 'lightcoral' }}>{days < 10 ? '0' + days : days} :</p>
        <span>
          D<span className="t-small">ay :</span>{' '}
        </span>
      </div>
      <div>
        <p style={{ color: '' }}>{hours < 10 ? '0' + hours : hours} :</p>
        <span>
          H<span className="t-small">our : </span>
        </span>
      </div>
      <div>
        <p style={{ color: 'greenyellow ' }}>
          {mins < 10 ? '0' + mins : mins} :
        </p>
        <span>
          M<span className="t-small">in : </span>
        </span>
      </div>
      <div>
        <p style={{ color: 'hotpink ' }}>{secs < 10 ? '0' + secs : secs}</p>
        <span>
          S<span className="t-small">ec</span>
        </span>
      </div>
    </div>
  )
}

export default CountdownTimer
