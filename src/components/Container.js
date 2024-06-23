import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[504px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-[321px] flex flex-col items-start justify-start pt-5 pb-[19px] pr-5 pl-11 box-border gap-[10.4px] z-[2] text-left text-sm text-gray-200 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[11.6px]">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 text-lg font-epilogue">
            <b className="relative leading-[28px] inline-block min-w-[118px]">
              Filter results
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[85px]">
              Trans(barent
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[88px]">
              Explore B(ka)
            </div>
          </div>
        </div>
        <img
          className="h-[25px] w-[25px] relative rounded-smi object-contain"
          loading="lazy"
          alt=""
          src="/image-64@2x.png"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
        </div>
        <div className="relative leading-[22px]">Decentralized(stings</div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-4 h-4 relative rounded-[50%] bg-gray-300 box-border border-[0px] border-solid border-dimgray" />
        </div>
        <div className="relative leading-[22px] inline-block min-w-[77px]">
          Availabl*3()
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
