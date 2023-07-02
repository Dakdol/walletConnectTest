import star from "../images/Icon_star.png";
import kyologo from "../images/kyochonLogo.png";

const RecentOrder = (props) => {
  return (
    <div className="shrink-0  bg-white w-[253px] h-[100px] flex justify-between  items-center  p-[10px] ml-6 mt-[200px] mr-4 shadow-md rounded-lg border-[2px] border-[#2D2D32]">
      <div className="flex flex-col justify-start items-start">
        <div
          className="flex justify-center font-agothic16   border-b-[1px] border-purple"
          style={{ fontSize: "16px" }}
        >
          {props.storeName}
        </div>
        <div className="flex justify-center items-center mt-2">
          {[...Array(parseInt(props.starCount))].map((_, i) => (
            // <AiFillStar key={i} size={24} color="FFD84D" />
            <img src={star} alt="star" width={20} />
          ))}
        </div>
        <div
          className="flex justify-center font-agothic13 mt-2 text-darkGray "
          style={{ fontSize: "14px" }}
        >
          {props.menuName}
        </div>
      </div>
      <div>
        <img src={kyologo} alt="pic" className="w-[80px] h-[80px] " />
      </div>
    </div>
  );
};

export default RecentOrder;

const menuList = [
  {
    menuName: "사과",
    menuFrom: "국내산",
    menuPrice: "12000",
    menuImage: "../images/orange.png",
    ownerRecommend: true,
  },
  {
    menuName: "복숭이",
    menuFrom: "캐나다산",
    menuPrice: "17000",
    menuImage: "../images/orange.png",
    ownerRecommend: false,
  },
];

<div
  className="flex w-[390px] h-[140px] bg-blue-100 justify-start items-center overflow-x-scroll 
        "
>
  {menuList.map((v, i) => (
    <RecentOrder
      key={i}
      storeName={menuList[i].menuName}
      starCount="3"
      menuName={menuList[i].menuName}
    />
  ))}
</div>;
