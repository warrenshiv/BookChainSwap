import { useCallback } from "react";
import Container5 from "../components/Container5";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onDecentralizTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[61.5px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq750:gap-[31px]">
      <Container5 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1122px] flex flex-col items-start justify-start gap-[59px] max-w-full text-left text-[34px] text-gray-200 font-epilogue mq750:gap-[29px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
            <div className="w-[1082px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[654px] flex flex-row items-end justify-start gap-[62px] max-w-full mq450:gap-[15px] mq750:flex-wrap mq750:gap-[31px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[214px] mq750:flex-1">
                  <img
                    className="w-[214px] h-[214px] relative rounded-[107px] object-cover mq750:self-stretch mq750:w-auto"
                    loading="lazy"
                    alt=""
                    src="/image-74@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-[41px] min-w-[246px] max-w-full mq450:gap-[20px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[49px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
                          <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-xl mq450:leading-[29px] mq1050:text-[27px] mq1050:leading-[38px]">
                            Decentralized
                          </h1>
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-base font-inter">
                            <div className="relative leading-[26px] inline-block min-w-[82px]">
                              Edit Profile
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-mid leading-[26px] font-inter text-dimgray">
                        Blockchain-based profiles
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-mid text-dimgray font-inter">
                      <div className="flex flex-row items-start justify-start gap-[21px] max-w-full mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[5px] text-gray-200">
                          <div className="relative leading-[26px] inline-block min-w-[27px]">
                            112
                          </div>
                          <div className="relative leading-[26px] text-dimgray inline-block min-w-[76px]">
                            Followers
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-0 gap-[7px]">
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-[21px] h-4 relative rounded object-cover"
                              loading="lazy"
                              alt=""
                              src="/image-78@2x.png"
                            />
                          </div>
                          <div className="relative leading-[26px] inline-block min-w-[50px]">
                            Books
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/sofa-1.svg"
                            />
                          </div>
                          <div className="relative leading-[26px] inline-block min-w-[71px]">
                            Collectio
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-base font-inter mq450:flex-wrap">
                    <button className="cursor-pointer [border:none] py-[13.5px] px-[63px] bg-cadetblue-100 flex-[0.7761] rounded overflow-hidden flex flex-row items-start justify-start box-border min-w-[117px] hover:bg-cadetblue-200 mq450:flex-1">
                      <div className="relative text-mid leading-[26px] font-inter text-white text-left inline-block min-w-[52px]">
                        Follow
                      </div>
                    </button>
                    <div className="flex-1 rounded bg-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[54px] pl-[55px] min-w-[117px] border-[1px] border-solid border-gray-200">
                      <div className="relative leading-[26px] inline-block min-w-[69px]">
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full text-mid text-dimgray font-inter mq750:gap-[18px]">
              <div className="w-[1103px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[301px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative leading-[26px] text-gray-200 inline-block min-w-[41px]">
                    Book
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
                    <div className="relative leading-[26px] inline-block min-w-[41px]">
                      Book
                    </div>
                  </div>
                  <div className="relative leading-[26px] inline-block min-w-[41px]">
                    Book
                  </div>
                </div>
              </div>
              <div className="self-stretch grid flex-row items-start justify-start gap-[18px] max-w-full grid-cols-[repeat(3,_minmax(271px,_1fr))] mq750:grid-cols-[minmax(271px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(271px,_471px))]">
                <div className="h-[569px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <img
                    className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-77@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 box-border max-w-full">
                    <img
                      className="h-[274px] flex-1 relative rounded max-w-full overflow-hidden object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-75@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[573px] flex flex-col items-start justify-start gap-[19px] max-w-full">
                  <img
                    className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-76@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-73@2x.png"
                  />
                </div>
                <div className="h-[573px] flex flex-col items-start justify-start gap-[19px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                    <img
                      className="h-[277px] flex-1 relative rounded max-w-full overflow-hidden object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-79@2x.png"
                    />
                  </div>
                  <img
                    className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-80@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer py-3 px-[41px] bg-white rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="relative text-mid leading-[26px] font-inter text-gray-200 text-left inline-block min-w-[86px]">
                Load more
              </div>
            </button>
          </div>
        </section>
      </main>
      <footer className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white flex flex-row items-start justify-between pt-8 pb-6 pr-[114px] pl-[120px] box-border max-w-full gap-[20px] text-left text-lgi text-gray-200 font-epilogue mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[57px] mq750:box-border mq1050:flex-wrap mq1050:justify-center">
        <div className="w-[395px] flex flex-row items-start justify-center gap-[20px] max-w-full mq450:flex-wrap">
          <b
            className="relative leading-[30px] inline-block min-w-[112px] cursor-pointer"
            onClick={onDecentralizTextClick}
          >
            Decentraliz
          </b>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[171px] text-base font-inter">
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px]">
              <div className="relative leading-[26px] inline-block min-w-[90px]">
                BookChains
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0">
                <div className="relative leading-[26px] inline-block min-w-[58px]">
                  Literary
                </div>
              </div>
              <div className="relative leading-[26px] inline-block min-w-[61px]">
                Join the
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-mid font-inter">
          <div className="relative leading-[26px]">BookChainSwap</div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
