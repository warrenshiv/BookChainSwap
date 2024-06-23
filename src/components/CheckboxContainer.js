import PropTypes from "prop-types";

const CheckboxContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[3px] text-left text-mid text-gray-200 font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <input className="m-0 h-[26px] w-6" type="checkbox" />
        <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[58px]">
          Printed
        </a>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="w-6 h-[25px] relative">
            <input
              className="m-0 absolute top-[1px] left-[0px] w-6 h-6 overflow-hidden"
              type="checkbox"
            />
            <input
              className="m-0 absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[1]"
              type="checkbox"
            />
          </div>
        </div>
        <a className="[text-decoration:none] relative leading-[26px] text-[inherit] inline-block min-w-[51px]">
          Digital
        </a>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <input className="m-0 h-[26px] w-6" type="checkbox" />
        <div className="relative leading-[26px] inline-block min-w-[96px]">
          Audiobooks
        </div>
      </div>
    </div>
  );
};

CheckboxContainer.propTypes = {
  className: PropTypes.string,
};

export default CheckboxContainer;
