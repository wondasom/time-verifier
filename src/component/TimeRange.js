import React, { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import FontAwesome from "react-fontawesome";


const TimeRange = () => {
	const [rangeValue, onRangeChange] = useState(["10:00", "11:00"]);
	const [ranges, setRanges] = useState([]);

	const addRange = () => {
		const newRanges = [
			...ranges,
			{
				start: rangeValue[0],
				end: rangeValue[1]
			}
		];
        setRanges(newRanges);
	};

	const deleteRange = (index) => {
		const afterDelete = Object.assign([], ranges);
		afterDelete.splice(index, 1);
		setRanges(afterDelete);
	};

	return (
		<div>
			<h2>Time Range</h2>
			<TimeRangePicker
				className='range'
				onChange={onRangeChange}
				value={rangeValue}
				disableClock={true}
			/>
			<button onClick={addRange}>ADD</button>
			<ul>
				{ranges.map((range, index) => (
					<li>
						{range.start} ~ {range.end}
						<FontAwesome
							className='fas fa-minus button'
							name='delete'
							onClick={deleteRange}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TimeRange;
