import React, { useState } from 'react'
import Container from '../Layout/Container'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
  const [counterstate, setcounterstate] = useState(false)
  return (
    <div className='bg-counter bg-no-repeat bg-center bg-cover'>
      <Container>
        <ScrollTrigger onEnter={() => setcounterstate(true)} onExit={() => setcounterstate(false)}>
          <div className='flex'>
            <div className='w-4/12'>
              <div className='text-center mt-10 mb-[57px] border rounded-lg pt-16 pb-12'>
                <h2 className='text-white font-pops font-black text-[70px] leading-[70px]'>
                  {
                    counterstate &&
                    <CountUp start={0} end={30} duration={2}></CountUp>
                  }
                  k</h2>
                <p className='text-[16px] leading-4 font-black font-pops text-white'>HAPPY CUSTOMERS</p>
              </div>
            </div>

            <div className='w-4/12'>
              <div className='text-center mt-10 mb-[57px] border rounded-lg pt-16 pb-12 ml-11'>
                <h2 className='text-white font-pops font-black text-[70px] leading-[70px]'>
                  {
                    counterstate &&
                    <CountUp start={0} end={10} duration={2}></CountUp>
                  }+</h2>
                <p className='text-[16px] leading-4 font-black font-pops text-white'>YEARS EXPERIENCE</p>
              </div>
            </div>

            <div className='w-4/12'>
              <div className='text-center mt-10 mb-[57px] border rounded-lg pt-16 pb-12 ml-11'>
                <h2 className='text-white font-pops font-black text-[70px] leading-[70px]'>
                  {
                    counterstate &&
                    <CountUp start={0} end={28} duration={2}></CountUp>
                  }</h2>
                <p className='text-[16px] leading-4 font-black font-pops text-white'>CAB DRIVERS</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </Container>
    </div>
  )
}

export default Counter