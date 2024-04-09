import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <div className='bg-banner bg-cover bg-no-repeat bg-center w-full h-[978px] relative'>
        <div className='bg-overlay w-full h-full'>
            <Container>
                <div className='pt-[350px] text-center'>
                    <h1 className='text-[65px] font-pops font-semibold text-white leading-[78px]'><span className='text-[#FEBA12]'>Premium</span> Transport</h1>
                    <p className='font-pops font-semibold text-[30px] leading-[60px] text-white pt-[10px]'>for your Business & Personal Needs</p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Banner