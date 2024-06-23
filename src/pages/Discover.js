import Container9 from "../components/Container9";
import Container8 from "../components/Container8";
import Container7 from "../components/Container7";
import PersonalizedPicksTitle from "../components/PersonalizedPicksTitle";
import FrameComponent from "../components/FrameComponent";
import Container6 from "../components/Container6";

const Discover = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[1px] leading-[normal] tracking-[normal]">
      <Container9 />
      <main className="self-stretch flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full">
        <Container8 />
        <Container7 />
        <section className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-col items-start justify-start pt-11 pb-[63px] pr-[42px] pl-[45px] box-border gap-[59px] shrink-0 max-w-full mt-[-1px] lg:pt-11 lg:pb-[41px] lg:box-border mq450:pb-5 mq450:box-border mq750:gap-[29px] mq750:pl-[22px] mq750:pr-[21px] mq750:box-border mq1050:pb-[27px] mq1050:box-border">
          <PersonalizedPicksTitle />
          <FrameComponent />
        </section>
        <Container6 />
        <section className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-row items-start justify-between pt-[31px] pb-[25px] pr-[122px] pl-[120px] box-border shrink-0 max-w-full gap-[20px] z-[2] mt-[-1px] text-left text-base text-gray-200 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[61px] mq750:box-border mq1050:flex-wrap">
          <div className="w-[394px] flex flex-row items-start justify-start gap-[46px] max-w-full mq450:flex-wrap mq450:gap-[23px]">
            <div className="relative leading-[26px] inline-block min-w-[86px]">
              Decentraliz
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[170px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                <div className="relative leading-[26px] inline-block min-w-[90px]">
                  BookChains
                </div>
                <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[13px] pl-0">
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
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[26px] inline-block min-w-[124px]">
              BookChainSwap
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Discover;
