import React, { useRef, useState } from 'react'
import { useIdleTimer } from "react-idle-timer";

const Dashboard = () => {
  const [isIdle,setIsIdle] = useState(false)
  const idleTimeRef = useRef(null);
  const onIdle = () => {
    console.log("logged out")
    setIsIdle(true)
  };
  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimeRef,
    timeout: 60 * 1 * 1000,
    onIdle: onIdle,
  });
  return (
    <div idletimer={idleTimer}>
      welcome to dashboard
      {isIdle && <h1>Logged Out</h1>}
   </div>
  )
}

export default Dashboard
