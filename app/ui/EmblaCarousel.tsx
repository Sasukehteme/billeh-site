'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import ClientImage from './ClientImage'
import { Client } from '../data/clients'

type PropType = {
  slides: Client[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls relative">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="absolute min-w-full">
          <h1 className="text-4xl font-bold text-center">Our Creators</h1>
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((client: Client) => (
            <div className="min-[1610px]:flex-carousel flex-mobile pl-4 min-w-0" key={client.index}>
              <div className="embla__slide__number">
                <ClientImage index={client.index} image={client.image} name={client.name} channelType={client.channelType} subs={client.subs} views={client.views}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
