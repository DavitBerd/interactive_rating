import "./style.css";
import img1 from "../../imgs/Online payment_Two Color(1)_2.png";
const Notification = ({ selectedNum }) => {
  return (
    <div className="main">
      <div className="main_1">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="notiffication">
          <p>You selected {selectedNum} out of 5</p>
        </div>
        <div className="texts1">
          <p className="text1">Thank you!</p>
          <p className="text2">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
