import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDecentralizeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-gray-100 flex flex-row items-start justify-between pt-[22px] pb-[21px] pr-[29px] pl-[33px] gap-[20px] text-left text-5xl text-gray-200 font-epilogue ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <a
          className="[text-decoration:none] relative leading-[36px] font-bold text-[inherit] whitespace-nowrap cursor-pointer"
          onClick={onDecentralizeTextClick}
        >
          Decentralized
        </a>
      </div>
      <div className="flex flex-row items-start justify-start gap-[10px]">
        <button className="cursor-pointer py-1.5 pr-[22px] pl-[23px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <a className="[text-decoration:none] relative text-base leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[71px]">
            Join Now
          </a>
        </button>
        <button className="cursor-pointer py-[7px] pr-[31px] pl-[33px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
          <a className="[text-decoration:none] relative text-mini leading-[24px] font-inter text-gray-200 text-left inline-block min-w-[44px]">
            Log In
          </a>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
