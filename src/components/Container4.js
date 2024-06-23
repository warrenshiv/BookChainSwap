import PropTypes from "prop-types";

const Container4 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[145px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-full flex flex-col items-start justify-start pt-[33px] px-[45px] pb-[17px] box-border gap-[13.5px] max-w-full z-[2] text-left text-mid text-gray-200 font-inter mq975:pl-[22px] mq975:pr-[22px] mq975:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-1 pl-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/house-2.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[52px]">
              Decen
            </a>
          </div>
          <div className="relative text-base leading-[26px] inline-block min-w-[86px]">
            Non-fiction
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-mini">
            <div className="relative leading-[24px] inline-block min-w-[116px]">
              Personal growth
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-14xl font-epilogue">
        <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit mq450:text-xl mq450:leading-[28px] mq975:text-7xl mq975:leading-[37px]">
          Self-development books
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px] max-w-full mq725:flex-wrap">
        <button className="cursor-pointer py-[7px] px-9 bg-white rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[92px]">
            Mindfulness
          </div>
        </button>
        <button className="cursor-pointer py-[7px] pr-[11px] pl-[13px] bg-white w-[90px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[64px]">
            Success
          </div>
        </button>
        <button className="cursor-pointer py-[9px] px-6 bg-white rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="relative text-sm leading-[22px] font-inter text-gray-200 text-left inline-block min-w-[96px]">
            Empowerment
          </div>
        </button>
        <button className="cursor-pointer py-[7px] pr-9 pl-[38px] bg-white rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[40px]">
            Drive
          </div>
        </button>
        <button className="cursor-pointer py-[7px] pr-[17px] pl-[19px] bg-white rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <div className="relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[96px]">
            Connections
          </div>
        </button>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
