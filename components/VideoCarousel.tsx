import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const videos = [
  {
    id: 1,
    url: "/videos/tech1.mp4",
    poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Digital Solutions",
  },
  {
    id: 2,
    url: "/videos/tech2.mp4",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "Expert Development",
  },
  {
    id: 3,
    url: "/videos/tech3.mp4",
    poster: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    title: "Cloud Computing",
  },
];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.isArray(slides) &&
            slides.map(
              (
                index // Check if slides is an array
              ) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">{index + 1}</div>
                </div>
              )
            )}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
