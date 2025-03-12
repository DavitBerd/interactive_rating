import "./App.css";
import img from "../src/imgs/Star.png";
import Buttons from "./components/buttons";
import Notification from "./components/notificationthing";
import { useState } from "react";

function App() {
  const [selectedNum, setSelectedNum] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (num) => {
    setSelectedNum(num);
  };
  const handleSubmit = () => {
    if (selectedNum !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="main">
          <div className="main_1">
            <div className="starBody">
              <div className="star">
                <img src={img} alt="Star" />
              </div>
            </div>
            <div className="texts">
              <p className="text1">How did we go?</p>
              <p className="text2">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <Buttons onChoose={handleSelect} onSubmit={handleSubmit} />
          </div>
        </div>
      ) : (
        <Notification selectedNum={selectedNum} />
      )}
    </>
  );
}

export default App;
