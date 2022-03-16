import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: string;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [time, setTime] = React.useState(1);
  React.useEffect(() => {
    timed;
  }, [time]);
  const timed = setTimeout(() => setTime(time + 1), 1000);

  function Rdelete(event: any) {
    const titi = event.target.parentNode;
    titi.remove();
    clearTimeout(timed);
  }

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{time} seconds</p>
      <div className="btn btn-danger" onClick={Rdelete}>
        Delete
      </div>
    </li>
  );
};
