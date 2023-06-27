import dropDown from "../images/Icon_dropDown.png";
import moneyBag from "../images/Icon_moneyBag.png";
import { useState } from "react";

function Home() {
  return (
    <div className="w-[390px] h-[135px]  text-[24px] text-[#000000] font-semibold  rounded-b-3xl drop-shadow-2xl bg-yellow-400">
      <div className="border-b-[0.5px] bg-red-300 border-purple absolute w-[250px] text-sm  h-[28px] ml-[70px] mt-[40px] font-light flex  justify-center ">
        서울시 강남구 강남대로
        <button>
          <img
            src={dropDown}
            alt="drop"
            className="w-[25px] h-[25px] mt-[-5px] "
          ></img>
        </button>
      </div>
      <div className="bg-yellow-500 w-[170px] h-[21px] mt-[100px] ml-[20px] text-sm ">
        뭐 먹을까? 배고픈 제네시스!
      </div>
      <div className="bg-yellow-500 w-[170px] h-[21px] mt-[-21px] ml-[200px] text-sm flex  justify-end">
        1000 BB
        <img
          src={moneyBag}
          alt="Bag"
          className="w-[25px] h-[25px] mt-[px]"
        ></img>
      </div>
      <section className="w-[350px] h-[32px] mt-[24px] ml-[20px]  rounded-xl border-[0.5px] border-purple text-[15px]  opacity-40">
        메뉴, 가게 이름으로 검색
        <input
          type="text"
          className="w-[314px] h-[24px] mt-[20px] text-[16px] font-bold text-black border-b-[0.5px] border-black"
        />
      </section>
    </div>
  );
}

export default Home;
