
import React from 'react';
import { useSelector } from "react-redux";

const RoomsList = () => {
	const Rooms = useSelector((state)=>{
		return state.tasks;
	});
console.log(Rooms)
	return (
		<ul className="tasks-list">
			{/* {Rooms.map((todo) => ( */}
				<div>
                    <h1>nameOfRoom : </h1>
                    <label>Switchboardnumber : </label>
                    <span>number</span>
                    <h1>Fans : </h1>
                    <h1>LightLoad : </h1>
                    <h1>HeavyLoad : </h1>
                </div>
			{/* ))} */}
		</ul>
	);
};

export default RoomsList;