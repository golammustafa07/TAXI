import React from 'react'
import Container from '../Layout/Container'
import footercar from '../../assets/footercar.png'


const Services = () => {
    return (
        <div>
            <Container className='pt-[260px] pb-[130px] z-10'>
                <div className='flex items-center'>
                    <div className=' w-4/12'>
                        <div className='text-center border border-[#747474]/50 pb-[23px] pt-[45px] rounded-lg hover:border-[#FEBA12]'>
                            <img src={footercar} className='mx-auto' alt="" />
                            <h3 className='font-pops font-semibold text-[30px] leading-9'>Standard Cab</h3>
                            <p className=' font-pops font-semibold text-[14px] leading-[16.8px] text-[#bcbcbc]'>1-3 PASSENGERS</p>
                            <p className='font-pops text-[#747474] text-[14px] leading-[21px] mx-auto w-[296px]'>Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.</p>
                            <p className='font-pops text-[14px] leading-[21px]'>RIDES COST</p>
                            <p className='font-pops font-semibold text-[20px] text-[#FEBA12]'><span className='font-pops font-semibold text-[60px] leading-[90px] text-[#FEBA12]'>$1</span>/km</p>
                        </div>
                    </div>

                    <div className=' w-4/12'>
                        <div className='ml-11 text-center border  border-[#747474]/50 pb-[23px] pt-[45px]  rounded-lg hover:border-[#FEBA12]'>
                            <img src={footercar} className='mx-auto' alt="" />
                            <h3 className='font-pops font-semibold text-[30px] leading-9'>Mini Bus</h3>
                            <p className=' font-pops font-semibold text-[14px] leading-[16.8px] text-[#bcbcbc]'>1-8 PASSENGERS</p>
                            <p className='font-pops text-[#747474] text-[14px] leading-[21px] mx-auto w-[296px]'>Our mini bus service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.</p>
                            <p className='font-pops text-[14px] leading-[21px]'>RIDES COST</p>
                            <p className='font-pops font-semibold text-[20px] text-[#FEBA12]'><span className='font-pops font-semibold text-[60px] leading-[90px] text-[#FEBA12]'>$2</span>/km</p>
                        </div>
                    </div>

                    <div className=' w-4/12'>
                        <div className='ml-11 text-center border  border-[#747474]/50 pb-[23px] pt-[45px]  rounded-lg hover:border-[#FEBA12]'>
                            <img src={footercar} className='mx-auto' alt="" />
                            <h3 className='font-pops font-semibold text-[30px] leading-9'>Executive</h3>
                            <p className=' font-pops font-semibold text-[14px] leading-[16.8px] text-[#bcbcbc]'>1-2 PASSENGERS</p>
                            <p className='font-pops text-[#747474] text-[14px] leading-[21px] mx-auto w-[296px]'>Our executive service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.</p>
                            <p className='font-pops text-[14px] leading-[21px]'>RIDES COST</p>
                            <p className='font-pops font-semibold text-[20px] text-[#FEBA12]'><span className='font-pops font-semibold text-[60px] leading-[90px] text-[#FEBA12]'>$5</span>/km</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services