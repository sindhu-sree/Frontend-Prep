import React from 'react'
import IdleTimer from 'react-idle-timer';


const IdleTimerComp = () => {
    
    const handleOnIdle = (e) => {
        console.log('User is idle', e);
        // Actions to perform when the user is idle
      };
    
      const handleOnActive = () => {
        console.log('User is active');
        // Actions to perform when the user becomes active again
      };
  return (
    <div>
        <IdleTimer
            timeout={1000 * 60 * 15} // 15 minutes
            onIdle={handleOnIdle}
            onActive={handleOnActive}
        />
    </div>
  )
}

export default IdleTimerComp
