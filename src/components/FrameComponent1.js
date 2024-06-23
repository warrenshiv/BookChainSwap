import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  image40,
  meetTheQuirkyProfessor,
  joinGaryAndHisGiant,
  propWidth,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[187px] flex-1 flex flex-col items-end justify-start gap-[11px] text-left text-mini text-gray-200 font-inter ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={image40}
      />
      <div className="flex flex-row items-start justify-end py-0 pr-px pl-0.5">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[24px]">
            {meetTheQuirkyProfessor}
          </div>
          <div className="relative leading-[24px]">{joinGaryAndHisGiant}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  image40: PropTypes.string,
  meetTheQuirkyProfessor: PropTypes.string,
  joinGaryAndHisGiant: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
