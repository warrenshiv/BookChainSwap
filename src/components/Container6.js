import PropTypes from "prop-types";

const Container6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-gray-100 flex flex-row items-end justify-between pt-2 pb-[5px] pr-7 pl-8 box-border max-w-full gap-[20px] z-[1] mt-[-1px] ${className}`}
    >
      <nav className="m-0 w-[705px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full lg:hidden mq450:w-0">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-gray-200 font-inter mq450:hidden">
          <div className="flex flex-col items-start justify-start pt-px pb-0 pr-3.5 pl-0 text-mini">
            <div className="relative leading-[24px] inline-block min-w-[96px] whitespace-nowrap">
              Fiction Books
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[89px]">
              Non-Fiction
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[75px]">
              Children's
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-1.5 pl-0 text-mid">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[64px] whitespace-nowrap">
              Fantasy
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-3.5 pl-0 text-mid">
            <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[64px] whitespace-nowrap">
              Science
            </a>
          </div>
          <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[75px] whitespace-nowrap">
            Art Books
          </a>
        </nav>
      </nav>
      <div className="flex flex-row items-end justify-start gap-[11px]">
        <button className="cursor-pointer py-1.5 pr-[17px] pl-[18px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <a className="[text-decoration:none] relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[79px]">
            List Books
          </a>
        </button>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
          <img
            className="w-7 h-7 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/map-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
