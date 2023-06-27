import BacktoMain from "../images/Icon_ArrowBack.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="../main">
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
// width: 11.670000076293945px
// height: 19.799999237060547px
// top: 2.100006103515625px

{
  /* <Link to="/menuEdit">
  <button>MenuEdit</button>
</Link>; */
}
