import React from "react";
import { Container, Row, Col, Card, FormGroup, Label } from "reactstrap";
import SelectDropDown from "./dropDown";
import ButtonGenerate from "./buttonGenerateReport";

const GeofenceFilters = () => {
	return (
		<Container fluid={true}>
			<Row>
				<Col sm="12">
					<Card>
						<div style={mainContainer}>
							<div style={selectStyle}>
								<FormGroup style={groupStyle}>
									<Label for="geocerca">Geofence*</Label>
									<SelectDropDown name="geocerca" type="geo" />
								</FormGroup>
								<FormGroup style={groupStyle}>
									<Label for="geocerca">Units*</Label>
									<SelectDropDown name="unidades" type="unit" />
								</FormGroup>
								<FormGroup style={groupStyle}>
									<Label for="geocerca">Date ranges*</Label>
									<SelectDropDown name="date" type="date" />
								</FormGroup>
							</div>
							<ButtonGenerate />
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default GeofenceFilters;

const mainContainer = {
	display: "flex",
	justifyContent: "space-between",
	padding: "20px",
};
const selectStyle = {
	display: "flex",
	justifyContent: "space-between",
	gap: "50px",
	width: "70%",
};
const groupStyle = {
	width: "100%",
};
