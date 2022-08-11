import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTask } from "./Slicer";

export default function App() {
  let [Switchboard, setSwitchBoard] = useState([]);
  //let [Rooms,setRooms] = useState([]);
  let [RoomName, setRoomName] = useState("");
  let [Fan, setFan] = useState(0);
  let [LightLoad, setLightLoad] = useState(0);
  let [HeavyLoad, setHeavyLoad] = useState(0);
  let [Switchboardnumber, setSwitchboardnumber] = useState(1);

  const [BoardCurrentState, setBoardCurrentState] = useState(true);
  const [RoomCurrentState, setRoomCurrentState] = useState(true);
  const dispatch = useDispatch();

  const addRoomName = (event) => {
    setRoomName(event.target.value);

    // setBoardCurrentState(false);
    if (event.target.value.length > 0) {
      setBoardCurrentState(false);
    }
    if (event.target.value.length === 0) {
      setBoardCurrentState(true);
    }
  };

  const addSwitchBoard = () => {
    setSwitchboardnumber(Switchboardnumber + 1);

    setRoomCurrentState(false);
    const switchboard = {
      switchBoardNumber: Switchboardnumber,
      fan: Fan,
      lightLoad: LightLoad,
      heavyLoad: HeavyLoad,
    };
    setSwitchBoard((oldArray) => [...oldArray, { switchboard }]);
    setFan((Fan = 0));
    setHeavyLoad((HeavyLoad = 0));
    setLightLoad((LightLoad = 0));
    console.log(" board set");
  };

  const addRooms = () => {
    setBoardCurrentState(true);
    setRoomCurrentState(true);
    let obj = {
      RoomName: RoomName,
      Applinces: Switchboard,
    };
    dispatch(
      addTask({
        room: obj,
      })
    );
    obj = {};

    setSwitchboardnumber((Switchboardnumber = 1));
    setRoomName((RoomName = ""));
    setSwitchBoard((Switchboard = []));
    console.log("room set");
  };

  return (
    <div className="container">
      <div >
        <ul className="main">
          <li>
            ROOM : <input type="text" value={RoomName} onChange={addRoomName} />
            Switchboard no. : <span>{Switchboardnumber}</span>
          </li>
        </ul>
      </div>
      <div className="secondary">
        <ul>
          <li>
            FANS&emsp;&emsp;&emsp; :{" "}
            <input
              className="fan"
              type="number"
              value={Fan}
              min="0"
              disabled={BoardCurrentState}
              onChange={(event) => setFan(event.target.value)}
            />
          </li>
          <li>
            LIGHTLOAD :{" "}
            <input
              type="number"
              min="0"
              value={LightLoad}
              disabled={BoardCurrentState}
              onChange={(event) => setLightLoad(event.target.value)}
            />
          </li>
          <li>
            HEAVYLOAD :{" "}
            <input
              type="number"
              min="0"
              value={HeavyLoad}
              disabled={BoardCurrentState}
              onChange={(event) => setHeavyLoad(event.target.value)}
            />
          </li>
        </ul>
        <div className="bton">
          <button disabled={RoomCurrentState} onClick={addRooms}>
            Add rooms
          </button>
          <button onClick={addSwitchBoard} disabled={BoardCurrentState}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
