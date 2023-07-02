import { Link } from "react-router-dom";
import logo from "../images/BBLogo.png";

function Main() {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="w-[340px] h-[202px] mt-[180px] flex flex-col   ml-[25px]"
      />
      <div className=" flex flex-col justify-center items-center ml-[-275px] mt-[240px]">
        <Link to="/signup">
          <button className="absolute bg-lightYellow btn-style">
            회원가입🧾
          </button>
        </Link>

        <div className=" flex  justify-center items-center ml-[-230px] mt-[80px]"></div>
        <Link to="/customer_main">
          <button className="absolute bg-slate-100 btn-style">로그인🧾</button>
        </Link>
      </div>
    </div>
  );
}
export default Main;

// width: 340px
// height: 202.6802215576172px
// top: -687px
// left: -3393px

// import { Link } from "react-router-dom";

// function Main() {
//   return (
//     <div className=" min-h-screen min-w-full flex flex-col justify-center items-center">
//       <Link to="/walletConnect">
//         <button>walletConnect</button>
//       </Link>
//       <Link to="/home">
//         <button>home</button>
//       </Link>
//       <Link to="/main">
//         <button>main</button>
//       </Link>
//       <Link to="/signup">
//         <button>signup</button>
//       </Link>
//       <Link to="/fox">
//         <button>fox</button>
//       </Link>
//     </div>

//   );
// }
// export default Main;
