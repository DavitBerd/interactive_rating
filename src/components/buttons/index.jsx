import "./styles.css";

const Btn = ({ num, onSelect }) => {
  return <button onClick={() => onSelect(num)}>{num}</button>;
};

const Buttons = ({ onChoose, onSubmit }) => {
  return (
    <>
      <div className="buttonsBody">
        <Btn num={1} onSelect={onChoose} />
        <Btn num={2} onSelect={onChoose} />
        <Btn num={3} onSelect={onChoose} />
        <Btn num={4} onSelect={onChoose} />
        <Btn num={5} onSelect={onChoose} />
      </div>
      <div className="SubmitBody">
        <button className="Submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Buttons;
