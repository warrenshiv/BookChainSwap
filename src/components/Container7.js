import DecentralizedSpacer from "./DecentralizedSpacer";
import PropTypes from "prop-types";

const Container7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-row items-end justify-start pt-[47px] pb-[55px] pr-11 pl-[46px] box-border gap-[17px] shrink-0 max-w-full z-[1] mt-[-1px] text-left text-13xl text-gray-200 font-epilogue lg:flex-wrap mq450:pb-9 mq450:box-border mq750:pl-[23px] mq750:pr-[22px] mq750:box-border ${className}`}
    >
      <div className="flex-1 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-row items-end justify-start pt-7 pb-[30px] pr-[22px] pl-[30px] box-border gap-[40px] min-w-[328px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[30px] box-border min-w-[115px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                Decentrali
              </h1>
            </div>
            <DecentralizedSpacer
              zed="zed"
              decentralizedUser="Decentralized user"
            />
          </div>
        </div>
        <img
          className="h-[239px] flex-1 relative rounded max-w-full overflow-hidden object-cover min-w-[110px]"
          loading="lazy"
          alt=""
          src="/image-42@2x.png"
        />
      </div>
      <div className="flex-[0.9974] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-row items-end justify-between pt-8 pb-[30px] pr-[23px] pl-[30px] box-border min-w-[328px] max-w-full gap-[20px] mq450:flex-wrap mq450:flex-1">
        <div className="h-[179px] flex flex-col items-start justify-start min-w-[144px] mq450:flex-1">
          <DecentralizedSpacer
            zed="Book"
            decentralizedUser="by Author Unknown"
            propGap="unset"
            propMarginTop="unset"
            propMinWidth="81px"
          />
        </div>
        <img
          className="h-[237px] w-[167px] relative rounded object-cover mq450:flex-1"
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
      </div>
      <div className="flex-[0.9741] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-col items-end justify-start pt-[30px] px-[31px] pb-[31px] box-border gap-[10px] min-w-[328px] max-w-full text-center mq450:flex-1">
        <img
          className="self-stretch h-[154px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/image-32@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Special Summer Offer
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] text-sm font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative leading-[22px]">
                Apply code "SUMMER25" at checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Container7.propTypes = {
  className: PropTypes.string,
};

export default Container7;
