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
		<Button onClick={() => handleClick()} type="button">
			Generate Report
		</Button>
	);
};

export default ButtonGenerateReport;
