export const HourCell = (props) => {
    let { value } = props;
  
    return (
      <div
        style={{
          width: "100%",
          border: "1px solid #DADCE0",
          height: "40px",
          textAlign: "left",
          fontSize: "10px"
        }}
        className="hour-cell-wrapper"
      >
        {value}
      </div>
    );
  };
  