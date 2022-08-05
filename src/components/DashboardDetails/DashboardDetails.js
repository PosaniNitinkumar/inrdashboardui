import "./DashboardDetails.css";
import { MdShoppingCart } from "react-icons/md";
import { MdDirectionsBus } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiDish } from "react-icons/bi";

const DashboardDetails = () => (
  <div>
    <p className="datetext">01-15 July, 2022</p>
    <div className="second">
      <div className="dots">
        <h1 className="hoy">Hoy</h1>
        <div>
          <img
            src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
            alt="logo"
            className="dotimage"
          />
          <img
            src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
            alt="logo"
            className="dotimage"
          />
          <img
            src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
            alt="logo"
            className="dotimage"
          />
        </div>
      </div>
      <hr className="line" />
      <div className="iconcontainer">
        <div>
          <MdShoppingCart className="MdOutlineShoppingCarticon" />
        </div>
        <div className="flow">
          <div className="iconcontainer2">
            <p className="flowitemtext">Compras</p>
            <p className="icondetails2">-320.000</p>
          </div>
          <p className="flowitemtextdate">5:12 pm · Fortis Luque</p>
        </div>
      </div>
      <div className="iconcontainer">
        <div>
          <MdDirectionsBus className="MdOutlineShoppingCarticon icon2" />
        </div>

        <div className="flow">
          <div className="iconcontainer2">
            <p className="flowitemtext">Transporte</p>
            <p className="icondetails2">-15.000</p>
          </div>
          <p className="flowitemtextdate">5:12 pm · Bolt hasta trabajo</p>
        </div>
      </div>
      <div className="iconcontainer">
        <div>
          <IoMdHome className="MdOutlineShoppingCarticon icon3" />
        </div>
        <div className="flow">
          <div className="iconcontainer2">
            <p className="flowitemtext">Casa</p>
            <p className="icondetails2">-180.000</p>
          </div>
          <p className="flowitemtextdate">5:12 pm · Remodelacion pared</p>
        </div>
      </div>
      <div className="second">
        <div className="dots">
          <h1 className="hoy">Lunes, 11 July 2022</h1>
          <div>
            <img
              src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
              alt="logo"
              className="dotimage"
            />
            <img
              src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
              alt="logo"
              className="dotimage"
            />
            <img
              src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659693250/oval_1_waagcr.png"
              alt="logo"
              className="dotimage"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="iconcontainer">
          <div>
            <BiDish className="MdOutlineShoppingCarticon icon4" />
          </div>
          <div className="flow">
            <div className="iconcontainer2">
              <p className="flowitemtext">Comida</p>
              <p className="icondetails2">-150.000</p>
            </div>
            <p className="flowitemtextdate">5:12 pm · Plaza Madero</p>
          </div>
        </div>
        <div className="iconcontainer">
          <div>
            <AiFillPlayCircle className="MdOutlineShoppingCarticon icon5" />
          </div>

          <div className="flow">
            <div className="iconcontainer2">
              <p className="flowitemtext">Entretenimiento</p>
              <p className="icondetails2">-70.000</p>
            </div>
            <p className="flowitemtextdate">5:12 pm · Cine Itau del Sol</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardDetails;
