import React, { useState, useCallback } from "react";
import { avatarlib } from "../../lib/avatar";
import { MoveLeft, MoveRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const HeadCard = ({ options }) => {
  // console.log(startIndex, endIndex)
  const [showHoverIndex, setShowhoverIndex] = useState(null);
  // const avatarsToShow = avatarlib.slice(startIndex, endIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla__controls1 ">
        <div className="embla__buttons1 ">
          <MoveLeft className="mt-[-40px]" onClick={onPrevButtonClick} />
          <MoveRight className="mt-[-40px]" onClick={onNextButtonClick} />
        </div>
      </div>
      <section className="embla1">
        <div className="embla__viewport1" ref={emblaRef}>
          <div className="embla__container1">
            {avatarlib.map((avatar, index) => (
              <div
                key={index}
                className="flex flex-row justify-around mr-4 items-center p-2 border-2 rounded-lg w-[300px] h-[180px] min-w-[300px] relative cursor-pointer hover:shadow-lg"
                onMouseEnter={() => setShowhoverIndex(index)}
                onMouseLeave={() => setShowhoverIndex(null)}
              >
                <div className="flex flex-col">
                  <div>
                    <img src={avatar.iconlink} alt="" />
                    <p className="text-[16px] font-bold">{avatar.title}</p>
                    <p className="text-[12px]">{avatar.sub}</p>
                    <p className="text-[11px] text-gray-400">{avatar.desc}</p>
                    {showHoverIndex === index ? (
                      <p className="text-[12px] text-blue-500 ">
                        <div className="flex items-center gap-x-1">
                          <p>Create Now</p> <MoveRight size={15} />
                        </div>
                      </p>
                    ) : null}
                  </div>
                </div>
                <div
                  className="right-0"
                  style={{ width: "130px", height: "130px" }}
                >
                  <img
                    className="rounded-l-lg"
                    style={{ width: "100%", height: "100%" }}
                    src={avatar.image}
                    alt=""
                  />
                </div>
              </div>
            ))}
            {/* {Array.from({length: 5}, ()=> {return 1}).map((_,index) => (
            <div className="embla__slide1" key={index}>
              <div className="embla__slide__number1">{index + 1}</div>
            </div>
          ))} */}
          </div>
        </div>
      </section>

      {/* {avatarsToShow.map((avatar, index) => (
        <div
          key={index}
          className="flex flex-row justify-around gap-2 items-center p-2 border-2 rounded-lg w-[300px] h-[180px] min-w-[300px] relative hover:translate-y-[-5px] cursor-pointertransition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg"
          onMouseEnter={() => setShowhoverIndex(index)}
          onMouseLeave={() => setShowhoverIndex(null)}
        >
          <div className="flex flex-col">
            <div>
              <img src={avatar.iconlink} alt="" />
              <p className="text-[16px] font-bold">{avatar.title}</p>
              <p className="text-[12px]">{avatar.sub}</p>
              <p className="text-[11px] text-gray-400">{avatar.desc}</p>
              {showHoverIndex === index ? (<p className="text-[12px] text-blue-500 ">
              <div className="flex items-center gap-x-1">
                <p>Create Now</p> <MoveRight size={15} />
                </div>
              </p>) : null}
            </div>
          </div>
          <div className="right-0" style={{ width: "130px", height: "130px" }}>
            <img
              className="rounded-l-lg"
              style={{ width: "100%", height: "100%" }}
              src={avatar.image}
              alt=""
            />
          </div>
        </div>
      ))} */}
    </>
  );
};

export default HeadCard;
