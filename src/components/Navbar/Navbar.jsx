import React, { useState } from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [show, setshow] = useState(false)

    const handleClick = () => {
        setshow(!show)
    }
    return (
        <div>
            <div className='bg-black md:bg-transparent static md:absolute z-10 w-full'>
                <Container className='py-8 px-2.5 md:px-0'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        <div onClick={handleClick} className='md:hidden'>
                            {
                                show == true ? <RxCross2 className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' />
                            }
                        </div>

                        <div className='md:block hidden'>
                            <div className='flex justify-end items-center gap-x-10'>
                                <div>
                                    <ul className='flex gap-x-10'>
                                        <li><a href="" className='text-white font-pops font-semibold text-[15px] tracking-[1px] leading-[21px] hover:text-[#FEBA12]'>HOME</a></li>
                                        <li><a href="" className='text-white font-pops font-semibold text-[15px] tracking-[1px] leading-[21px] hover:text-[#FEBA12]'>PRICING</a></li>
                                        <li><a href="" className='text-white font-pops font-semibold text-[15px] tracking-[1px] leading-[21px] hover:text-[#FEBA12]'>APP</a></li>
                                        <li><a href="" className='text-white font-pops font-semibold text-[15px] tracking-[1px] leading-[21px] hover:text-[#FEBA12]'>NEWS</a></li>
                                        <li><a href="" className='text-white font-pops font-semibold text-[15px] tracking-[1px] leading-[21px] hover:text-[#FEBA12]'>CONTACT US</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <button className='bg-[#FEBA12] py-2.5 px-6 text-[14px] font-pops font-semibold leading-[20px] rounded-lg hover:text-white hover:bg-[#FEDA10]'>BOOK ONLINE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* navbar for mobile devices */}
                    <div className={`${show ? 'block' : 'hidden'}`}>
                        <div className='flex flex-col mt-2.5'>
                            <div>
                                <ul className='flex flex-col w-full'>
                                    <li className='text-white font-pops font-semibold text-[14px] leading-[21px] py-3.5 px-2.5 hover:bg-[#FEBA12] hover:text-white'><a href="">HOME</a></li>
                                    <li className='text-white font-pops font-semibold text-[14px] leading-[21px] py-3.5 px-2.5 hover:bg-[#FEBA12] hover:text-white'><a href="">PRICING</a></li>
                                    <li className='text-white font-pops font-semibold text-[14px] leading-[21px] py-3.5 px-2.5 hover:bg-[#FEBA12] hover:text-white'><a href="">APP</a></li>
                                    <li className='text-white font-pops font-semibold text-[14px] leading-[21px] py-3.5 px-2.5 hover:bg-[#FEBA12] hover:text-white'><a href="">NEWS</a></li>
                                    <li className='text-white font-pops font-semibold text-[14px] leading-[21px] py-3.5 px-2.5 hover:bg-[#FEBA12] hover:text-white'><a href="">CONTACT US</a></li>
                                </ul>
                            </div>
                            <div>
                                <button className='bg-[#FEBA12] hover:bg-[#FEDA10] ml-2.5 mt-2.5 pt-[15px] pb-[16px] pl-[38px] pr-[37px] text-[12px] font-pops font-semibold leading-[14px] rounded-lg hover:text-white'>BOOK ONLINE</button>
                            </div>
                        </div>
                    </div>
                    {/* navbar for mobile devices */}
                </Container>
            </div>
        </div>
    )
}

export default Navbar