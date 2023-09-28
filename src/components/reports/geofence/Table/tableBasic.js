import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const TableBasic = () => {
	const geofence = useSelector((state) => state.Common.geofence);
	return (
		<Table striped>
			<thead>
				<tr style={{ background: "black" }}>
					<th style={rowStyle}>Unit name</th>
					<th style={rowStyle}>Geofence</th>
					<th style={rowStyle}>Geofence type</th>
					<th style={rowStyle}>Entry date</th>
					<th style={rowStyle}>Departure date</th>
					<th style={rowStyle}>Duration</th>
				</tr>
			</thead>
			<tbody>
				{geofence.length > 0 ? (
					geofence?.map((item, index) => (
						<tr key={index}>
							<td>{item.nombreUnidad}</td>
							<td>{item.nombreGeocerca}</td>
							<td>{item.tipoDeGeocerca}</td>
							<td>{item.timeStamps.entrada}</td>
							<td>{item.timeStamps.salida}</td>
							<td>2023-07-10 09:55:30</td>
						</tr>
					))
				) : (
					<tr>
						<td>No data yet</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default TableBasic;

const rowStyle = { color: "white" };
