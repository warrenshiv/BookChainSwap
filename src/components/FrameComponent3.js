import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1206px] flex flex-col items-start justify-start gap-[86px] max-w-full text-left text-5xl text-gray-200 font-epilogue mq450:gap-[21px] mq725:gap-[43px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
            Featured swappers this month
          </h2>
        </div>
        <div className="self-stretch grid flex-row items-end justify-start gap-[19px] grid-cols-[repeat(4,_minmax(216px,_1fr))] text-lg mq450:grid-cols-[minmax(216px,_1fr)] mq1000:justify-center mq1000:grid-cols-[repeat(2,_minmax(216px,_374px))]">
          <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
            <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-41xl bg-white flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[116px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-start justify-start pt-3 px-2.5 pb-[13px] gap-[10px]">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-11 w-11 relative rounded-3xl object-contain"
                    alt=""
                    src="/image-14@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative leading-[28px]">Alice Bookworm</b>
                    <div className="relative text-xs leading-[20px] font-inter inline-block min-w-[92px]">
                      @BookLover123
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-1 text-2xs font-inter">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[26px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[18px] inline-block min-w-[66px]">
                          Bookshelves
                        </div>
                        <div className="relative text-smi leading-[22px] inline-block min-w-[60px] whitespace-nowrap">
                          $500,000
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                        <div className="relative leading-[18px] inline-block min-w-[50px]">
                          Followers
                        </div>
                        <div className="relative text-mini leading-[24px] inline-block min-w-[40px]">
                          8,765
                        </div>
                      </div>
                      <button className="cursor-pointer py-[5px] px-[15px] bg-whitesmoke flex-1 rounded-8xl overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[43px]">
                          Follow
                        </div>
                      </button>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[11px]">
                        <img
                          className="h-[79px] w-[79px] relative rounded object-cover min-h-[79px]"
                          loading="lazy"
                          alt=""
                          src="/image-6@2x.png"
                        />
                        <img
                          className="h-[79px] w-[79px] relative rounded object-cover min-h-[79px]"
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                        <img
                          className="h-[79px] w-[76px] relative rounded object-cover min-h-[79px]"
                          loading="lazy"
                          alt=""
                          src="/image-9@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-col items-start justify-start pt-0 px-0.5 pb-0.5">
            <img
              className="self-stretch h-[113px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-3 gap-[8px]">
              <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-[42px] h-[42px] relative rounded-2xl object-cover"
                      alt=""
                      src="/image-21@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="h-[25px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                      <b className="mb-[-3px] relative leading-[28px] inline-block shrink-0">
                        Bob Bibliophile
                      </b>
                    </div>
                    <div className="relative text-smi leading-[22px] font-inter inline-block min-w-[98px] shrink-0">
                      @ReadsAPlenty
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px] text-smi font-inter">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[5px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[22px] inline-block min-w-[32px]">
                        Book
                      </div>
                      <div className="relative leading-[22px] inline-block min-w-[60px] whitespace-nowrap mt-[-6px]">
                        $720,000
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[78px] h-[73px] relative rounded object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-xs">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[20px] inline-block min-w-[43px]">
                          Profiles
                        </div>
                        <div className="relative text-sm leading-[22px] inline-block min-w-[75px] mt-[-3px]">
                          Decentraliz
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[75px] h-[73px] relative rounded object-cover"
                      alt=""
                      src="/image-20@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[10px]">
                      <button className="cursor-pointer py-[5px] px-[7px] bg-whitesmoke w-[74px] rounded box-border overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[58px]">
                          Discover
                        </div>
                      </button>
                      <img
                        className="w-[78px] h-[78px] relative rounded object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-19@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-col items-end justify-start pt-px pb-0.5 pr-0.5 pl-px">
            <img
              className="self-stretch h-[114px] relative rounded max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-end justify-start py-[13px] pr-[13px] pl-[11px] gap-[8.5px] mt-[-1px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0">
                <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-[42px] w-11 relative rounded object-cover"
                    alt=""
                    src="/image-16@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="flex flex-col items-start justify-start">
                      <div className="h-[25px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                        <b className="mb-[-3px] relative leading-[28px] inline-block shrink-0">
                          BookchainSwap User
                        </b>
                      </div>
                      <div className="relative text-smi leading-[22px] font-inter inline-block min-w-[113px] shrink-0">
                        @BookChainSwap
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[18px] text-2xs font-inter">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 pr-1 pl-px">
                    <div className="relative leading-[18px] inline-block min-w-[70px] shrink-0">
                      Book Listings
                    </div>
                  </div>
                  <div className="h-5 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm">
                    <div className="mt-[-2px] relative leading-[22px] inline-block min-w-[75px] shrink-0">
                      Transparen
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                  <div className="relative leading-[18px] inline-block min-w-[61px] shrink-0">
                    Bookworms
                  </div>
                  <div className="h-5 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm">
                    <div className="mt-[-2px] relative leading-[22px] inline-block min-w-[50px] shrink-0">
                      Browse
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer py-[5px] pr-3 pl-[13px] bg-whitesmoke flex-1 rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[47px]">
                    Search
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-[79px] w-[79px] relative rounded object-cover min-h-[79px]"
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
                <img
                  className="h-[79px] w-[79px] relative rounded object-cover min-h-[79px]"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
                <img
                  className="h-[79px] w-[78px] relative rounded object-cover min-h-[79px]"
                  loading="lazy"
                  alt=""
                  src="/image-22@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-col items-start justify-start pt-0 px-px pb-0.5">
            <img
              className="self-stretch h-[115px] relative rounded max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px mt-[-1px]">
              <div className="flex-1 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-start justify-start pt-3.5 px-[11px] pb-[13px] gap-[7.5px]">
                <div className="flex flex-row items-start justify-start gap-[15px]">
                  <img
                    className="h-[43px] w-[43px] relative rounded-3xl object-contain"
                    alt=""
                    src="/image-17@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="flex flex-col items-start justify-start">
                      <div className="h-6 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                        <b className="mb-[-4px] relative leading-[28px] inline-block min-w-[101px] shrink-0">
                          Book Lover
                        </b>
                      </div>
                      <div className="relative text-smi leading-[22px] font-inter inline-block min-w-[78px] shrink-0">
                        @BookLover
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-1.5 text-2xs font-inter">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[18px] inline-block min-w-[77px] shrink-0">
                        Manage Books
                      </div>
                      <div className="h-5 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm">
                        <div className="mt-[-2px] relative leading-[22px] inline-block min-w-[72px] shrink-0">
                          Blockchain
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[18px] inline-block min-w-[72px] shrink-0">
                        Book Seekers
                      </div>
                      <div className="h-[22px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-mini">
                        <div className="mt-[-2px] relative leading-[24px] inline-block min-w-[36px] shrink-0">
                          Book
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer py-[5px] px-2 bg-whitesmoke flex-1 rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                      <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[56px]">
                        Connect
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12.5px]">
                    <div className="h-[57px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <img
                        className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/image-10@2x.png"
                      />
                    </div>
                    <img
                      className="h-[79px] w-[78px] relative rounded object-cover min-h-[79px]"
                      loading="lazy"
                      alt=""
                      src="/image-7@2x.png"
                    />
                    <img
                      className="h-[79px] w-[78px] relative rounded object-cover min-h-[79px]"
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1131px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full text-14xl">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <img
            className="w-[354px] relative rounded max-h-full object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <div className="w-[614px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[614px] max-w-full mq1050:flex-1 mq725:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit leading-[46px] font-bold font-inherit inline-block max-w-full mq450:text-xl mq450:leading-[28px] mq1000:text-7xl mq1000:leading-[37px]">
                  <p className="m-0">Discover a new way to swap books</p>
                  <p className="m-0">with BookchainSwap,</p>
                  <p className="m-0">where blockchain meets literature.</p>
                </h1>
              </div>
              <div className="w-[504px] h-[58px] relative shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white max-w-full">
                <button className="cursor-pointer [border:none] py-[9.5px] px-[34px] bg-cadetblue-100 absolute top-[8px] left-[390px] rounded overflow-hidden flex flex-row items-start justify-start hover:bg-cadetblue-200">
                  <div className="relative text-sm leading-[22px] font-inter text-white text-left inline-block min-w-[37px]">
                    Swap
                  </div>
                </button>
                <div className="absolute top-[4px] left-[4px] rounded bg-white box-border w-[389px] h-[51px] flex flex-row items-start justify-start pt-3.5 px-5 pb-[13px] z-[1] border-[1px] border-solid border-lightslategray">
                  <input
                    className="w-[168px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[22px] relative leading-[22px] text-silver-100 text-left inline-block p-0"
                    placeholder="Enter your book title here"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
