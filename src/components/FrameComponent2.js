import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  image34,
  epicFantasyAdventure,
  mysteryNovelByA,
  price17,
  propAlignSelf,
  propFlex,
  propHeight,
  propWidth,
  propPadding,
  propDisplay,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      height: propHeight,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propFlex, propHeight, propWidth, propPadding]);

  const mysteryNovelByStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] text-left text-mini text-gray-200 font-inter ${className}`}
      style={frameDivStyle}
    >
      <img
        className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={image34}
      />
      <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-2">
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <div className="relative leading-[24px]">{epicFantasyAdventure}</div>
          <div className="relative leading-[24px]" style={mysteryNovelByStyle}>
            {mysteryNovelByA}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[3px] text-lgi font-epilogue">
        <div className="flex flex-row items-start justify-start gap-[10.5px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <b className="relative leading-[32px] inline-block min-w-[91px]">
              {price17}
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
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  image34: PropTypes.string,
  epicFantasyAdventure: PropTypes.string,
  mysteryNovelByA: PropTypes.string,
  price17: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent2;
