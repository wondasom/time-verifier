import React, { useState } from "react";
import TimePicker from "react-time-picker";
import FontAwesome from "react-fontawesome";

const SelectedTime = () => {
	const [timeValue, onTimeChange] = useState(["10:30"]);

	const [times, setTimes] = useState([]);

	const addTime = () => {
		const newTimes = [...times, { time: timeValue }];
		setTimes(newTimes);
	};

	const deleteTime = (index) => {
		const afterDelete = Object.assign([], times);
		afterDelete.splice(index, 1);
		setTimes(afterDelete);
	};


	return (
		<div>
			<h2>Selected Time</h2>
			<TimePicker
				onChange={onTimeChange}
				value={timeValue}
				disableClock={true}
			/>
			<button onClick={addTime}>ADD</button>
			<ul>
				{times.map((time) => (
					<li>
						<p style={false ? { color: "red" } : { color: "green" }}>
							status
						</p>
						{time.time}
						<FontAwesome
							className='fas fa-minus button'
							name='delete'
							onClick={deleteTime}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SelectedTime;
