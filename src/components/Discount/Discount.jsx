import React from 'react'
import Container from '../Layout/Container'

const Discount = () => {
    return (
        <div className='absolute z-10 w-full top-[560px]'>
            <Container>
                <div className='flex'>
                    <div className='w-5/12'>
                        <div className='bg-[#EFB317] text-center pt-[175px] pb-[155px] rounded-l-lg'>
                            <h3 className='font-pops font-medium text-[20px] leading-[30px] text-white'>Book online now &</h3>
                            <h2 className='font-pops font-semibold text-[50px] leading-[50px] text-white'>SAVE</h2>
                            <h1 className='font-pops font-semibold text-[100px] leading-[100px]'>10%</h1>
                            <h5 className='font-pops font-medium text-[20px] leading-[20px] text-white'>On Your Ride</h5>
                        </div>
                    </div>
                    
                    <div className='w-7/12'>
                        <div className='flex pt-[50px] pb-[14px] px-[39px] bg-white rounded-r-lg'>
                            <div>
                                <div>
                                    <h6 className='font-robo font-medium text-[14px] leading-5'>Pick Up Location</h6>
                                    <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                </div>

                                <div className='mt-[35px]'>
                                    <h6 className='font-robo font-medium text-[14px] leading-5'>Date Required</h6>
                                    <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                </div>

                                <div className='mt-[35px]'>
                                    <h6 className='font-robo font-medium text-[14px] leading-5'>Your Name</h6>
                                    <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                </div>

                                <div className='pt-10'>
                                    <p className='font-robo font-medium text-[14px] leading-5 w-[283px]'>Payment for bookings is taken in advance as per our terms and conditions</p>
                                </div>
                            </div>

                            <div className='ml-[25px]'>
                                <div>
                                    <div>
                                        <h6 className='font-robo font-medium text-[14px] leading-5'>Drop Off Location</h6>
                                        <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                    </div>

                                    <div className='mt-[35px]'>
                                        <h6 className='font-robo font-medium text-[14px] leading-5'>Number of Passengers</h6>
                                        <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                    </div>

                                    <div className='mt-[35px]'>
                                        <h6 className='font-robo font-medium text-[14px] leading-5'>Your Email Address</h6>
                                        <input type="text" className='w-[325px] border border-[#747474]/75 rounded-lg py-5 px-3 outline-none mt-3' />
                                    </div>

                                    <div className='mt-10'>
                                        <button className='bg-[#FEDA10] py-[15px] pl-6 pr-[25px] rounded-lg font-pops font-medium text-[14px]
                                        leading-[16.8px]'>GET A QUOTE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Discount