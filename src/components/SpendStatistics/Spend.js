import "./Spend.css";
import { Line } from "rc-progress";
const Spend = () => (
  <div>
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
      <div className="boxpot">
        <div className="boxes">
          <img
            src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659762463/blue_abl5tv.png"
            alt=""
            className="boximage1"
          />
          <img
            src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659762463/brown_bwyzhj.png"
            alt=""
            className="boximage2"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dwjfzvlsd/image/upload/v1659762463/pot_hzum2c.png"
          alt=""
          className="boximage3"
        />
      </div>

      <p className="sendtext">Como ahorrar</p>
      <p className="sendpara">
        Activa este metodo para realizar ahorrosy verifica los procesos que te
        beneficien
      </p>
      <p className="send">SEND TIPS</p>
    </div>
  </div>
);

export default Spend;
