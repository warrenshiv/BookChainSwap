import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  return (
    <footer
      className={`absolute top-[1355px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white w-full flex flex-row items-start justify-between pt-[33px] pb-[25px] pr-[117px] pl-[120px] box-border max-w-full gap-[20px] z-[2] text-left text-base text-gray-200 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq975:flex-wrap mq725:pl-[60px] mq725:pr-[58px] mq725:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[19px] max-w-full mq725:flex-wrap">
        <b className="relative text-lg leading-[28px] inline-block font-epilogue min-w-[129px]">
          Decentralized
        </b>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mini">
          <div className="relative leading-[24px] inline-block min-w-[116px]">
            BookChainSwap
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[26px] inline-block min-w-[58px]">
            Literary
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[26px] inline-block min-w-[61px]">
            Join the
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mini">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-3.5 h-[15px] relative rounded object-cover"
              loading="lazy"
              alt=""
              src="/image-65@2x.png"
            />
          </div>
          <div className="relative leading-[24px] inline-block min-w-[116px]">
            BookChainSwap
          </div>
        </div>
      </div>
    </footer>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
