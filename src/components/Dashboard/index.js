import "./index.css";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import Axios from "axios";
import Cookies from "js-cookie";
import Spend from "../SpendStatistics/Spend";
import DashboardDetails from "../DashboardDetails/DashboardDetails";
import { BiShow } from "react-icons/bi";

function Dashboard() {
  /*User Input*/
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*Login/Logout Status*/
  const [isLoggedIn, setLoggedin] = useState(true);

  /*Login/Sign Up Toggle*/
  const [LoginSetUp, setLoginsetup] = useState(true);

  /*Password show Toggle*/
  const [passwordShown, setPasswordShown] = useState(false);

  /*Sign up, Update state and alert the User*/
  const signUpButton = async () => {
    await Axios.post("https://inrdashboardui.herokuapp.com/users/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then(() => alert("succesful sign up"))
      .then(() => setLoginsetup(true))
      .catch((error) => alert(error.response.data.message));
  };

  /*Sign in, Update state and alert the User*/
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

  /*LogOut and clear jwtToken from cookies*/
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    setLoggedin(true);
    alert("succesfully Logged Out");
    setUsername("");
    setEmail("");
  };

  /*As the cookies expiry is set to 30min, This function will automatically Logout if the cookies expire*/
  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  return (
    <div className="background-container">
      <div className="main-container">
        {/*Side Header*/}
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
            {isLoggedIn ? (
              <div>
                <h1 className="Celeste">Hi, User</h1>
                <p className="Celestegmail">user@gmail.com</p>
              </div>
            ) : (
              <div>
                <h1 className="Celeste">Hi, {username}</h1>
                <p className="Celestegmail">{email}</p>
              </div>
            )}
          </div>

          {/*Side Header Product Options*/}
          <ul className="userwish2">
            <li className="list">Dashboard</li>
            <li className="list list2">Gastos</li>
            <li className="list list2">Billetera</li>
            <li className="list list2">Resumen</li>
            <li className="list list2">Cuentas</li>
            <li className="list list2">Configuracion</li>
          </ul>

          {/*Login/Logout Popup*/}
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
                    <div>
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
                      <div className="button_container">
                        <button
                          onClick={() => {
                            setLoginsetup(true);
                          }}
                          className="button1"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => {
                            setLoginsetup(false);
                          }}
                          className="button1"
                        >
                          Signup
                        </button>
                      </div>
                    </div>

                    {/*Login Popup Login and Signup Details*/}
                    <div className="App">
                      <div className="container">
                        {LoginSetUp ? (
                          <div className="loginwidth">
                            <div>
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
                                type={passwordShown ? "text" : "password"}
                                className="container_input"
                                onChange={(event) => {
                                  setPassword(event.target.value);
                                }}
                              />

                              <BiShow
                                onClick={() => {
                                  setPasswordShown(!passwordShown);
                                }}
                                className="showicon"
                              />
                            </div>
                            <div className="button_container">
                              <button
                                onClick={signInButton}
                                className="button1"
                              >
                                Sign in
                              </button>
                              <button
                                type="button"
                                className="button1"
                                onClick={() => close()}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
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
                              type={passwordShown ? "text" : "password"}
                              className="container_input"
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                            />
                            <BiShow
                              onClick={() => {
                                setPasswordShown(!passwordShown);
                              }}
                              className="showicon"
                            />
                            <div className="button_container">
                              <button
                                onClick={signUpButton}
                                className="button1"
                              >
                                Sign up
                              </button>
                              <button
                                type="button"
                                className="button1"
                                onClick={() => close()}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}
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

        {/*Dashboard Details*/}
        <div className="dashboarddisplay">
          <div className="dashboarddisplay1">
            {isLoggedIn ? (
              <div className="withoutlogincontainer">
                <p className="withoutlogin">Login in to Access the Data</p>
              </div>
            ) : (
              <DashboardDetails />
            )}
          </div>

          {/*Spending Statistic Details*/}
          <div className="dashboarddisplay2">
            {isLoggedIn ? (
              <div className="withoutlogincontainer">
                <p className="withoutlogin">Login in to Access the Data</p>
              </div>
            ) : (
              <Spend />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
