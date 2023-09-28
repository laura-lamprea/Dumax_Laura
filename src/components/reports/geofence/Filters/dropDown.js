import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

const Select = ({ name, type, onChange }) => {
	const [options, setOptions] = useState([]);
	const optionsMap = {
		geo: ["Monterrey", "Ciudad de México", "Texas", "Los Angeles", "Laredo"],
		unit: ["Base 1525", "Base 1458", "Base 1258"],
		date: ["Q1", "Q2", "Q3", "Q4"],
	};
	useEffect(() => {
		setOptions(optionsMap[type] || []);
	}, []);

	return (
		<Input id={name} name={name} type="select" onChange={onChange}>
			<option value="">Select an option</option>
			{options?.map((option, key) => (
				<option key={key}>{option}</option>
			))}
		</Input>
	);
};

export default Select;
