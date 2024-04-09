import React from 'react'
import Container from '../Layout/Container'
import blogone from '../../assets/blogone.png'
import blogtwo from '../../assets/blogtwo.png'

const Articles = () => {
    return (
        <div>
            <Container>
                <div className='pt-[123px] pb-[61px]'>
                    <div className='text-center'>
                        <h3 className='font-pops font-semibold text-[50px] leading-[60px]'>Recent Articles</h3>
                    </div>

                    <div className='flex mt-[150px]'>
                        <div className='w-6/12'>
                            <div className='text-center border border-[#747474]/20 rounded-lg'>
                                <div>
                                    <img src={blogone} className='w-[660px]' alt="" />
                                </div>

                                <div className='pt-[37px] pb-[60px]'>
                                    <h3 className='font-pops font-semibold text-[26px] leading-[31.2px]'>Welcome to Avada Taxi</h3>
                                    <p className='font-robo text-[12px] leading-[18px] py-[22px]'>By admin|January 16th, 2020|Announcements,General</p>
                                    <p className='font-robo text-[14px] leading-[21px] w-[469px] mx-auto'> Ride-Sharing Tips For the Savy Traveler Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Pellentesque sed justo ultrices, dignissim dui
                                        at, laoreet dui. Quisque ut felis et neque dignissim ultricies vitae quis tellus.
                                        Nullam mattis cursus ornare. Nulla nec</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-6/12'>
                            <div className='ml-10 border border-[#747474]/20 rounded-lg'>
                                <div>
                                    <img className='h-[490px]' src={blogtwo} alt="" />
                                </div>

                                <div className='pt-[37px] pb-[60px] text-center'>
                                    <h3 className='font-pops font-semibold text-[26px] leading-[31.2px]'>The Benefits of Prebooking</h3>
                                    <p className='font-robo text-[12px] leading-[18px] py-[22px]'>By admin|January 16th, 2020|Announcements,General</p>
                                    <p className='font-robo text-[14px] leading-[21px] w-[469px] mx-auto'>Save Time & Guarantee Your Ride Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque sed justo ultrices, dignissim dui at, laoreet dui.
                                        Quisque ut felis et neque dignissim ultricies vitae quis tellus. Nullam mattis
                                        cursus ornare. Nulla nec molestie</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[55px] text-center'>
                        <button className='bg-[#FEBA12] font-pops font-semibold text-[14px] leading-[16.8px] py-[19px] pl-[42px] pr-[43px] rounded-lg hover:text-white'>READ MORE ON OUR BLOG</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Articles