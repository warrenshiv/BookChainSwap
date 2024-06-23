import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const PersonalizedPicksTitle = ({ className = "" }) => {
  return (
    <div
      className={`w-[1337px] flex flex-col items-start justify-start gap-[27px] max-w-full text-left text-11xl text-gray-200 font-epilogue ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[50px] mq450:pl-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit mq450:text-lg mq450:leading-[28px] mq1050:text-5xl mq1050:leading-[37px]">
          Personalized Picks
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[20px] text-mini font-inter">
        <div className="h-[341px] w-[207px] flex flex-col items-start justify-end pt-0 pb-px pr-[7px] pl-0 box-border">
          <FrameComponent2
            image34="/image-34@2x.png"
            epicFantasyAdventure="Epic fantasy adventure"
            mysteryNovelByA="Mystery novel by a"
            price17="Price: $17"
          />
        </div>
        <FrameComponent2
          image34="/image-39@2x.png"
          epicFantasyAdventure="Unlock the secrets of"
          mysteryNovelByA="Thrilling mystery novel"
          price17="Price: $13"
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="342px"
          propWidth="188px"
          propPadding="unset"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[147px]">
          <div className="self-stretch h-[355px] rounded-mini flex flex-col items-center justify-center py-[7.5px] px-[9px] box-border gap-[16px]">
            <img
              className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/image-51@2x.png"
            />
            <div className="w-[183px] relative leading-[24px] inline-block">
              Let go and find inner Heartwarming story of
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[7px] gap-[17px] text-lgi font-epilogue">
              <b className="relative leading-[32px] inline-block min-w-[92px]">
                Price: $12
              </b>
              <div className="w-[78px] rounded-mini bg-whitesmoke box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[3px] whitespace-nowrap text-smi font-inter border-[1px] border-solid border-gray-200">
                <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[341px] w-52 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[8px]">
          <img
            className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-52@2x.png"
          />
          <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[13px]">
            <div className="flex flex-col items-start justify-start gap-[3px]">
              <div className="relative leading-[24px]">
                Explore the enchanted
              </div>
              <div className="relative leading-[24px]">
                Mystery and adventure
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-1 text-lgi font-epilogue">
            <div className="flex flex-row items-start justify-start gap-[16.5px]">
              <b className="relative leading-[32px] inline-block min-w-[92px]">
                Price: $21
              </b>
              <div className="w-[78px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-smi font-inter">
                <div className="self-stretch rounded-mini bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent2
          image34="/image-33@2x.png"
          epicFantasyAdventure="Uncover memories of the"
          mysteryNovelByA="A gripping tale of"
          price17="Price: $13"
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="341px"
          propWidth="208px"
          propPadding="0px 7px 0px 0px"
          propDisplay="inline-block"
          propMinWidth="122px"
        />
        <FrameComponent2
          image34="/image-30@2x.png"
          epicFantasyAdventure="Discover the haunted"
          mysteryNovelByA="Exciting new release"
          price17="Price: $18"
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="341px"
          propWidth="200px"
          propPadding="unset"
          propDisplay="unset"
          propMinWidth="unset"
        />
      </div>
    </div>
  );
};

PersonalizedPicksTitle.propTypes = {
  className: PropTypes.string,
};

export default PersonalizedPicksTitle;
