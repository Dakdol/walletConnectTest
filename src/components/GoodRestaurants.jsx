import pic1 from "../images/kyochon1.png";
import pic2 from "../images/kyochon2.png";
import pic3 from "../images/kyochon3.png";

const GoodRestaurants = () => {
  return (
    <div>
      <img
        src={pic1}
        alt="pic"
        className="  border-[2px] h-[80px] w-[125px]   border-[#2D2D32] ml-[20px] bg-clip-border rounded-tl-lg"
      />
      <img
        src={pic2}
        alt="pic"
        className="  h-[100px] w-[125px]  border-[2px] border-[#2D2D32] ml-[20px] mt-[2px] rounded-bl-lg"
      />

      <img
        src={pic3}
        alt="pic"
        className=" h-[181px] w-[225px]  border-[2px] border-[#2D2D32] ml-[148px] mt-[-182px] rounded-r-lg"
      />
    </div>
  );
};

export default GoodRestaurants;
