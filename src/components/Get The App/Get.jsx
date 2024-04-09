import React from 'react'
import Container from '../Layout/Container'
import ios from '../../assets/ios.png'
import android from '../../assets/android.png'
import image from '../../assets/image.png'

const Get = () => {
    return (
        <div className='bg-app bg-no-repeat bg-cover bg-center'>
            <Container>
                <div className='flex pt-[30px]'>
                    <div className='w-6/12'>
                        <div className='pt-[72px]'>
                            <h1 className='font-pops font-semibold text-[50px] leading-[60px]'>Get The App</h1>
                            <p className='w-[600px] font-robo text-[18px] leading-[27px] pr-[136px] pt-10'>You can now download our app on Android and iOS. Never be stranded with Avada Taxi, book your cab from wherever you are, for as many of you as there are.</p>

                            <div className='flex mt-[40px]'>
                                <img src={ios} alt="" />
                                <img src={android} alt="" className='ml-[20px]' />
                            </div>
                        </div>
                    </div>

                    <div className='w-7/12'>
                        <div className='ml-[65px]'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Get