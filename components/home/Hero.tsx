import React from 'react'
import Image from 'next/image'
import Container from '../global/Container'
import CtaButton from './CtaButton'

function Hero() {
  return (
    <section className='h-[100dvh] pt-[61px] relative border-b-[1px] border-muted'>
      <Container className='h-full flex flex-col'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src="/images/hero-image.webp"
            alt="Hero background"
            fill
            quality={100}
            priority
            className='opacity-50 object-cover bg-blend-darken'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-background/50 to-background/40' />
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='text-primary text-center my-auto'>
            <h2 className='text-[20vw] md:text-[12vw] leading-[80%] font-serif font-semibold uppercase'>gewlyn</h2>
            <p className='text-lg md:text-2xl md:mt-4 uppercase'>luxury & golden silence</p>
          </div>
          <CtaButton text='Discover more'/>
        </div>
      </Container>
    </section>
  )
}

export default Hero