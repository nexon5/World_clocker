import React, { useEffect, useState } from 'react'

const Clock = ({ children }) => {


    const [stateClock, setStateClock] = useState()


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setStateClock(date.toLocaleString('en-US', children.local.zone))
        }, 1000);
    }, [])

    return (


        <div className='clock  lg:w-[40%]'>
            <div className='text-3xl font-bold mb-3'>{children.title}</div>
            <div className='text-5xl text-yellow-400 hover:text-yellow-300'>{stateClock}</div>

        </div>

    )
}

export default Clock;