import "./index.css";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import Axios from "axios";
import Cookies from "js-cookie";
import Spend from "../SpendStatistics/Spend";
import DashboardDetails from "../DashboardDetails/DashboardDetails";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Dashboard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedin] = useState(true);

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    setLoggedin(true);
    alert("succesfully Logged Out");
    setUsername("");
    setEmail("");
  };

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  const signUpButton = async () => {
    await Axios.post("https://inrdashboardui.herokuapp.com/users/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then(() => alert("succesful sign up"))
      .catch((error) => alert(error.response.data.message));
  };

  const signInButton = () => {
    Axios.post("https://inrdashboardui.herokuapp.com/users/signin", {
      email: email,
      password: password,
    })
      .then((data) =>
        Cookies.set("jwt_token", data.data.token, {
          expires: 30,
        })
      )
      .then(() => setLoggedin(false))
      .then(() => alert("succesful sign in"))
      .catch((error) => alert(error.response.data.message));
  };

  return (
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
            <p className="Celestegmail">email</p>
          </div>
          <ul className="userwish2">
            <li className="list">Dashboard</li>
            <li className="list list2">Gastos</li>
            <li className="list list2">Billetera</li>
            <li className="list list2">Resumen</li>
            <li className="list list2">Cuentas</li>
            <li className="list list2">Configuracion</li>
          </ul>
          <div className="popup-container">
            {isLoggedIn ? (
              <Popup
                modal
                trigger={
                  <button type="button" className="login bu">
                    Login
                  </button>
                }
              >
                {(close) => (
                  <div className="popcontent">
                    <div className="smoke">
                      <img
                        src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659639139/Vector_idvcjd.png"
                        alt="smokelogo"
                        className="smokeimagea"
                      />
                      <img
                        src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659708068/Vector_1_t9bntq.png"
                        alt="smokelogo"
                        className="smokeimage"
                      />
                    </div>
                    <div className="App">
                      <div className="container">
                        <p className="email">Username</p>
                        <input
                          className="container_input"
                          type="text"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        />
                        <p className="email">Email</p>
                        <input
                          className="container_input"
                          type="text"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                        <p className="email">Password</p>
                        <input
                          type="number"
                          className="container_input"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                        <div className="button_container">
                          <button onClick={signUpButton} className="button">
                            Sign up
                          </button>
                          <button onClick={signInButton} className="button">
                            Sign in
                          </button>
                          <button
                            type="button"
                            className="button"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            ) : (
              <button
                type="button"
                className="login bu"
                onClick={onClickLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
        <div className="dashboarddisplay">
          <div className="dashboarddisplay1">
            <div className="dashboardcontainer">
              <h1 className="dashboardtext">Dashboard</h1>
              <div className="notifi_con">
                <img
                  src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659760480/img1_eo0cua.png"
                  alt=""
                  className="notifi"
                />
                <img
                  src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659760480/Bitmap-1_hwcekl.png"
                  alt=""
                  className="notifi"
                />
                <img
                  src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659760480/Bitmap_mx14hn.png"
                  alt=""
                  className="notifi"
                />
                <AiOutlinePlusCircle className="addicon" />
              </div>
            </div>

            {isLoggedIn ? <h1>Sign in to get data</h1> : <DashboardDetails />}
          </div>
          <div className="dashboarddisplay2">
            <p className="spend">Spend Statistics:</p>
            {isLoggedIn ? <h1>Sign in to get data</h1> : <Spend />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
