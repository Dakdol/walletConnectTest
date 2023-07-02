import BacktoMain from "../images/Icon_ArrowBack.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="../customer_first">
      <button>
        <img
          src={BacktoMain}
          alt="ArrowBack"
          className="w-[25px] h-[25px] mt-[40px] mr-[300px]"
        ></img>
      </button>
    </Link>
  );
}

export default Header;
