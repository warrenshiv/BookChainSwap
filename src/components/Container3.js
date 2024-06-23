import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Container3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBookChainSwapTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white w-full flex flex-row items-start justify-between pt-[18px] pb-[17px] pr-[45px] pl-[49px] box-border gap-[20px] max-w-full text-left text-12xl text-gray-200 font-inter mq725:pl-6 mq725:pr-[22px] mq725:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 font-epilogue">
        <a
          className="[text-decoration:none] relative leading-[48px] font-bold text-[inherit] whitespace-nowrap cursor-pointer"
          onClick={onBookChainSwapTextClick}
        >
          BookChainSwap
        </a>
      </div>
      <div className="w-[567px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-base mq975:w-[129px]">
        <div className="w-[438px] h-[47px] flex flex-row items-start justify-start gap-[4px] max-w-full mq975:hidden">
          <div className="h-[49px] flex-1 rounded bg-white box-border flex flex-row items-start justify-start pt-[11px] px-4 pb-2.5 max-w-full border-[1px] border-solid border-lightslategray">
            <input
              className="w-[53px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[26px] relative leading-[26px] text-silver-100 text-left inline-block p-0"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="h-[49px] w-12 rounded bg-cadetblue-100 box-border flex flex-row items-start justify-start pt-[11px] px-4 pb-9 border-[1px] border-solid border-lightslategray">
            <div className="h-0 w-0 relative leading-[26px] inline-block" />
          </div>
        </div>
      </div>
      <div className="rounded bg-white overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[35px] pl-9 text-lg border-[1px] border-solid border-gray-200">
        <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[57px] whitespace-nowrap">
          $35.19
        </a>
      </div>
    </header>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
