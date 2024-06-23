import Container4 from "../components/Container4";
import Container3 from "../components/Container3";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import CheckboxContainer from "../components/CheckboxContainer";

const Search = () => {
  return (
    <div className="w-full h-[1443px] relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-gray-200 font-inter mq1050:h-auto mq1050:min-h-[1443]">
      <main className="absolute top-[338px] left-[322px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-[1116px] flex flex-col items-end justify-start pt-[21px] pb-[61px] pr-[162px] pl-16 box-border gap-[52px] max-w-full text-left text-mini text-gray-200 font-inter">
        <div className="w-[876px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-2 pl-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/linux-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-5 pl-0 text-mid">
            <div className="relative leading-[26px] inline-block min-w-[51px]">
              Highly
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="relative leading-[24px] inline-block min-w-[77px]">
              Bestselling
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="relative leading-[24px] inline-block min-w-[95px]">
              Fresh arrivals
            </div>
          </div>
          <div className="w-[120px] flex flex-col items-start justify-start pt-2 pb-0 pr-5 pl-0 box-border text-base">
            <div className="relative leading-[26px] inline-block min-w-[76px]">
              Discounte
            </div>
          </div>
          <div className="h-[33px] w-[275px] flex flex-row items-end justify-start gap-[20px] text-sm text-silver-100">
            <div className="w-[51px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
              <div className="self-stretch h-[21px] relative">
                <img
                  className="absolute top-[1px] left-[31px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/reorder-1.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded w-5 h-[21px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-62@2x.png"
                />
              </div>
            </div>
            <div className="h-[35px] flex-1 rounded-[3px] bg-white box-border flex flex-row items-start justify-start pt-1.5 px-2 pb-[5px] whitespace-nowrap border-[1px] border-solid border-lightslategray">
              <div className="relative leading-[22px] inline-block min-w-[124px]">
                Sort by: Relevance
              </div>
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full text-left text-base text-gray-200 font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full">
              <div className="self-stretch grid flex-row items-end justify-start gap-[23px] grid-cols-[repeat(4,_minmax(154px,_1fr))] mq450:grid-cols-[minmax(154px,_1fr)] mq975:justify-center mq975:grid-cols-[repeat(2,_minmax(154px,_266px))]">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <img
                    className="self-stretch h-[245px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-58@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-[7px]">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[26px] inline-block min-w-[116px]">
                        The Blockchain
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px text-mini">
                        <div className="relative leading-[24px] inline-block min-w-[95px]">
                          Alex Johnson
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-48 flex flex-row items-start justify-start py-0 px-[3px] box-border text-3xl font-epilogue">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <b className="relative leading-[34px] inline-block min-w-[41px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                          $28
                        </b>
                      </div>
                      <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                          Trade
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px] text-mini">
                  <img
                    className="self-stretch h-[243px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-60@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start pt-0 px-[3px] pb-[7px]">
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <div className="relative leading-[24px]">
                        Decentralized Exchanges
                      </div>
                      <div className="relative leading-[24px] inline-block min-w-[92px]">
                        Ella Martinez
                      </div>
                    </div>
                  </div>
                  <div className="w-[193px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-3xl font-epilogue">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <b className="relative leading-[34px] inline-block min-w-[36px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                          $10
                        </b>
                      </div>
                      <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                          Trade
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 pb-px pr-[15px] pl-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <img
                      className="self-stretch h-[241px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-55@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[26px] inline-block min-w-[125px]">
                          Smart Contracts
                        </div>
                        <div className="relative text-mini leading-[24px] inline-block min-w-[86px] z-[1]">
                          Oliver White
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 text-3xl font-epilogue">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <b className="relative leading-[34px] inline-block min-w-[37px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                            $15
                          </b>
                        </div>
                        <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                            Trade
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-mini">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <img
                      className="self-stretch h-[245px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-54@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-[5px]">
                      <div className="flex flex-col items-start justify-start gap-[2px]">
                        <div className="relative leading-[24px]">
                          Crypto for Beginners
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-px">
                          <div className="relative leading-[24px] inline-block min-w-[96px]">
                            Sophie Green
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-48 flex flex-row items-start justify-start py-0 px-[3px] box-border text-3xl font-epilogue">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <b className="relative leading-[34px] inline-block min-w-[37px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                            $19
                          </b>
                        </div>
                        <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                            Trade
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[871px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[21px] max-w-full text-mini mq975:flex-wrap">
                <div className="flex-[0.922] flex flex-col items-end justify-start py-0 pr-4 pl-0 box-border gap-[7px] min-w-[134px] mq450:flex-1">
                  <img
                    className="self-stretch h-[246px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-66@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[7px] pr-[23px] pl-[3px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="relative leading-[24px]">
                        Blockchain Technology
                      </div>
                      <div className="relative leading-[24px] inline-block min-w-[95px]">
                        Alice Roberts
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg font-epilogue mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative leading-[28px] inline-block min-w-[58px]">
                        Lorem
                      </b>
                    </div>
                    <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                      <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                        Trade
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[134px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                      <img
                        className="h-[245px] flex-1 relative rounded max-w-full overflow-hidden object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-57@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[2px]">
                      <div className="relative leading-[24px] inline-block min-w-[126px]">
                        The Crypto Guide
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-px">
                        <div className="relative leading-[24px] inline-block min-w-[115px]">
                          Mark Thompson
                        </div>
                      </div>
                    </div>
                    <div className="w-[195px] flex flex-row items-start justify-start py-0 px-1 box-border text-3xl font-epilogue">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <b className="relative leading-[34px] inline-block min-w-[40px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                            $25
                          </b>
                        </div>
                        <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                            Trade
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[134px] text-base">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <img
                      className="self-stretch h-[245px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-68@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start pt-0 px-[3px] pb-1.5">
                      <div className="flex flex-col items-start justify-start gap-[1px]">
                        <div className="relative leading-[26px] inline-block min-w-[103px]">
                          Digital Assets
                        </div>
                        <div className="relative leading-[26px] inline-block min-w-[109px]">
                          Sophia Adams
                        </div>
                      </div>
                    </div>
                    <div className="w-[194px] flex flex-row items-start justify-start py-0 px-[5px] box-border text-3xl font-epilogue">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <b className="relative leading-[34px] inline-block min-w-[37px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                            $13
                          </b>
                        </div>
                        <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                            Trade
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[189px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-base">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[6px]">
                    <img
                      className="self-stretch h-[245px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-72@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0.5 pb-[5px]">
                      <div className="flex flex-col items-start justify-start gap-[2px]">
                        <div className="relative leading-[26px] inline-block min-w-[114px]">
                          Crypto Trading
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-px text-mid">
                          <div className="relative leading-[26px] inline-block min-w-[29px] whitespace-nowrap">
                            $17
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-3xl font-epilogue mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <b className="relative leading-[34px] inline-block min-w-[40px] whitespace-nowrap mq450:text-lg mq450:leading-[27px]">
                          $20
                        </b>
                      </div>
                      <button className="cursor-pointer py-1 px-4 bg-white w-[78px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                        <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
                          Trade
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[551px] flex flex-row items-start justify-between gap-[20px] max-w-full text-sm mq725:flex-wrap">
              <div className="w-[187px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch h-[35px] flex flex-row items-start justify-start gap-[2.3px]">
                  <div className="h-9 flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[6.5px] px-3 pb-[27.5px] border-[1px] border-solid border-lightslategray">
                    <div className="h-0 w-0 relative leading-[22px] inline-block" />
                  </div>
                  <div className="flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start py-[5px] pr-3 pl-[13px] border-[1px] border-solid border-gray-200">
                    <div className="relative leading-[22px] inline-block min-w-[9px]">
                      2
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start py-[5px] pr-3 pl-[13px] border-[1px] border-solid border-gray-200">
                    <div className="relative leading-[22px] inline-block min-w-[9px]">
                      3
                    </div>
                  </div>
                  <div className="h-9 flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[6.5px] px-3 pb-[27.5px] border-[1px] border-solid border-lightslategray">
                    <div className="h-0 w-0 relative leading-[22px] inline-block" />
                  </div>
                  <div className="flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start py-[5px] pr-3 pl-[13px] border-[1px] border-solid border-gray-200">
                    <div className="relative leading-[22px] inline-block min-w-[9px]">
                      5
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2 px-[41px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                <div className="relative text-smi leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[122px]">
                  Explore more books
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Container4 />
      <div className="absolute top-[900px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-[321px] flex flex-row items-start justify-between pt-[21px] pb-[236px] pr-[18px] pl-11 box-border gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[10.7px]">
            <div className="flex flex-row items-start justify-start py-0 px-1 text-lg font-epilogue">
              <b className="relative leading-[28px] inline-block min-w-[116px]">
                Book Format
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[97px]">
                E-book(2,345)
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px]">Audio Book(12,345)</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[106px]">
                Audiobooks(23)
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
            <button className="cursor-pointer py-[7px] pr-[30px] pl-[31px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[91px]">
                Clear Filters
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logo-messenger-1.svg"
          />
        </div>
      </div>
      <Container3 />
      <Container2 />
      <Container1 />
      <div className="absolute top-[702px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-[321px] flex flex-row items-start justify-between pt-[21px] pb-[19px] pr-5 pl-11 box-border gap-[20px] z-[1]">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[10.5px]">
            <div className="flex flex-row items-start justify-start py-0 px-1 text-lg font-epilogue">
              <b className="relative leading-[28px] inline-block min-w-[67px]">
                Genres
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[75px]">
                Italian(376)
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[100px]">
                Japanese(376)
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[104px]">
                Fiction (10,500)
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
              </div>
              <div className="relative leading-[22px] inline-block min-w-[106px]">
                Biographies(23)
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-6 w-6 relative rounded-xl object-contain"
          loading="lazy"
          alt=""
          src="/image-61@2x.png"
        />
      </div>
      <Container />
      <div className="absolute top-[338px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-[321px] flex flex-row items-start justify-between pt-[21px] pb-5 pr-[25px] pl-[46px] box-border gap-[20px] z-[3] text-lg font-epilogue">
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <b className="relative leading-[28px] inline-block min-w-[105px]">
              Book genre
            </b>
          </div>
          <CheckboxContainer />
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <img
            className="w-3 h-3 relative overflow-hidden shrink-0"
            alt=""
            src="/caret-sm-up-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
