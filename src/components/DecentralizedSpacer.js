import { useMemo } from "react";
import PropTypes from "prop-types";

const DecentralizedSpacer = ({
  className = "",
  zed,
  decentralizedUser,
  propGap,
  propMarginTop,
  propMinWidth,
}) => {
  const decentralizedSpacerStyle = useMemo(() => {
    return {
      gap: propGap,
      marginTop: propMarginTop,
    };
  }, [propGap, propMarginTop]);

  const zedStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[1px] mt-[-4px] text-left text-13xl text-gray-200 font-epilogue ${className}`}
      style={decentralizedSpacerStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <h1
          className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block min-w-[58px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]"
          style={zedStyle}
        >
          {zed}
        </h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px] text-mini font-inter">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
          <div className="relative leading-[24px]">{decentralizedUser}</div>
        </div>
        <button className="cursor-pointer py-2 px-5 bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <a className="[text-decoration:none] relative text-mini leading-[24px] font-inter text-gray-200 text-left inline-block min-w-[81px]">
            Learn more
          </a>
        </button>
      </div>
    </div>
  );
};

DecentralizedSpacer.propTypes = {
  className: PropTypes.string,
  zed: PropTypes.string,
  decentralizedUser: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMarginTop: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default DecentralizedSpacer;
