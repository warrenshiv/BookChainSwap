import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Container9 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBookChainSwapTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton27ContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <header
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white flex flex-row items-start justify-between pt-4 pb-[17px] pr-[45px] pl-12 box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-12xl text-gray-200 font-epilogue mq750:pl-6 mq750:pr-[22px] mq750:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <a
          className="[text-decoration:none] relative leading-[48px] font-bold text-[inherit] whitespace-nowrap cursor-pointer"
          onClick={onBookChainSwapTextClick}
        >
          BookChainSwap
        </a>
      </div>
      <div className="w-[567px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full text-lg text-white font-inter mq1050:w-[119px]">
        <div className="w-[448px] h-[49px] flex flex-row items-start justify-start gap-[3px] max-w-full mq1050:hidden">
          <div className="h-[51px] flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[13px] px-5 pb-3 max-w-full border-[1px] border-solid border-lightslategray">
            <input
              className="w-[50px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-6 relative leading-[24px] text-silver-100 text-left inline-block p-0"
              placeholder="Search"
              type="text"
            />
          </div>
          <div
            className="self-stretch w-14 rounded bg-cadetblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-end py-[10.5px] px-3.5 box-border relative cursor-pointer"
            onClick={onButton27ContainerClick}
          >
            <div className="self-stretch w-0 relative leading-[28px] inline-block" />
            <img
              className="h-7 w-7 absolute !m-[0] top-[calc(50%_-_14px)] left-[calc(50%_-_14px)] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-[15px] px-9 bg-white rounded overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
        <a className="[text-decoration:none] relative text-lg leading-[28px] font-inter text-gray-200 text-left inline-block min-w-[57px] whitespace-nowrap">
          $35.19
        </a>
      </button>
    </header>
  );
};

Container9.propTypes = {
  className: PropTypes.string,
};

export default Container9;
