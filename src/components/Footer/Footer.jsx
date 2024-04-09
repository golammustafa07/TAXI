import React from 'react'
import Container from '../Layout/Container'
import footercar from '../../assets/footercar.png'
import footerpos from '../../assets/footerpos.png'
import footerlogo from '../../assets/footerlogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className='bg-footer bg-cover bg-center bg-no-repeat w-full h-[1036px]'>
                <Container>
                    <div className=''>
                        <div className='flex pt-[130px]'>
                            <div className='w-3/12'>
                                <div className='bg-[#FEBA12] text-center pt-[95px] pb-[80px] rounded-lg'>
                                    <h3 className='font-pops font-medium text-[20px] leading-[30px] text-white'>Book online now &</h3>
                                    <h2 className='font-pops font-semibold text-[50px] leading-[50px] text-white'>SAVE</h2>
                                    <h1 className='font-pops font-semibold text-[100px] leading-[100px]'>10%</h1>
                                    <h5 className='font-pops font-medium text-[20px] leading-[20px] text-white'>On Your Ride</h5>
                                </div>
                            </div>
                            <div className='w-3/12'>
                                <div className='text-center ml-[105px]'>
                                    <img src={footercar} className='mx-auto' alt="" />
                                    <h3 className='font-pops font-semibold text-[30px] leading-9 text-white'>Standard Cab</h3>
                                    <p className='text-[#bcbcbc] font-pops font-semibold text-[14px] leading-[16.8px]'>1-3 PASSENGERS</p>
                                    <p className='font-robo text-[14px] leading-[21px] text-[#747474]'>Our standard cab service will pick
                                        you up from your desired location
                                        with up to 2 additional riders, and
                                        deliver you safely to your target
                                        destination.</p>
                                    <p className='text-[#6b6b6b] font-pops font-semibold text-[16px] leading-[19.2px]'>RIDES COST</p>
                                    <p className='font-pops font-semibold text-[#FEBA12] text-[20px] leading-[60px]'><span className='font-pops font-semibold text-[60px] leading-[60px] text-[#FEBA12]'>$1</span>/km</p>
                                </div>
                            </div>
                            <div className='w-3/12'>
                                <div className='text-center ml-[105px]'>
                                    <img src={footercar} className='mx-auto' alt="" />
                                    <h3 className='font-pops font-semibold text-[30px] leading-9 text-white'>Mini Bus</h3>
                                    <p className='text-[#bcbcbc] font-pops font-semibold text-[14px] leading-[16.8px]'>1-8 PASSENGERS</p>
                                    <p className='font-robo text-[14px] leading-[21px] text-[#747474]'>Our standard cab service will pick
                                        you up from your desired location
                                        with up to 2 additional riders, and
                                        deliver you safely to your target
                                        destination.</p>
                                    <p className='text-[#6b6b6b] font-pops font-semibold text-[16px] leading-[19.2px]'>RIDES COST</p>
                                    <p className='font-pops font-semibold text-[#FEBA12] text-[20px] leading-[60px]'><span className='font-pops font-semibold text-[60px] leading-[60px] text-[#FEBA12]'>$2</span>/km</p>
                                </div>
                            </div>
                            <div className='w-3/12'>
                                <div className='text-center ml-[105px]'>
                                    <img src={footercar} className='mx-auto' alt="" />
                                    <h3 className='font-pops font-semibold text-[30px] leading-9 text-white'>Executive</h3>
                                    <p className='text-[#bcbcbc] font-pops font-semibold text-[14px] leading-[16.8px]'>1-2 PASSENGERS</p>
                                    <p className='font-robo text-[14px] leading-[21px] text-[#747474]'>Our standard cab service will pick
                                        you up from your desired location
                                        with up to 2 additional riders, and
                                        deliver you safely to your target
                                        destination.</p>
                                    <p className='text-[#6b6b6b] font-pops font-semibold text-[16px] leading-[19.2px]'>RIDES COST</p>
                                    <p className='font-pops font-semibold text-[#FEBA12] text-[20px] leading-[60px]'><span className='font-pops font-semibold text-[60px] leading-[60px] text-[#FEBA12]'>$5</span>/km</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b border-[#FEBA12] w-full h-[5px] mt-[140px] bg-transparent relative'>
                        <div className='w-[77px] h-[77px] rounded-full border-[5px] border-[#FEBA12] bg-black absolute top-[-30px] left-[620px]'>
                            <img src={footerpos} alt="" className='mx-auto mt-[10px]' />
                        </div>
                    </div>

                    <div className='mt-[90px]'>
                        <img src={footerlogo} className='mx-auto' alt="" />
                    </div>

                    <div className=' text-[#BDBCBC] mt-[10px]'>
                        <div className='flex' >
                            <a href=""><FaFacebookF className='text-2xl ml-[600px]'/></a>
                            <a href=""><FaTwitter className='text-2xl ml-[20px]' /></a>
                            <a href=""><FaInstagram className='text-2xl ml-[20px]' /></a>
                        </div>
                    </div>

                    <div className='text-center pt-[43px]'>
                        <a href="" className='text-[#747474] font-robo text-[14px] leading-[21px]'>© Copyright 2012 - 2023 | Avada Theme by <span className='text-white'>ThemeFusion</span>| All Rights Reserved | Powered by <span className='text-white'>WordPress</span></a>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer