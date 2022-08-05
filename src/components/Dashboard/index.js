import "./index.css";
import { Line } from "rc-progress";
import Popup from "reactjs-popup";
import { MdShoppingCart } from "react-icons/md";
import { MdDirectionsBus } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
const Dashboard = () => (
  <div className="background-container">
    <div className="main-container">
      <div className="side-header">
        <div>
          <div class="item">
            <span class="notify-badge">9</span>
            <img
              src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659688728/Bitmap_aizdob.png"
              alt="logo"
              className="usericon"
            />
          </div>
          <h1 className="Celeste">Hi, User</h1>
          <p className="Celestegmail">user@gmail.com</p>
        </div>
        <ul className="userwish2">
          <li className="list">Dashboard</li>
          <li className="list list2">Gastos</li>
          <li className="list list2">Billetera</li>
          <li className="list list2">Resumen</li>
          <li className="list list2">Cuentas</li>
          <li className="list list2">Configuracion</li>
        </ul>
        <button type="button" className="login bu">
          Login
        </button>
      </div>
      <div className="dashboarddisplay">
        <div className="dashboarddisplay1">
          <h1 className="dashboardtext">Dashboard</h1>
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
                  <p className="flowitemtextdate">
                    5:12 pm · Cine Itau del Sol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboarddisplay2">
          <p className="spend">Spend Statistics:</p>
          <div>
            <div className="progressbar">
              <p className="listing">Comida</p>
              <p className="listing1">900.000</p>
            </div>
            <Line
              percent={28}
              strokeWidth={3}
              strokeColor="#31BA96"
              trailColor="#ECEFF5"
              trailWidth={3}
            />
          </div>
          <div>
            <div className="progressbar">
              <p className="listing">Shopping</p>
              <p className="listing1">1300.000</p>
            </div>
            <Line
              percent={44}
              strokeWidth={3}
              strokeColor="#31BA96"
              trailColor="#ECEFF5"
              trailWidth={3}
            />
          </div>
          <div>
            <div className="progressbar">
              <p className="listing">Casa</p>
              <p className="listing1">1100.000</p>
            </div>
            <Line
              percent={36}
              strokeWidth={3}
              strokeColor="#31BA96"
              trailColor="#ECEFF5"
              trailWidth={3}
            />
          </div>
          <div>
            <div className="progressbar">
              <p className="listing">Entrenamiento</p>
              <p className="listing1">450.000</p>
            </div>
            <Line
              percent={24}
              strokeWidth={3}
              strokeColor="#31BA96"
              trailColor="#ECEFF5"
              trailWidth={3}
            />
          </div>
          <div>
            <div className="progressbar">
              <p className="listing">Vehiculo</p>
              <p className="listing1">520.000</p>
            </div>
            <Line
              percent={36}
              strokeWidth={3}
              strokeColor="#31BA96"
              trailColor="#ECEFF5"
              trailWidth={3}
            />
          </div>
          <div className="finalcard">
            <p className="sendtext">Como ahorrar</p>
            <p className="sendpara">
              Activa este metodo para realizar ahorrosy verifica los procesos
              que te beneficien
            </p>
            <p className="send">SEND TIPS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
