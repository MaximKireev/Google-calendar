import "./Cell.css";

export const Cell = (props) => {
  let { id, valueWithData } = props;
  return (
    <div onClick={() => console.log(id)} id={id} className="day-wrapper">
      {valueWithData}
    </div>
  );
};
