import PropTypes from "prop-types";

const Container6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-whitesmoke flex flex-col items-start justify-start pt-[46px] px-[45px] pb-[62px] box-border gap-[20px] shrink-0 max-w-full z-[1] mt-[-1px] text-left text-11xl text-gray-200 font-epilogue mq450:pb-[26px] mq450:box-border mq750:pl-[22px] mq750:pr-[22px] mq750:box-border mq1050:pb-10 mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[25px]">
        <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit mq450:text-lg mq450:leading-[28px] mq1050:text-5xl mq1050:leading-[37px]">
          Inspire your reading journey
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[13px] max-w-full text-2xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[434px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[309px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/image-25@2x.png"
          />
          <div className="self-stretch h-[308px] relative shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-silver-200">
            <h3 className="m-0 absolute top-[208px] left-[22px] text-inherit leading-[32px] font-bold font-inherit mq450:text-mid mq450:leading-[26px]">
              Exciting paperback reads
            </h3>
            <textarea
              className="[border:none] bg-lightgray-200 h-[114px] w-[209px] [outline:none] absolute top-[192px] left-[2px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded flex flex-row items-start justify-start py-7 px-[22px] box-border font-inter text-mini text-gray-200 z-[1]"
              placeholder="Discover more"
              rows={6}
              cols={10}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[1px] min-w-[434px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-[3px] box-border max-w-full">
            <img
              className="h-[266px] flex-1 relative rounded max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/image-36@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
              <div className="shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-lightsteelblue flex flex-col items-start justify-start pt-5 pb-[21px] pr-1 pl-[18px] box-border gap-[3px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit mq450:text-mid mq450:leading-[26px]">
                    Immerse in travel romances
                  </h3>
                </div>
                <div className="rounded bg-lightsteelblue overflow-hidden flex flex-row items-start justify-start py-2 px-[9px] whitespace-nowrap text-sm font-inter">
                  <div className="relative leading-[22px] inline-block min-w-[96px]">
                    Discover more
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[14px] max-w-full mq750:flex-wrap">
              <img
                className="h-[236px] flex-1 relative rounded max-w-full overflow-hidden object-cover min-w-[213px] min-h-[236px]"
                loading="lazy"
                alt=""
                src="/image-29@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[211px] max-w-full">
                <img
                  className="self-stretch h-[237px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-31@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
