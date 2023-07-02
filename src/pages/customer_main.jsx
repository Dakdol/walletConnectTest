import dropDown from "../images/Icon_dropDown.png";
import moneyBag from "../images/Icon_moneyBag.png";
import { useState } from "react";
import Search from "../components/Search";
import RecentOrder from "../components/RecentOrder";
import BottomBar from "../components/bottomBar";
import GoodRestaurants from "../components/GoodRestaurants";

function CustomerMain() {
  return (
    <div className="w-[390px] h-[135px]  text-[24px] text-[#000000] font-semibold  rounded-b-3xl drop-shadow-2xl bg-slate-50 ">
      <div className="border-b-[0.5px]  border-purple absolute w-[250px] text-sm  h-[28px] ml-[70px] mt-[40px] font-light flex  justify-center ">
        서울시 강남구 강남대로
        <button>
          <img
            src={dropDown}
            alt="drop"
            className="w-[25px] h-[25px] mt-[-5px] "
          ></img>
        </button>
      </div>
      <div className=" w-[170px] h-[21px] mt-[100px] ml-[20px] text-sm ">
        뭐 먹을까? 배고픈 제네시스!
      </div>
      <div className=" w-[170px] h-[21px] mt-[-21px] ml-[200px] text-sm flex  justify-end">
        1000 BB
        <img
          src={moneyBag}
          alt="Bag"
          className="w-[25px] h-[25px] mt-[px]"
        ></img>
      </div>
      <section className="w-[350px] h-[32px] mt-[24px] ml-[20px]  rounded-xl border-[0.5px] border-purple text-[15px]  opacity-40">
        <Search />
      </section>
      <div className="w-[390px] h-[180px]   mt-[15px] mr-[100px] drop-shadow-l bg-slate-50"></div>
      <div className="ml-[30px] mt-[-160px]">카테고리</div>
      <div className="w-[390px] h-[180px]   mt-[140px] mr-[100px] drop-shadow-l flex items-stretch bg-slate-50"></div>
      <div className="flex items-stretch mt-[-320px] overflow-auto ">
        <RecentOrder storeName="가게 이름" starCount="3" menuName="메뉴 이름" />
        <RecentOrder storeName="가게 이름" starCount="3" menuName="메뉴 이름" />
      </div>
      <div className="ml-[30px] mt-[-140px] ">최근에 주문한 음식</div>
      <div className="w-[390px] h-[180px]   mt-[140px] mr-[100px] drop-shadow-l flex items-stretch bg-slate-50"></div>
      <div className="ml-[30px] mt-[-165px] ">우리동네 맛집</div>
      <div className="overflow-auto w-[380px] h-[150px] flex flex-col">
        <div></div>
        <GoodRestaurants />
      </div>
      <BottomBar />
    </div>
  );
}

export default CustomerMain;
// width: 390px
// height: 180px
