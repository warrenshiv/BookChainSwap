import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start gap-[15px] max-w-full text-left text-6xl text-gray-200 font-epilogue lg:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[581px] max-w-full mq750:min-w-full">
        <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-end justify-start pt-[34px] px-[30px] pb-8 gap-[13px] mq750:pt-11 mq750:pb-[21px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <h2 className="m-0 relative text-inherit leading-[38px] font-bold font-inherit mq450:text-xl mq450:leading-[30px]">
              For young readers
            </h2>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-mini font-inter">
              <div className="relative leading-[24px]">
                Discover more titles
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-end justify-start gap-[24.3px] grid-cols-[repeat(4,_minmax(144px,_1fr))] text-mini font-inter mq450:grid-cols-[minmax(144px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(144px,_249px))]">
            <div className="h-[350px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px]">
                <img
                  className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-38@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[24px]">
                        Join Luna and Leo on
                      </div>
                      <div className="relative text-base leading-[26px] mt-[-7px]">
                        magical adventures
                      </div>
                    </div>
                    <div className="relative leading-[24px]">
                      Exciting children's book by
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 text-lgi font-epilogue">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <b className="relative leading-[32px] inline-block min-w-[62px]">
                      Lorem
                    </b>
                    <div className="w-[78px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-smi font-inter">
                      <div className="self-stretch rounded-mini bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[350px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
              <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[8.5px]">
                <img
                  className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-53@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[34px] pl-[3px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[24px]">
                        Solve the case of the
                      </div>
                      <div className="relative text-base leading-[26px] inline-block min-w-[107px] mt-[-7px]">
                        missing pencil
                      </div>
                    </div>
                    <div className="relative leading-[24px]">
                      Engaging mystery for
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[26.5px] text-lgi font-epilogue">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <b className="relative leading-[32px] inline-block min-w-[82px]">
                      Price: $7
                    </b>
                  </div>
                  <div className="flex-1 rounded-mini bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap text-smi font-inter border-[1px] border-solid border-gray-200">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[352px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[30px]">
                <FrameComponent1
                  image40="/image-40@2x.png"
                  meetTheQuirkyProfessor="Meet the quirky Professor"
                  joinGaryAndHisGiant="Join Gary and his giant"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] text-lgi font-epilogue">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[27.5px]">
                    <b className="relative leading-[32px] inline-block min-w-[83px]">
                      Price: $9
                    </b>
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 text-smi font-inter">
                      <div className="self-stretch rounded-mini bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[350px] flex flex-col items-start justify-start gap-[11px]">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-47@2x.png"
              />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px]">
                <div className="relative leading-[24px]">
                  Adventures of Rex Wigtail
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] inline-block min-w-[70px]">
                  Price: $12
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px text-lgi font-epilogue">
                  <div className="flex flex-row items-start justify-start gap-[15.5px]">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <b className="relative leading-[32px] inline-block min-w-[92px]">
                        Price: $13
                      </b>
                    </div>
                    <div className="w-[78px] rounded-mini bg-whitesmoke box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap text-smi font-inter border-[1px] border-solid border-gray-200">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-end justify-start pt-8 pb-[30px] pr-8 pl-[31px] box-border gap-[17px] max-w-full mq750:pt-11 mq750:pb-5 mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <h2 className="m-0 relative text-inherit leading-[38px] font-bold font-inherit inline-block max-w-full mq450:text-xl mq450:leading-[30px]">
                Decentralized reading experience
              </h2>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-mini font-inter">
                <div className="relative leading-[24px]">
                  Explore more options
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[26.7px] grid-cols-[repeat(4,_minmax(142px,_1fr))] text-base font-inter mq450:grid-cols-[minmax(142px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(142px,_247px))]">
            <div className="h-[352px] flex flex-col items-end justify-start gap-[28px] text-lgi font-epilogue">
              <FrameComponent1
                image40="/image-24@2x.png"
                meetTheQuirkyProfessor="Blockchain book rules"
                joinGaryAndHisGiant="Discover new authors"
                propWidth="unset"
                propAlignSelf="stretch"
              />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <b className="relative leading-[32px] inline-block min-w-[70px]">
                    Budget
                  </b>
                </div>
                <button className="cursor-pointer py-[5px] pr-[18px] pl-[19px] bg-whitesmoke w-[79px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-mini leading-[24px] font-inter text-gray-200 text-left inline-block min-w-[40px]">
                    Swap
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[352px] flex flex-col items-end justify-start gap-[8.5px]">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-0.5">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[26px]">
                      Boost critical thinking
                    </div>
                    <div className="relative leading-[26px] inline-block min-w-[37px] z-[1] mt-[-8px]">
                      skills
                    </div>
                  </div>
                  <div className="relative text-mini leading-[24px]">
                    Connect with book
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px] text-lgi font-epilogue">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <b className="relative leading-[32px] inline-block min-w-[93px]">
                    Affordabl
                  </b>
                </div>
                <button className="cursor-pointer py-[5px] pr-[18px] pl-[19px] bg-whitesmoke w-[79px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-mini leading-[24px] font-inter text-gray-200 text-left inline-block min-w-[40px]">
                    Swap
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[351px] flex flex-col items-end justify-start gap-[8px] text-mini">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[19px] pr-[27px] pl-0.5">
                <div className="flex flex-col items-start justify-start gap-[1px]">
                  <div className="relative leading-[24px]">
                    Spread love through
                  </div>
                  <div className="relative leading-[24px]">{`Enhance mind, body &`}</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lgi font-epilogue">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <b className="relative leading-[32px] inline-block min-w-[56px]">
                    Great
                  </b>
                </div>
                <button className="cursor-pointer py-1.5 px-5 bg-whitesmoke w-[79px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[37px]">
                    Swap
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[351px] flex flex-col items-start justify-start gap-[9px]">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-41@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[26px]">
                    Wellness through
                  </div>
                  <div className="relative leading-[26px] inline-block min-w-[57px] z-[1] mt-[-8px]">
                    reading
                  </div>
                </div>
                <div className="relative text-mini leading-[24px]">
                  Find joy in reading
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px text-lgi font-epilogue">
                <div className="flex-1 flex flex-row items-start justify-start gap-[22px]">
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b className="relative leading-[32px] inline-block min-w-[84px]">
                      Reasona
                    </b>
                  </div>
                  <button className="cursor-pointer py-1.5 pr-[19px] pl-5 bg-whitesmoke flex-1 rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                    <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[37px]">
                      Swap
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[441px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[441px] max-w-full text-7xl lg:flex-1 mq750:min-w-full">
        <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-end justify-start p-[29px] gap-[23px] mq1050:pt-11 mq1050:pb-5 mq1050:box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <h2 className="m-0 relative text-inherit leading-[40px] font-bold font-inherit inline-block min-w-[124px] mq450:text-2xl mq450:leading-[32px]">
              Top picks
            </h2>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-mini font-inter">
              <div className="relative leading-[24px]">
                Explore our bestsellers
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[11px] text-21xl text-black font-inter mq450:flex-wrap">
            <div className="h-[605.5px] w-[23px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[131.5px]">
                <b className="w-5 h-10 relative leading-[24px] flex items-center shrink-0 mq450:text-5xl mq450:leading-[14px] mq1050:text-13xl mq1050:leading-[19px]">
                  1
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-13xl text-gray-200 font-epilogue">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[128px]">
                    <b className="relative leading-[48px] inline-block min-w-[20px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                      3
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px text-base font-inter">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[140px]">
                        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-0.5">
                          <div className="relative leading-[26px] inline-block min-w-[11px]">
                            4
                          </div>
                        </div>
                        <b className="relative text-13xl leading-[48px] inline-block font-epilogue min-w-[20px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                          5
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[829px] w-[118px] flex flex-col items-end justify-start gap-[26.5px]">
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-44@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-43@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-28@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-27@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-50@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[139px] text-mini text-gray-200">
              <div className="self-stretch flex flex-col items-start justify-start gap-[71px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-px">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative leading-[24px]">
                        Dive into the world of
                      </div>
                      <div className="relative leading-[24px]">
                        Intriguing science fiction
                      </div>
                    </div>
                    <h3 className="m-0 relative text-2xl leading-[32px] font-bold font-epilogue mq450:text-mid mq450:leading-[26px]">
                      Decentralized user
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch relative leading-[24px]">
                    Transparent book listings Manage profiles securely
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-px text-2xl font-epilogue">
                    <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[124px] mq450:text-mid mq450:leading-[26px]">
                      Writer here
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative leading-[24px]">
                        Enhanced book swapping
                      </div>
                      <div className="relative leading-[24px]">
                        Explore decentralized profiles
                      </div>
                    </div>
                    <b className="relative text-xl leading-[30px] font-epilogue mq450:text-base mq450:leading-[24px]">
                      Search for books
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-px">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[24px]">
                        Discover detailed book info
                      </div>
                      <div className="relative leading-[24px]">
                        Efficient profile management
                      </div>
                    </div>
                    <h3 className="m-0 relative text-2xl leading-[32px] font-bold font-epilogue inline-block min-w-[123px] mq450:text-mid mq450:leading-[26px]">
                      Secure and
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[19px] text-base">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                      <div className="relative leading-[26px]">
                        Book lovers'paradise
                      </div>
                    </div>
                    <div className="relative text-mini leading-[24px] z-[1]">
                      Connect with book
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px text-2xl font-epilogue">
                    <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit mq450:text-mid mq450:leading-[26px]">
                      Affordable book
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
