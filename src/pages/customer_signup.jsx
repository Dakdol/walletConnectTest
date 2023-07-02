import Header from "../components/Header";
import { Link } from "react-router-dom";
import fox from "../images/MetaMask.png";
import Footer from "../components/Footer";
import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";

function CustomerSignup() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  const connectToMetaMask = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsMetaMaskConnected(true);
      // 연결 성공 후 추가 작업 수행
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkMetaMaskAvailability();
  }, []);

  const checkMetaMaskAvailability = async () => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskConnected(true);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center ">
      <Header />

      <div className="w-[321px] h-[30px] mt-[100px] text-[24px] text-[#000000] font-semibold">
        메타마스크로 간편하게 가입해요.
        <div className="absolute w-[300px] h-[60px]  text-[15px] font-light mt-[10px] ">
          <div className="flex justify-center flex-col items-center ">
            배불럭은 이더리움의 스마트컨트랙트를 활용한
          </div>
          <div className="flex justify-center flex-col items-center ">
            새로운 배달앱 입니다!
          </div>
          <div className="">고객님은</div>
          <div className="text-[purple] font-bold ml-[60px] mt-[-23px]">
            저렴한 배달료로 맛있게
          </div>
          <div className="ml-[204px] mt-[-23px]">즐길 수 있어요!</div>
          <div className="text-[purple] text-xl font-bold ml-[60px] mt-[50px]">
            여우를 눌러 가입
          </div>
          <div className=" text-xl font-bold ml-[192px] mt-[-28px]">
            해 보세요!
          </div>
          {isMetaMaskConnected ? (
            <Link to="../customer_walletConnect">
              <button>
                <img
                  src={fox}
                  alt="logo"
                  className="w-[200px] h-[200px]  flex flex-col   ml-[60px] "
                />
              </button>
            </Link>
          ) : (
            <button onClick={connectToMetaMask}>
              <img
                src={fox}
                alt="logo"
                className="w-[200px] h-[200px]  flex flex-col   ml-[60px] "
              />
            </button>
          )}
          <div className="text-sm  mt-[160px] flex  justify-center ml-[20px]">
            이용약관
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerSignup;
