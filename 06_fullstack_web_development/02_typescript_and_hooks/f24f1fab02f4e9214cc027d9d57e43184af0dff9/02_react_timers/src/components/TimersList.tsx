import React from "react";
import { Timer } from "./Timer";
import { v4 as uuidv4 } from "uuid";

const TimersList: React.FC = () => {
  const [toto, setToto] = React.useState<string[]>([]);
  function addTimer() {
    const id = uuidv4();
    setToto([...toto, id]);
  }

  return (
    <div>
      <ul className="list-group timers-list">
        <li className="list-group-item text-center">
          <button className="btn btn-primary" onClick={addTimer}>
            Add a timer
          </button>
        </li>

        {toto.map((element) => {
          return <Timer key={element} timerId={element} removeTimer={element} />;
        })}
      </ul>
    </div>
  );
};

export default TimersList;
