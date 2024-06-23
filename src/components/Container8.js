import PropTypes from "prop-types";

const Container8 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-row items-start justify-between pt-2.5 pb-[11px] pr-[47px] pl-[75px] shrink-0 gap-[20px] z-[2] text-left text-base text-gray-200 font-inter mq750:pl-[37px] mq750:pr-[23px] mq750:box-border mq1050:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pr-[5px] pl-0">
        <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[42px]">
          Mana
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[7px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-5 h-[21px] relative rounded object-cover"
              alt=""
              src="/image-49@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[95px]">
            View listings
          </a>
        </div>
      </div>
      <div className="w-[156px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative rounded object-cover"
              alt=""
              src="/image-46@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[33px]">
            Find
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[30px] pl-0">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[21px] h-5 relative rounded object-cover"
              alt=""
              src="/image-37@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[46px]">
            I View
          </a>
        </div>
      </div>
      <div className="w-[136px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-lg font-epilogue">
        <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[87px]">
          @Explore
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pr-[33px] pl-0">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[21px] h-[21px] relative rounded object-cover"
              alt=""
              src="/image-45@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[51px]">
            Discov
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/local-offer-1.svg"
            />
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[30px]">
            Boo
          </a>
        </div>
      </div>
    </div>
  );
};

Container8.propTypes = {
  className: PropTypes.string,
};

export default Container8;
