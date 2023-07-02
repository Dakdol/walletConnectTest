import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function CustomerWalletConnect() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" w-[321px] overflow-y-auto h-[800px] ">
        <div className="flex flex-col justify-start items-center">
          <div className=" absolute w-[321px] h-[30px] mt-[158px] text-[26px] text-[#000000] font-semibold">
            메타마스크 연결에 성공했어요!
          </div>
          <div className="absolute w-[300px] h-[60px] mt-[206px] text-[20px] font-light">
            <div className="flex justify-center flex-col items-center ">
              <div>안전한 배달을 위해</div>
              <div>고객님의 추가 정보를 입력해주세요!</div>
            </div>
          </div>
          <div className="absolute w-[314px] h-[59px] mt-[340px] text-[15px]  opacity-40">
            닉네임
          </div>
          <input
            type="text"
            className="w-[314px] h-[24px] mt-[380px] text-[16px] font-bold text-black border-b-[0.5px] border-black"
          />
          <div className="absolute w-[314px] h-[59px] mt-[443px] text-[15px]  opacity-40">
            기본 배송지
          </div>
          <input
            type="text"
            className="w-[314px] h-[24px] mt-[75px] text-[16px] font-bold text-black border-b-[0.5px] border-yellow-500"
          />

          <div className="absolute w-[139px] h-[21px] mt-[532px] text-[14px] ml-[-175px]  text-[#AA3FFF]">
            비밀번호는 필요없나요?
          </div>
          <Link to="../customer_main">
            <button className="absolute bg-lightYellow mt-[120px] ml-[-135px] btn-style">
              주문하러 가기! 🍽
            </button>
          </Link>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CustomerWalletConnect;
{
  /* <div className=" flex  justify-center items-center ml-[-230px] mt-[80px]"></div>
        <Link to="/customer_main">
          <button className="absolute bg-slate-100 btn-style">로그인 🍽</button>
        </Link> */
}
