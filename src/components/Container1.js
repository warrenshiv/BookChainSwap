import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[93px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-full flex flex-row items-end justify-between pt-[13px] pb-2 pr-[27px] pl-12 box-border gap-[20px] max-w-full z-[3] text-left text-mid text-gray-200 font-inter mq725:pl-6 mq725:box-border mq1050:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/house-2.svg"
          />
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[112px]">
            Decentralized
          </a>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-base">
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img
              className="h-[23px] w-[22px] relative rounded object-cover"
              loading="lazy"
              alt=""
              src="/image-56@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[92px]">
                Transparent
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 pb-px pr-10 pl-0 text-base">
        <div className="flex flex-row items-start justify-start gap-[9px]">
          <img
            className="h-5 w-5 relative rounded-3xs object-contain"
            loading="lazy"
            alt=""
            src="/image-63@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[89px]">
              Transaction
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 pb-px pr-2 pl-0">
        <div className="flex flex-row items-start justify-start gap-[2px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/file-folder-1.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[49px]">
              I View
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-3 h-2 relative rounded object-cover"
              alt=""
              src="/image-67@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 pb-1 pr-[7px] pl-0 text-lg font-epilogue">
        <div className="flex flex-row items-start justify-start gap-[18px]">
          <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[96px]">
            @ Manage
          </a>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-3 h-2 relative rounded object-cover"
              alt=""
              src="/image-67@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[11px]">
        <div className="flex flex-row items-start justify-start">
          <img
            className="h-[22px] w-[21px] relative rounded object-cover z-[1]"
            alt=""
            src="/image-70@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[54px]">
              Create
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <img
            className="w-3 h-2 relative rounded object-cover"
            alt=""
            src="/image-67@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8px] text-lg font-epilogue">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-5 h-[21px] relative rounded object-cover"
            loading="lazy"
            alt=""
            src="/image-69@2x.png"
          />
        </div>
        <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[51px]">
          Block
        </a>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
