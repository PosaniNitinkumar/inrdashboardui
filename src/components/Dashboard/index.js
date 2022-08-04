import "./index.css";
import { Line } from "rc-progress";

const Dashboard = () => (
  <div className="background-conatiner">
    <div className="main-container">
      <div className="userwish">
        <div>
          <div className="usericon"></div>
          <h1 className="Celeste">Hi, User</h1>
          <p className="Celestegmail">user@gmail.com</p>
        </div>
        <div>
          <ul className="userwish2">
            <li className="list">Dashboard</li>
            <li className="list list2">Gastos</li>
            <li className="list list2">Billetera</li>
            <li className="list list2">Resumen</li>
            <li className="list list2">Cuentas</li>
            <li className="list list2">Configuracion</li>
          </ul>
        </div>
        <div>
          <p className="login">Login</p>
        </div>
      </div>
      <div className="dashdisplay">
        <div className="dashdisplay1">
          <div>
            <h1 className="dashboardtext">Dashboard</h1>
            <p className="datetext">01-15 July, 2022</p>
          </div>
          <div className="second">
            <h1 className="hoy">Hoy</h1>
            <hr className="line" />
          </div>
        </div>
        <div className="dashdisplay2">
          <p className="spend">Spend Statistics</p>
          <div>
            <div className="gg">
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
            <div className="gg">
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
            <div className="gg">
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
            <div className="gg">
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
            <div className="gg">
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
            <p>Como ahorrar</p>
            <p>
              Activa este metodo para realizar ahorrosy verifica los procesos
              que te beneficien
            </p>
            <p className="send tips">SEND TIPS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
