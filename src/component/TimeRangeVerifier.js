import React, { useState } from "react";

import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import TimePicker from "react-time-picker";
import FontAwesome from "react-fontawesome";

const TimeRangeVerifier = () => {
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

	const isTimeInRange = (target, ranges) => {
		for (let i = 0; i < ranges.length; i++) {
			if (target.time >= ranges[i].start && target.time <= ranges[i].end) {
				return true;
			}
		}
	};

	return (
		<div>
			<section className='time--range section--container'>
				<h2 className='section--title'>Time Ranges</h2>
				<div className='section--body'>
					<TimeRangePicker
						className='picker'
						onChange={onRangeChange}
						value={rangeValue}
						disableClock={true}
					/>
					<button className='button--add' onClick={addRange}>
						<FontAwesome className='fas fa-plus' name='add' />
					</button>
					<ul className='list'>
						{ranges.map((range) => (
							<li className='list--item'>
								{range.start} ~ {range.end}
								<button className='button--delete'>
									<FontAwesome
										className='fas fa-minus '
										name='delete'
										onClick={deleteRange}
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className='time--selected section--container'>
				<h2 className='section--title'>Time Range Verifier</h2>
				<div className='section--body'>
					<TimePicker
						className='picker'
						onChange={onTimeChange}
						value={timeValue}
						disableClock={true}
					/>
					<button className='button--add' onClick={addTime}>
						<FontAwesome className='fas fa-plus' name='add' />
					</button>
					<ul className='list'>
						{times.map((time) => (
							<li className='list--item'>
								<FontAwesome
									className={
										isTimeInRange(time, ranges)
											? "fas fa-check mark in--range"
											: "fas fa-exclamation-triangle mark out--range"
									}
								/>
								{time.time}
								<button className='button--delete'>
									<FontAwesome
										className='fas fa-minus'
										name='delete'
										onClick={deleteTime}
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className='time--range--list section--container'>
				<h2 className='section--title'>Time Ranges</h2>
				<div className='section--body'>
					<ul className='list'>
						{ranges.map((range) => (
							<li className='list--item'>
								{range.start} ~ {range.end}
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default TimeRangeVerifier;
