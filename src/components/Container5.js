import PropTypes from "prop-types";

const Container5 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white flex flex-row items-end justify-center pt-4 pb-[15px] pr-5 pl-[239px] box-border gap-[28px] top-[0] z-[99] sticky max-w-full mq450:pl-5 mq450:box-border mq750:pl-[59px] mq750:box-border mq1125:pl-[119px] mq1125:box-border ${className}`}
    >
      <div className="h-[52px] w-[676px] flex flex-col items-start justify-start py-0 pr-8 pl-0 box-border max-w-full">
        <div className="self-stretch h-[54px] rounded bg-white box-border flex flex-row items-start justify-between pt-[14.5px] pb-[13.5px] pr-[21px] pl-5 gap-[20px] border-[1px] border-solid border-lightslategray">
          <input
            className="w-[121px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-6 relative leading-[24px] text-silver-100 text-left inline-block whitespace-nowrap p-0"
            placeholder="Search for books"
            type="text"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/search.svg"
          />
        </div>
      </div>
      <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/home-1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chat-3-1.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/umbrella-1.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
        <img
          className="w-11 h-11 relative rounded-3xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/avatar-1@2x.png"
        />
      </div>
    </header>
  );
};

Container5.propTypes = {
  className: PropTypes.string,
};

export default Container5;
