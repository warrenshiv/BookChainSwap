import Header from "../components/Header";
import Container6 from "../components/Container6";

const ProductDetails = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[44px] leading-[normal] tracking-[normal] mq750:gap-[22px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-mid text-lightslategray font-inter">
        <header className="self-stretch flex flex-col items-start justify-start max-w-full">
          <Header />
          <Container6 />
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-[29px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
            <div className="w-[1037px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-1">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/caret-left-1.svg"
                    />
                  </div>
                  <div className="relative leading-[26px] inline-block min-w-[67px]">
                    Go Back
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-12xl text-gray-200 mq1050:flex-wrap">
                <div className="h-[527px] w-[154px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10.5px]">
                    <img
                      className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-81@2x.png"
                    />
                    <img
                      className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-82@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                      <img
                        className="h-[167px] flex-1 relative rounded max-w-full overflow-hidden object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-84@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-0 pr-8 pl-0 box-border min-w-[328px] max-w-full">
                  <img
                    className="self-stretch h-[529px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-86@2x.png"
                  />
                </div>
                <div className="w-[359px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                    <div className="w-[307px] flex flex-row items-start justify-start py-0 px-px box-border font-epilogue">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[3px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                            <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block min-w-[129px] mq450:text-lgi mq450:leading-[29px] mq1050:text-6xl mq1050:leading-[38px]">
                              Mystery
                            </h2>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[9px] text-mini font-inter">
                            <img
                              className="h-[45px] w-[45px] relative rounded-[23px] object-contain"
                              loading="lazy"
                              alt=""
                              src="/image-85@2x.png"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                                <div className="flex flex-row items-start justify-start relative">
                                  <div className="relative leading-[24px]">
                                    Decentralized, Transparent
                                  </div>
                                  <div className="absolute !m-[0] top-[-12px] left-[0px] text-base leading-[26px] inline-block min-w-[81px] z-[1]">
                                    BookSwap
                                  </div>
                                </div>
                                <div className="relative text-mid leading-[26px] inline-block min-w-[43px]">
                                  *****
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-mini font-inter">
                          <div className="relative leading-[24px] inline-block min-w-[56px]">
                            Wap No
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[21px] box-border max-w-full text-mid">
                      <div className="flex flex-col items-start justify-start gap-[21px] max-w-full">
                        <div className="relative leading-[22px]">
                          <p className="m-0">
                            Exciting mystery thriller book available for
                          </p>
                          <p className="m-0">swap.</p>
                          <p className="m-0">
                            Perfect condition, captivating plot.
                          </p>
                        </div>
                        <div className="relative text-base leading-[22px]">
                          <p className="m-0">Author: Unknown</p>
                          <p className="m-0">Genre: Mystery, Thriller</p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-lg text-peru mq450:flex-wrap">
                      <button className="cursor-pointer py-2.5 px-5 bg-white flex-1 rounded box-border overflow-hidden flex flex-row items-start justify-center min-w-[48px] border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-lgi leading-[30px] font-inter text-gray-200 text-left inline-block min-w-[48px]">
                          swap
                        </div>
                      </button>
                      <div className="w-[55px] rounded bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-end pt-[11px] px-3.5 pb-[39px] relative border-[1px] border-solid border-peru">
                        <div className="h-0 w-0 relative leading-[28px] inline-block" />
                        <img
                          className="h-[27px] w-[27px] absolute !m-[0] top-[calc(50%_-_13.5px)] left-[calc(50%_-_13.5px)] overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/favorite.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[53px] px-0 pb-0">
              <div className="flex flex-row items-end justify-start gap-[15px]">
                <img
                  className="h-[19px] w-5 relative rounded object-cover min-h-[19px]"
                  loading="lazy"
                  alt=""
                  src="/image-83@2x.png"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/shape-triangle-2-1.svg"
                  />
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/menu-8-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-gray-100 flex flex-row items-start justify-between pt-8 pb-6 pr-28 pl-[120px] box-border max-w-full gap-[20px] text-left text-lgi text-gray-200 font-epilogue mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-14 mq750:box-border mq1050:flex-wrap">
        <div className="w-[395px] flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
          <b className="relative leading-[30px] inline-block min-w-[112px]">
            Decentraliz
          </b>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[171px] text-base font-inter">
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px]">
              <div className="relative leading-[26px] inline-block min-w-[90px]">
                BookChains
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0">
                <div className="relative leading-[26px] inline-block min-w-[58px]">
                  Literary
                </div>
              </div>
              <div className="relative leading-[26px] inline-block min-w-[61px]">
                Join the
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-mini font-inter">
          <div className="relative leading-[24px]">@ BookChainSwap</div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
