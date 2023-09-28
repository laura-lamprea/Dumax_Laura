import React from "react";
import { useDispatch } from "react-redux";
import { getGeofence } from "../../../../redux/common/actions";
import { Button } from "reactstrap";

const ButtonGenerateReport = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(getGeofence());
	};

	return (
		<Button
			onClick={() => handleClick()}
			type="button"
			style={{ height: "2.5rem", background: "#1a82c5", }}
		>
			Generate Report
		</Button>
	);
};

export default ButtonGenerateReport;
